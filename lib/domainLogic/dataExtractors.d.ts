import { GdprStorage } from "gdpr-guard";
/**
 * Get the guard's name from the DOM
 * @param guardEl - The guard element to query
 * @param guardDataKey - The key in the dataset of {@link guardEl} where the name could be
 * @param nameDataKey - The name of the data attribute that can be found in child nodes to parse the name
 * @throws {NoNameError} - If it can't find the guard's name
 */
export declare const nameFromDOM: (guardEl: HTMLElement, guardDataKey: string, nameDataKey?: string) => string;
export declare const checkboxFromDOM: (guardEl: HTMLElement, guardName: string) => HTMLInputElement;
export declare const descriptionFromDOM: (guardEl: HTMLElement) => string | null | undefined;
export declare const storageFromDOM: (guardEl: HTMLElement) => GdprStorage | null;
export declare const guardIsRequiredInDOM: (guardEl: HTMLElement, checkbox: HTMLInputElement) => boolean;
export declare const parseManagerDetails: (gdprEl: HTMLElement) => {
    managerEl: HTMLElement;
    managerCheckbox: HTMLInputElement;
    managerName: string;
};
