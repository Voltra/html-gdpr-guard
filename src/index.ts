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

const entryPointToName = async (gdprSavior: GdprSavior, gdprEl: HTMLElement|undefined = undefined): Promise<GdprManager> => {
	if (typeof gdprEl === "undefined") {
		gdprEl = document.querySelector("[data-gdpr]") as HTMLElement ?? undefined;

		if (typeof gdprEl === "undefined") {
			throw new NoManagerDefinitionError();
		}
	}

	const { managerEl, managerCheckbox, managerName } = parseManagerDetails(gdprEl);

	const managerBuilder = GdprManagerBuilder.make();

	const parsedGuards = [] as GuardParseResult[];

	childSelectorAll(managerEl, "[data-gdpr-group]")
		.forEach(el => {
			const guards = addGroup(el as HTMLElement, managerBuilder, false);
			parsedGuards.push(...guards);
		});

	const manager = await gdprSavior.restoreOrCreate(async () => managerBuilder.build());

	managerCheckbox.addEventListener("change", () => {
		manager.toggle();
	});

	parsedGuards.forEach(({ name, checkbox }) => {
		const guard = manager.getGuard(name)!;

		checkbox.addEventListener("change", () => {
			guard.toggle();
		});
	});

	// TODO: Parse scripts dependencies
	// TODO: Setup event handlers for scripts
	// TODO: Provide extension point for setting event handlers

	if (manager.bannerWasShown) {
		manager.closeBanner();
	}

	return manager;
};
