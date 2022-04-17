import { childSelector } from "@/utils/dom";
import { NoNameError } from "@/errors/NoNameError";
import { NoCheckboxError } from "@/errors/NoCheckboxError";
import { GdprStorage } from "gdpr-guard";
import { isMeaningfulStr } from "@/utils/misc";
import { NoManagerDefinitionError } from "@/errors/NoManagerDefinitionError";

/**
 * Get the guard's name from the DOM
 * @param guardEl - The guard element to query
 * @param guardDataKey - The key in the dataset of {@link guardEl} where the name could be
 * @param nameDataKey - The name of the data attribute that can be found in child nodes to parse the name
 * @throws {NoNameError} - If it can't find the guard's name
 */
export const nameFromDOM = (guardEl: HTMLElement, guardDataKey: string, nameDataKey: string = "gdpr-guard-name"): string => {
	const str = guardEl.dataset[guardDataKey];

	if (isMeaningfulStr(str)) {
		return str;
	}

	// const nameHolder: HTMLElement|null = guardEl.querySelector(`[data-${nameDataKey}]`);
	const nameHolder: HTMLElement|null = childSelector(guardEl, `[data-${nameDataKey}]`);

	const name = nameHolder?.dataset[nameDataKey];
	if (!isMeaningfulStr(name)) {
		const textName = nameHolder?.textContent;

		if (textName) {
			return textName;
		}

		throw new NoNameError();
	}

	return name;
};

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

export const descriptionFromDOM = (guardEl: HTMLElement) => {
	if (guardEl.hasAttribute("data-gdpr-guard-description")) {
		return guardEl.dataset.gdprGuardDescription;
	}

	const descriptionEl = guardEl.querySelector("[data-gdpr-guard-description]");

	return descriptionEl?.textContent ?? null;
};

export const storageFromDOM = (guardEl: HTMLElement): GdprStorage|null => {
	if (guardEl.hasAttribute("data-gdpr-guard-storage")) {
		const rawStorage = guardEl.dataset.gdprGuardStorage;

		if (rawStorage && rawStorage in GdprStorage) {
			return GdprStorage[rawStorage];
		}
	}

	return null;
};

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
export const parseManagerDetails = (gdprEl: HTMLElement) => {
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
