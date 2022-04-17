import { GdprManager, GdprSavior } from "gdpr-guard";
import { GdprManagerEventHub } from "gdpr-guard/dist/GdprManagerEventHub";
import { GlobalEventBus } from "@/utils/eventBus";
import { GuardParseResult } from "@/domainLogic/guardsParsing";

export const setupCheckboxListeners = (manager: GdprManager, managerCheckbox: HTMLInputElement, parsedGuards: GuardParseResult[]) => {
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

export const setupInHeadActivation = <ItemType extends HTMLElement = HTMLElement>(
	manager: GdprManager,
	itemSelector: string,
	setupItem: (item: ItemType) => void
) => {
	document.querySelectorAll<ItemType>(itemSelector)
		.forEach(item => {
			const guardName = item.dataset.gdprOnEnable!;

			if (manager.hasGuard(guardName)) {
				manager.events.onEnable(guardName, () => {
					const clonedItem = item.cloneNode(true) as ItemType;
					setupItem(clonedItem);
					item.remove();
					document.head.appendChild(clonedItem);
				});
			} else {
				item.remove();
			}
		});
};

export const setupScriptActivation = (manager: GdprManager) => {
	setupInHeadActivation<HTMLScriptElement>(
		manager,
		"script[type='text'][src][data-gdpr-on-enable]",
		actualScript => {
			actualScript.type = "text/javascript";
		}
	);
};

export const setupStyleSheetsActivation = (manager: GdprManager) => {
	setupInHeadActivation<HTMLLinkElement>(
		manager,
		"link[href][data-gdpr-on-enable]",
		actualStyleSheet => {
			actualStyleSheet.rel = "stylesheet";
		}
	);
};

export type BindEventsCallback = (eventsHub: GdprManagerEventHub) => void;

export const setupButtonsListeners = (manager: GdprManager, gdprSavior: GdprSavior) => {
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
