export declare const forEachChild: (rootEl: HTMLElement, action: (el: HTMLElement) => void) => void;
export declare const findChild: (rootEl: HTMLElement, predicate: (el: HTMLElement) => boolean) => HTMLElement | null;
export declare const findAllChildren: (rootEl: HTMLElement, predicate: (el: HTMLElement) => boolean) => HTMLElement[];
export declare const childSelector: (rootEl: HTMLElement, selector: string) => HTMLElement | null;
export declare const childSelectorAll: (rootEl: HTMLElement, selector: string) => HTMLElement[];
