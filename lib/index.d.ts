import { GdprManager, GdprManagerBuilder, GdprSavior } from "gdpr-guard";
import { BindEventsCallback, StoreErrorHandler } from "@/domainLogic/listeners";
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
    /**
     * Execute code when closing the banner
     */
    onBannerClose?: () => void;
    /**
     * Execute code when opening the banner
     */
    onBannerOpen?: () => void;
}
/**
 * Initialize the gdpr-guard logic from the DOM or the provided {@link GdprSavior}
 * @param gdprSavior - The savior to use to restore and save the {@link GdprManager} data
 * @param {GdprHtmlManagerOptions} [options] - The setup's options
 * @returns {Promise<GdprManager>} The restored GDPR manager
 * @throws {NoManagerDefinitionError} - If no manager definition can be found
 * (either {@link gdprEl} is `undefined` or `document.querySelector("[data-gdpr]")` returned `null`)
 */
export declare const restoreHtmlGdprManager: (gdprSavior: GdprSavior, { gdprEl, autoCloseBanner, bindEventHandlersHook, addGuardsBeforeHook, addGuardsAfterHook, onDeclineAllErrorHook, onAllowAllErrorHook, onSaveErrorHook, onCancelErrorHook, onBannerClose, onBannerOpen, }?: GdprHtmlManagerOptions) => Promise<GdprManager>;
