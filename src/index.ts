import { NoManagerDefinitionError } from "@/errors/NoManagerDefinitionError";
import { GdprGroupBuilder, GdprManager, GdprManagerBuilder, GdprSavior, GdprStorage } from "gdpr-guard";
import { NoCheckboxError } from "@/errors/NoCheckboxError";
import { childSelector, childSelectorAll, findChild, forEachChild } from "@/utils/dom";
import {
	checkboxFromDOM,
	descriptionFromDOM,
	guardIsRequiredInDOM,
	nameFromDOM,
	storageFromDOM
} from "@/utils/dataExtractors";
import { isMeaningfulStr } from "@/utils/misc";
import { GdprManagerEventHub } from "gdpr-guard/dist/GdprManagerEventHub";

export interface GuardParseResult {
	name: string;
	checkbox: HTMLInputElement;
}

const parseManagerDetails = (gdprEl: HTMLElement) => {
	let managerEl = gdprEl;
	const { gdpr } = gdprEl.dataset;
	let managerName: string = "";

	if (isMeaningfulStr(gdpr)) {
		managerName = gdpr;
	} else {
		const el = gdprEl.querySelector("[data-gdpr-manager]");

		if (!el) {
			throw new NoManagerDefinitionError();
		}

		managerEl = el as HTMLElement;
		managerName = nameFromDOM(managerEl, "gdpr-manager");
	}

	const managerCheckbox = checkboxFromDOM(managerEl, managerName);

	return {
		managerEl,
		managerCheckbox,
		managerName,
	};
};

const addGuard = (guardEl: HTMLElement, groupBuilder: GdprGroupBuilder, parentRequired: boolean): GuardParseResult => {
	const guardBuilder = groupBuilder.startGuard();

	const name = nameFromDOM(guardEl, "gdpr-guard");
	guardBuilder.withName(name);

	const checkbox = checkboxFromDOM(guardEl, name);

	const isRequired = parentRequired || guardIsRequiredInDOM(guardEl, checkbox)

	if (isRequired) {
		guardBuilder.required().enabled();
	} else if (checkbox.checked) {
		guardBuilder.enabled();
	} else {
		guardBuilder.disabled();
	}

	const description = descriptionFromDOM(guardEl);

	if (description) {
		guardBuilder.withDescription(description);
	}

	const storage = storageFromDOM(guardEl);

	if (storage !== null) {
		guardBuilder.storedIn(storage);
	}

	guardBuilder.endGuard();

	return {
		name,
		checkbox,
	};
};

const addGroup = (groupEl: HTMLElement, managerBuilder: GdprManagerBuilder, parentRequired: boolean): GuardParseResult[] => {
	const groupBuilder = managerBuilder.startGroup();

	const name = nameFromDOM(groupEl, "gdpr-group");
	groupBuilder.withName(name);

	const checkbox = checkboxFromDOM(groupEl, name);

	const parsedGuards = [{
		name,
		checkbox,
	}];

	const isRequired = parentRequired || guardIsRequiredInDOM(groupEl, checkbox)

	if (isRequired) {
		groupBuilder.required().enabled();
	} else if (checkbox.checked) {
		groupBuilder.enabled();
	} else {
		groupBuilder.disabled();
	}

	const description = descriptionFromDOM(groupEl);

	if (description) {
		groupBuilder.withDescription(description);
	}

	const storage = storageFromDOM(groupEl);

	if (storage !== null) {
		groupBuilder.storedIn(storage);
	}

	// Recursively parse child guards from there
	const guards = addChildGuards(groupEl, groupBuilder, isRequired);
	groupBuilder.endGroup();


	parsedGuards.push(...guards);
	return parsedGuards;
};

const addChildGuards = (rootEl: HTMLElement, groupBuilder: GdprGroupBuilder, required: boolean = false) => {
	const parsedGuards = [];

	forEachChild(rootEl, el => {
		if (el?.matches("[data-gdpr-group]")) {
			addGroup(el as HTMLElement, groupBuilder, required);
		} else if(el?.matches("[data-gdpr-guard")) {
			addGuard(el as HTMLElement, groupBuilder, required);
		}
	});

	return parsedGuards;
};

const setupCheckboxListeners = (manager: GdprManager, managerCheckbox: HTMLInputElement, parsedGuards: GuardParseResult[]) => {
	managerCheckbox.addEventListener("change", () => {
		manager.toggle();
	});

	parsedGuards.forEach(({ name, checkbox }) => {
		const guard = manager.getGuard(name)!;

		checkbox.addEventListener("change", () => {
			guard.toggle();
		});
	});
};

