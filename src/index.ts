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
	setupStyleSheetsActivation,
	StoreErrorHandler,
} from "@/domainLogic/listeners";


export interface GdprHtmlManagerOptions {
	/**
	 * The element that serves as the root of the GDPR manager's definition in the DOM
	 * @default document.querySelector("[data-gdpr]")
	 */
	gdprEl?: HTMLElement;

	/**
	 * Whether to auto close the banner (only if it has already been displayed to the user)
	 * @default true
	 */
	autoCloseBanner?: boolean;

	// HOOKS

	/**
	 * A callback to attach event listeners to the {@link GdprManagerEventHub} before finalizing the setup
	 * @default () => {}
	 */
	bindEventHandlersHook?: BindEventsCallback;

	/**
	 * Add guards before the ones parsed from the DOM
	 * @param managerBuilder
	 * @default () => {}
	 */
	addGuardsBeforeHook?: (managerBuilder: GdprManagerBuilder) => void;

	/**
	 * Add guards after the ones parsed from the DOM
	 * @param managerBuilder
	 * @default () => {}
	 */
	addGuardsAfterHook?: (managerBuilder: GdprManagerBuilder) => void;

	/**
	 * Handle failure of declining all
	 */
	onDeclineAllErrorHook?: StoreErrorHandler;

	/**
	 * Handle failure of allowing all
	 */
	onAllowAllErrorHook?: StoreErrorHandler;

	/**
	 * Handle failure of saving
	 */
	onSaveErrorHook?: StoreErrorHandler;

	/**
	 * Handle failure of cancelling
	 */
	onCancelErrorHook?: StoreErrorHandler;
}

// TODO: Two-way binding? Would required a wrapper
// TODO: Reset API in gdpr-guard?

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
	autoCloseBanner = true,

	bindEventHandlersHook = () => {},
	addGuardsBeforeHook = () => {},
	addGuardsAfterHook = () => {},

	onDeclineAllErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onDeclineAllErrorHook]", didStore, err),
	onAllowAllErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onAllowAllErrorHook]", didStore, err),
	onSaveErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onSaveErrorHook]", didStore, err),
	onCancelErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onCancelErrorHook]", didStore, err),
}: GdprHtmlManagerOptions = {}): Promise<GdprManager> => {
	if (typeof gdprEl === "undefined") {
		gdprEl = document.querySelector<HTMLElement>("[data-gdpr]") ?? undefined;

		if (typeof gdprEl === "undefined") {
			throw new NoManagerDefinitionError();
		}
	}

	const { managerEl, managerCheckbox } = parseManagerDetails(gdprEl);

	const managerBuilder = GdprManagerBuilder.make();

	addGuardsBeforeHook(managerBuilder);
	const parsedGuards = addGuardsFromDOM(managerEl, managerBuilder);
	addGuardsAfterHook(managerBuilder);

	const managerFactory = async () => managerBuilder.build();
	const hadManager = await gdprSavior.exists(false);
	const manager = await gdprSavior.restoreOrCreate(managerFactory);

	setupCheckboxListeners(manager, managerCheckbox, parsedGuards, hadManager);
	setupButtonsListeners(manager, gdprSavior, {
		onDeclineAllErrorHook,
		onAllowAllErrorHook,
		onSaveErrorHook,
		onCancelErrorHook,
	}, managerFactory);
	setupScriptActivation(manager);
	setupStyleSheetsActivation(manager);

	bindEventHandlersHook(manager.events);

	if (autoCloseBanner && manager.bannerWasShown) {
		manager.closeBanner();
	}

	return manager;
};
