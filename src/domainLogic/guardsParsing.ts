import { GdprGroupBuilder, GdprManagerBuilder } from "gdpr-guard";
import {
	checkboxFromDOM,
	descriptionFromDOM,
	guardIsRequiredInDOM,
	nameFromDOM,
	storageFromDOM
} from "@/domainLogic/dataExtractors";
import { childSelectorAll, forEachChild } from "@/utils/dom";

export interface GuardParseResult {
	name: string;
	checkbox: HTMLInputElement;
}

/**
 * Parse a guard's data and add it to the manager
 * @param guardEl - The root element of the gaurd's data
 * @param groupBuilder - The current group builder's state
 * @param parentRequired - Whether the group is required
 */
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

/**
 * Get the data for a group and add it to the manager
 * @param groupEl - The root of the group's data
 * @param managerBuilder - The current manager (or group) builder's state
 * @param parentRequired - Whether the manager (or parent group) is required
 * @throws {NoNameError} - If the group's name or a guard's name cannot be parsed
 */
const addGroup = (groupEl: HTMLElement, managerBuilder: GdprManagerBuilder, parentRequired: boolean): GuardParseResult[] => {
	const groupBuilder = managerBuilder.startGroup();

	// The name is mandatory, if it can't parse it then it'll throw
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

/**
 * Recursively add the child guards of a group to the manager
 * @param rootEl - The root element for that group
 * @param groupBuilder - The current group builder's state
 * @param required - Whether the group is required
 */
const addChildGuards = (rootEl: HTMLElement, groupBuilder: GdprGroupBuilder, required: boolean = false): GuardParseResult[] => {
	const parsedGuards = [] as GuardParseResult[];

	forEachChild(rootEl, el => {
		if (el?.matches("[data-gdpr-group]")) {
			const guards = addGroup(el as HTMLElement, groupBuilder, required);
			parsedGuards.push(...guards);
		} else if (el?.matches("[data-gdpr-guard")) {
			const guard = addGuard(el as HTMLElement, groupBuilder, required);
			parsedGuards.push(guard);
		}
	});

	return parsedGuards;
};

/**
 * Get the guards from the DOM and add them all to the manager
 * @param managerEl - The root element of the manager's definition
 * @param managerBuilder - The current manager builder's state
 */
export const addGuardsFromDOM = (managerEl: HTMLElement, managerBuilder: GdprManagerBuilder): GuardParseResult[] => {
	return childSelectorAll(managerEl, "[data-gdpr-group]")
		.flatMap(el => {
			return addGroup(el as HTMLElement, managerBuilder, false);
		});
};
