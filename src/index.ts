import { NoManagerDefinitionError } from "./errors";
import { GdprGuard, GdprManager, GdprManagerBuilder, GdprSavior, GdprManagerEventHub } from "gdpr-guard";
import { parseManagerDetails } from "./domainLogic/dataExtractors";
import { addGuardsFromDOM } from "./domainLogic/guardsParsing";
import {
	BindEventsCallback,
	setupButtonsListeners,
	setupCheckboxListeners,
	setupScriptActivation,
	setupStyleSheetsActivation,
	StoreErrorHandler,
} from "./domainLogic/listeners";
import { Cache } from "@/utils/cache";

export type AddGuardsCallback = (managerBuilder: GdprManagerBuilder) => void;

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
	addGuardsBeforeHook?: AddGuardsCallback;

	/**
	 * Add guards after the ones parsed from the DOM
	 * @param managerBuilder
	 * @default () => {}
	 */
	addGuardsAfterHook?: AddGuardsCallback;

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

	/**
	 * Execute code when closing the banner
	 */
	onBannerClose?: () => void;

	/**
	 * Execute code when opening the banner
	 */
	onBannerOpen?: () => void;
}

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

	onDeclineAllErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onDeclineAllErrorHook]", {didStore, err}),
	onAllowAllErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onAllowAllErrorHook]", {didStore, err}),
	onSaveErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onSaveErrorHook]", {didStore, err}),
	onCancelErrorHook = (didStore, err) => console.error("[HtmlGdprGuard @ onCancelErrorHook]", {didStore, err}),

	onBannerClose = () => {},
	onBannerOpen = () => {},
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

	const guardCache = new Cache<string, GdprGuard>();
	const updateCheckboxState = () => {
		// Properly reflect checkbox state updates
		parsedGuards.forEach(({ name, checkbox }) => {
			const guard = guardCache.getOrEmplace(name, () => manager.getGuard(name)!);

			checkbox.checked = guard.enabled;
		});
	};

	setupScriptActivation(manager);
	setupStyleSheetsActivation(manager);
	setupCheckboxListeners(manager, managerCheckbox, parsedGuards, hadManager, updateCheckboxState);
	setupButtonsListeners(manager, gdprSavior, {
		onDeclineAllErrorHook,
		onAllowAllErrorHook,
		onSaveErrorHook,
		onCancelErrorHook,
		onBannerClose,
		onBannerOpen,
	}, managerFactory, updateCheckboxState);

	bindEventHandlersHook(manager.events, manager);

	if (autoCloseBanner && manager.bannerWasShown) {
		manager.closeBanner();
		onBannerClose();
	} else { // Allows banner to be in closed state by default and open it when JS is ready
		manager.resetAndShowBanner();
		onBannerOpen();
	}

	return manager;
};

export * from "./errors";
