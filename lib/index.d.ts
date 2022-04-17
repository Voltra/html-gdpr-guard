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
    onDeclineAllErrorHook?: StoreErrorHandler;
    onAllowAllErrorHook?: StoreErrorHandler;
    onSaveErrorHook?: StoreErrorHandler;
    onCancelErrorHook?: StoreErrorHandler;
}
/**
 * Initialize the gdpr-guard logic from the DOM or the provided {@link GdprSavior}
 * @param gdprSavior - The savior to use to restore and save the {@link GdprManager} data
 * @param {GdprHtmlManagerOptions} [options] - The setup's options
 * @returns {Promise<GdprManager>} The restored GDPR manager
 * @throws {NoManagerDefinitionError} - If no manager definition can be found
 * (either {@link gdprEl} is `undefined` or `document.querySelector("[data-gdpr]")` returned `null`)
 */
export declare const restoreHtmlGdprManager: (gdprSavior: GdprSavior, { gdprEl, autoCloseBanner, bindEventHandlersHook, addGuardsBeforeHook, addGuardsAfterHook, onDeclineAllErrorHook, onAllowAllErrorHook, onSaveErrorHook, onCancelErrorHook, }?: GdprHtmlManagerOptions) => Promise<GdprManager>;
