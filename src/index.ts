import { NoManagerDefinitionError } from "@/errors/NoManagerDefinitionError";
import { GdprGroupBuilder, GdprManagerBuilder, GdprStorage } from "gdpr-guard";
import { NoNameError } from "@/errors/NoNameError";
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

const addGuard = (guardEl: HTMLElement, groupBuilder: GdprGroupBuilder, parentRequired: boolean) => {
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
};

const addGroup = (groupEl: HTMLElement, managerBuilder: GdprManagerBuilder, parentRequired: boolean) => {
	const groupBuilder = managerBuilder.startGroup();

	const name = nameFromDOM(groupEl, "gdpr-group");
	groupBuilder.withName(name);

	const checkbox = checkboxFromDOM(groupEl, name);

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
	parseChildGuards(groupEl, groupBuilder, isRequired);
	groupBuilder.endGroup();
};

const parseChildGuards = (rootEl: HTMLElement, groupBuilder: GdprGroupBuilder, required: boolean = false) => {
	forEachChild(rootEl, el => {
		if (el?.matches("[data-gdpr-group]")) {
			addGroup(el as HTMLElement, groupBuilder, required);
		} else if(el?.matches("[data-gdpr-guard")) {
			addGuard(el as HTMLElement, groupBuilder, required);
		}
	});
};

const omniParse = (gdprEl: HTMLElement|undefined = undefined) => {
	if (typeof gdprEl === "undefined") {
		gdprEl = document.querySelector("[data-gdpr]") as HTMLElement ?? undefined;

		if (typeof gdprEl === "undefined") {
			throw new NoManagerDefinitionError();
		}
	}

	const { managerEl, managerCheckbox, managerName } = parseManagerDetails(gdprEl);

	const managerBuilder = GdprManagerBuilder.make();

	childSelectorAll(managerEl, "[data-gdpr-group]")
		.forEach(el => addGroup(el as HTMLElement, managerBuilder, false));

	const managerFromDOM = managerBuilder.build();
};
