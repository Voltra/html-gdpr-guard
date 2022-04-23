import { GdprStorage } from "gdpr-guard";
/**
 * Get the guard's name from the DOM
 * @param guardEl - The guard element to query
 * @param guardDataKey - The key in the dataset of {@link guardEl} where the name could be
 * @param nameDataKey - The name of the data attribute that can be found in child nodes to parse the name
 * @throws {NoNameError} - If it can't find the guard's name
 */
export declare const nameFromDOM: (guardEl: HTMLElement, guardDataKey: string, nameDataKey?: string) => string;
/**
 * Get the guard's checkbox from the DOM
 * @param guardEl - The root of the guard's tree
 * @param guardName - The guard's name
 */
export declare const checkboxFromDOM: (guardEl: HTMLElement, guardName: string) => HTMLInputElement;
/**
 * Retrieve the guard's description from the DOM
 * @param guardEl - The root of the guard's state tree
 */
export declare const descriptionFromDOM: (guardEl: HTMLElement) => string | null | undefined;
/**
 * Get the {@link GdprStorage} from the DOM
 * @param guardEl - The root the guard's state tree
 */
export declare const storageFromDOM: (guardEl: HTMLElement) => GdprStorage | null;
/**
 * Check whether the guard is marked as required in the DOM
 * @param guardEl - The root of the guard's state tree
 * @param checkbox - The guard's checkbox
 */
export declare const guardIsRequiredInDOM: (guardEl: HTMLElement, checkbox: HTMLInputElement) => boolean;
/**
 * Sync the required status across all attributes in the DOM
 * @param guardEl - The root of the guard's state tree
 * @param checkbox - The guard's checkbox
 * @param isRequired - Whether the guard is already marked as required
 */
export declare const syncRequiredInDOM: (guardEl: HTMLElement, checkbox: HTMLInputElement, isRequired?: boolean) => void;
/**
 * Extract the manager's own details from the DOM
 * @param gdprEl - The root of the GDPR state tree
 */
export declare const parseManagerDetails: (gdprEl: HTMLElement) => {
    managerEl: HTMLElement;
    managerCheckbox: HTMLInputElement;
    managerName: string;
};