const parseGuardsFromDOM = (managerEl: HTMLElement, managerBuilder: GdprManagerBuilder) => {
	const parsedGuards = [] as GuardParseResult[];

	childSelectorAll(managerEl, "[data-gdpr-group]")
		.forEach(el => {
			const guards = addGroup(el as HTMLElement, managerBuilder, false);
			parsedGuards.push(...guards);
		});

	return parsedGuards;
};

const setupScriptActivation = (manager: GdprManager) => {
	document.querySelectorAll<HTMLScriptElement>("script[type='text'][src][data-gdpr-on-enable]")
		.forEach(script => {
			const guardName = script.dataset.gdprOnEnable!;

			if (manager.hasGuard(guardName)) {
				manager.events.onEnable(guardName, () => {
					const actualScript = script.cloneNode(true) as HTMLScriptElement;
					actualScript.type = "text/javascript";
					script.remove();
					document.head.appendChild(actualScript);
				});
			} else {
				script.remove();
			}
		});
};

const setupStyleSheetsActivation = (manager: GdprManager) => {
	document.querySelectorAll<HTMLLinkElement>("link[href][data-gdpr-on-enable]")
		.forEach(styleSheet => {
			const guardName = styleSheet.dataset.gdprOnEnable!;

			if (manager.hasGuard(guardName)) {
				manager.events.onEnable(guardName, () => {
					const actualStyleeSheet = styleSheet.cloneNode(true) as HTMLLinkElement;
					actualStyleeSheet.rel = "stylesheet";
					styleSheet.remove();
					document.head.appendChild(actualStyleeSheet);
				});
			} else {
				styleSheet.remove();
			}
		});
};

export type BindEventsCallback = (eventsHub: GdprManagerEventHub) => void;

const GlobalEventBus = {
	events: {} as Record<string, Record<string, Array<(e: Event) => void>>>,
	on(event: string, selector: string, listener: (e: Event) => void) {
		if (!(event in this.events)) {
			this.events[event] = {
				[selector]: [listener],
			};

			window.addEventListener(event, e => {
				Object.entries(this.events[event])
					.forEach(([selector, listeners]: [string, (typeof listener)[]]) => {
						if ((e.target as HTMLElement|null)?.matches?.(selector)) {
							listeners.forEach(listener => listener(e));
						}
					});
			});
		} else {
			const eventManager = this.events[event];

			if (!(selector in eventManager)) {
				eventManager[selector] = [listener];
			} else {
				eventManager[selector].push(listener);
			}
		}

	}
};

const setupButtonsListeners = (manager: GdprManager, gdprSavior: GdprSavior) => {
	// TODO: Bind event listeners to buttons -> data-gdpr-cancel, data-gdpr-save

	GlobalEventBus.on("click", "[data-gdpr-open]", e => {
		e.preventDefault();

		manager.resetAndShowBanner();
	});

	GlobalEventBus.on("click", "[data-gdpr-decline-all]", e => {
		e.preventDefault();

		manager.disable();
		gdprSavior.store(manager.raw());

		// TODO: error handling
	});

	GlobalEventBus.on("click", "[data-gdpr-allow-all]", e => {
		e.preventDefault();

		manager.enable();
		gdprSavior.store(manager.raw());

		// TODO: error handling
	});

	GlobalEventBus.on("click", "[data-gdpr-save]", e => {
		e.preventDefault();

		gdprSavior.store(manager.raw());

		// TODO: error handling
	});
};

export const createManager = async (gdprSavior: GdprSavior, gdprEl: HTMLElement|undefined = undefined, bindEventHandlers: BindEventsCallback = () => {}): Promise<GdprManager> => {
	if (typeof gdprEl === "undefined") {
		gdprEl = document.querySelector("[data-gdpr]") as HTMLElement ?? undefined;

		if (typeof gdprEl === "undefined") {
			throw new NoManagerDefinitionError();
		}
	}

	const { managerEl, managerCheckbox, managerName } = parseManagerDetails(gdprEl);

	const managerBuilder = GdprManagerBuilder.make();
	const parsedGuards = parseGuardsFromDOM(managerEl, managerBuilder);
	const manager = await gdprSavior.restoreOrCreate(async () => managerBuilder.build());

	setupCheckboxListeners(manager, managerCheckbox, parsedGuards);
	setupButtonsListeners(manager, gdprSavior);
	setupScriptActivation(manager);
	setupStyleSheetsActivation(manager);

	bindEventHandlers(manager.events);

	if (manager.bannerWasShown) {
		manager.closeBanner();
	}

	return manager;
};
