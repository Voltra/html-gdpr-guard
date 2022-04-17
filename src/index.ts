import { NoManagerDefinitionError } from "@/errors/NoManagerDefinitionError";
import { GdprManager, GdprManagerBuilder, GdprSavior } from "gdpr-guard";
import { parseManagerDetails } from "@/domainLogic/dataExtractors";
import { GdprManagerEventHub } from "gdpr-guard/dist/GdprManagerEventHub";
import { addGuardsFromDOM } from "@/domainLogic/guardsParsing";
import {
	BindEventsCallback,
	setupButtonsListeners,
	setupCheckboxListeners,
	setupScriptActivation,
	setupStyleSheetsActivation
} from "@/domainLogic/listeners";


export interface GdprHtmlManagerOptions {
	/**
	 * The element that serves as the root of the GDPR manager's definition in the DOM
	 * @default document.querySelector("[data-gdpr]")
	 */
	gdprEl?: HTMLElement;

	/**
	 * A callback to attach event listeners to the {@link GdprManagerEventHub} before finalizing the setup
	 * @default () => {}
	 */
	bindEventHandlers?: BindEventsCallback;

	/**
	 * Add guards before the ones parsed from the DOM
	 * @param managerBuilder
	 * @default () => {}
	 */
	addGuardsBefore?: (managerBuilder: GdprManagerBuilder) => void;

	/**
	 * Add guards after the ones parsed from the DOM
	 * @param managerBuilder
	 * @default () => {}
	 */
	addGuardsAfter?: (managerBuilder: GdprManagerBuilder) => void;

	/**
	 * Whether to auto close the banner (only if it has already been displayed to the user)
	 * @default true
	 */
	autoCloseBanner?: boolean;
}

// TODO: Doc blocks
// TODO: Two-way binding? Would required a wrapper

/**
 * Initialize the gdpr-guard logic from the DOM or the provided {@link GdprSavior}
 * @param gdprSavior - The savior to use to restore and save the {@link GdprManager} data
 * @param {GdprHtmlManagerOptions} [options] - The setup's options
 * @returns {Promise<GdprManager>} The restored GDPR manager
 * @throws {NoManagerDefinitionError} - If no manager definition can be found
 * (either {@link gdprEl} is `undefined` or `document.querySelector("[data-gdpr]")` returned `null`)
 */
export const restoreHtmlGdprManager = async (gdprSavior: GdprSavior, {
	gdprEl = undefined,
	bindEventHandlers = () => {},
	addGuardsBefore = () => {},
	addGuardsAfter = () => {},
	autoCloseBanner = true,
}: GdprHtmlManagerOptions = {}): Promise<GdprManager> => {
	if (typeof gdprEl === "undefined") {
		gdprEl = document.querySelector<HTMLElement>("[data-gdpr]") ?? undefined;

		if (typeof gdprEl === "undefined") {
			throw new NoManagerDefinitionError();
		}
	}

	const { managerEl, managerCheckbox, managerName } = parseManagerDetails(gdprEl);

	const managerBuilder = GdprManagerBuilder.make();

	addGuardsBefore(managerBuilder);
	const parsedGuards = addGuardsFromDOM(managerEl, managerBuilder);
	addGuardsAfter(managerBuilder);

	const manager = await gdprSavior.restoreOrCreate(async () => managerBuilder.build());

	setupCheckboxListeners(manager, managerCheckbox, parsedGuards);
	setupButtonsListeners(manager, gdprSavior);
	setupScriptActivation(manager);
	setupStyleSheetsActivation(manager);

	bindEventHandlers(manager.events);

	if (autoCloseBanner && manager.bannerWasShown) {
		manager.closeBanner();
	}

	return manager;
};
