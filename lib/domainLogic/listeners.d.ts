import { GdprManager, GdprManagerFactory, GdprSavior } from "gdpr-guard";
import { GdprManagerEventHub } from "gdpr-guard/dist/GdprManagerEventHub";
import { GuardParseResult } from "@/domainLogic/guardsParsing";
/**
 * Add listeners to the change event of the manager's and guards' checkboxes
 * @param manager - The manager to handle state changes for
 * @param managerCheckbox - The global manager toggle checkbox
 * @param parsedGuards - The guards that have been parsed from the DOM
 * @param hadManager - Whether the manager came from the savior instead of the factory
 */
export declare const setupCheckboxListeners: (manager: GdprManager, managerCheckbox: HTMLInputElement, parsedGuards: GuardParseResult[], hadManager: boolean) => void;
/**
 * Setup item activation in the `<head>` tag (i.e. to execute code when the corresponding guard is enabled)
 * @param manager - The manager to attach the activation logic to
 * @param itemSelector - The selector to query all the related items (must include `[data-gdpr-on-enable]`)
 * @param setupItemHook - The function to call to set up the item before putting it in the DOM
 */
export declare const setupInHeadActivation: <ItemType extends HTMLElement = HTMLElement>(manager: GdprManager, itemSelector: string, setupItemHook: (item: ItemType) => void) => void;
/**
 * Setup scripts activation logic to load them when the corresponding guard is enabled (type must initially be text and the src attribute mst be present)
 * @param manager - The manager to attach the activation logic to
 */
export declare const setupScriptActivation: (manager: GdprManager) => void;
/**
 * Setup stylesheets activation logic to load them when the corresponding guard is enabled (rel attribute must be different from stylesheet and the href attribute must be present)
 * @param manager - The manager to attach the activation logic to
 */
export declare const setupStyleSheetsActivation: (manager: GdprManager) => void;
export declare type BindEventsCallback = (eventsHub: GdprManagerEventHub) => void;
export declare type StoreErrorHandler = (didStore: boolean, error?: Error) => void;
export interface SetupButtonListenersHooks {
    onDeclineAllErrorHook: StoreErrorHandler;
    onAllowAllErrorHook: StoreErrorHandler;
    onCancelErrorHook: StoreErrorHandler;
    onSaveErrorHook: StoreErrorHandler;
}
/**
 * Bind event listeners to the general buttons
 * @param manager
 * @param gdprSavior
 * @param hooks
 * @param restoreFactory
 */
export declare const setupButtonsListeners: (manager: GdprManager, gdprSavior: GdprSavior, hooks: SetupButtonListenersHooks, restoreFactory: GdprManagerFactory) => void;
