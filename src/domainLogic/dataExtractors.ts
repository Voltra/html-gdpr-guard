import { childSelector } from "@/utils/dom";
import { NoNameError } from "@/errors/NoNameError";
import { NoCheckboxError } from "@/errors/NoCheckboxError";
import { GdprStorage } from "gdpr-guard";
import { isMeaningfulStr, toCamelCase } from "@/utils/misc";
import { NoManagerDefinitionError } from "@/errors/NoManagerDefinitionError";

/**
 * Get the guard's name from the DOM
 * @param guardEl - The guard element to query
 * @param guardDataKey - The key in the dataset of {@link guardEl} where the name could be
 * @param nameDataKey - The name of the data attribute that can be found in child nodes to parse the name
 * @throws {NoNameError} - If it can't find the guard's name
 */
export const nameFromDOM = (guardEl: HTMLElement, guardDataKey: string, nameDataKey: string = "gdpr-guard-name"): string => {
	const str = guardEl.dataset[toCamelCase(guardDataKey)];

	if (isMeaningfulStr(str)) {
		return str.trim();
	}

	// const nameHolder: HTMLElement|null = guardEl.querySelector(`[data-${nameDataKey}]`);
	const nameHolder: HTMLElement|null = childSelector(guardEl, `[data-${nameDataKey}]`);

	const name = nameHolder?.dataset[nameDataKey];
	if (!isMeaningfulStr(name)) {
		const textName = nameHolder?.textContent;

		if (isMeaningfulStr(textName)) {
			return textName.trim();
		}

		throw new NoNameError();
	}

	return name.trim();
};

/**
 * Get the guard's checkbox from the DOM
 * @param guardEl - The root of the guard's tree
 * @param guardName - The guard's name
 */
export const checkboxFromDOM = (guardEl: HTMLElement, guardName: string) => {
	const strategies = [
		() => document.getElementById(guardName), // by ID
		() => guardEl.querySelector(`[type="checkbox"][name="${guardName}"]`), // by name
		() => guardEl.querySelector(`[data-gdpr-checkbox]`), // by specific attribute
	];

	for (const strategy of strategies) {
		const checkbox = strategy();

		if (checkbox?.matches?.("input[type='checkbox']")) {
			return checkbox as HTMLInputElement;
		}
	}

	throw new NoCheckboxError();
};

/**
 * Retrieve the guard's description from the DOM
 * @param guardEl - The root of the guard's state tree
 */
export const descriptionFromDOM = (guardEl: HTMLElement) => {
	if (guardEl.hasAttribute("data-gdpr-guard-description")) {
		return guardEl.dataset.gdprGuardDescription;
	}

	const descriptionEl = guardEl.querySelector("[data-gdpr-guard-description]");

	return descriptionEl?.textContent ?? null;
};

/**
 * Get the {@link GdprStorage} from the DOM
 * @param guardEl - The root the guard's state tree
 */
export const storageFromDOM = (guardEl: HTMLElement): GdprStorage|null => {
	if (guardEl.hasAttribute("data-gdpr-guard-storage")) {
		const rawStorage = guardEl.dataset.gdprGuardStorage;

		if (rawStorage && rawStorage in GdprStorage) {
			return GdprStorage[rawStorage];
		}
	}

	return null;
};

/**
 * Check whether the guard is marked as required in the DOM
 * @param guardEl - The root of the guard's state tree
 * @param checkbox - The guard's checkbox
 */
export const guardIsRequiredInDOM = (guardEl: HTMLElement, checkbox: HTMLInputElement) => {
	if (checkbox.required) {
		guardEl.setAttribute("gdpr-guard-required", "");
		checkbox.setAttribute("checked", "checked");
		return true;
	}

	if (guardEl.hasAttribute("gdpr-guard-required")) {
		checkbox.setAttribute("required", "required");
		checkbox.setAttribute("checked", "checked");
		return true;
	}

	return false;
};

/**
 * Extract the manager's own details from the DOM
 * @param gdprEl - The root of the GDPR state tree
 */
export const parseManagerDetails = (gdprEl: HTMLElement) => {
	let managerEl = gdprEl;
	const { gdpr } = gdprEl.dataset;
	let managerName: string = "";

	if (isMeaningfulStr(gdpr)) {
		managerName = gdpr;
	} else {
		const el = gdprEl.querySelector<HTMLElement>("[data-gdpr-manager]");

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
