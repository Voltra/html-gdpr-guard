/**
 * Execute an action/callback on each child
 * @param rootEl - The parent element
 * @param action - The action/callback to execute on each child
 */
export declare const forEachChild: (rootEl: HTMLElement, action: (el: HTMLElement) => void) => void;
export declare const findChild: (rootEl: HTMLElement, predicate: (el: HTMLElement) => boolean) => HTMLElement | null;
/**
 * Find all the children that satisfy the given predicate
 * @param rootEl - The parent element
 * @param predicate - The predicate to satisfy
 */
export declare const findAllChildren: (rootEl: HTMLElement, predicate: (el: HTMLElement) => boolean) => HTMLElement[];
/**
 * Get the first child that matches the given selector
 * @param rootEl - The parent element
 * @param selector - The children selector
 */
export declare const childSelector: (rootEl: HTMLElement, selector: string) => HTMLElement | null;
/**
 * Get all the children of the given root that match the given selector
 * @param rootEl - The parent element
 * @param selector - The children selector
 */
export declare const childSelectorAll: (rootEl: HTMLElement, selector: string) => HTMLElement[];
