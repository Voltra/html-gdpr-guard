/**
 * Execute an action/callback on each child
 * @param rootEl - The parent element
 * @param action - The action/callback to execute on each child
 */
export const forEachChild = (rootEl: HTMLElement, action: (el: HTMLElement) => void) => {
	for (let i = 0; i < rootEl.childElementCount; i += 1) {
		const el = rootEl.children.item(i);

		if (el) {
			action(el as HTMLElement);
		}
	}
}

export const findChild = (rootEl: HTMLElement, predicate: (el: HTMLElement) => boolean) => {
	for (let i = 0; i < rootEl.childElementCount; i += 1) {
		const el = rootEl.children.item(i);

		if (el && predicate(el as HTMLElement)) {
			return el as HTMLElement;
		}
	}

	return null;
}

/**
 * Find all the children that satisfy the given predicate
 * @param rootEl - The parent element
 * @param predicate - The predicate to satisfy
 */
export const findAllChildren = (rootEl: HTMLElement, predicate: (el: HTMLElement) => boolean) => {
	const ret = [] as HTMLElement[];

	for (let i = 0; i < rootEl.childElementCount; i += 1) {
		const el = rootEl.children.item(i);

		if (el && predicate(el as HTMLElement)) {
			ret.push(el as HTMLElement);
		}
	}

	return ret;
};

/**
 * Get the first child that matches the given selector
 * @param rootEl - The parent element
 * @param selector - The children selector
 */
export const childSelector = (rootEl: HTMLElement, selector: string) => {
	return findChild(rootEl, el => el.matches(selector));
}

/**
 * Get all the children of the given root that match the given selector
 * @param rootEl - The parent element
 * @param selector - The children selector
 */
export const childSelectorAll = (rootEl: HTMLElement, selector: string) => {
	return findAllChildren(rootEl, el => el.matches(selector));
};
