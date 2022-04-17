import { GdprManagerBuilder } from "gdpr-guard";
export interface GuardParseResult {
    name: string;
    checkbox: HTMLInputElement;
}
/**
 * Get the guards from the DOM and add them all to the manager
 * @param managerEl - The root element of the manager's definition
 * @param managerBuilder - The current manager builder's state
 */
export declare const addGuardsFromDOM: (managerEl: HTMLElement, managerBuilder: GdprManagerBuilder) => GuardParseResult[];
