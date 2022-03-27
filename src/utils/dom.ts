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

export const childSelector = (rootEl: HTMLElement, selector: string) => {
	return findChild(rootEl, el => el.matches(selector));
}

export const childSelectorAll = (rootEl: HTMLElement, selector: string) => {
	return findAllChildren(rootEl, el => el.matches(selector));
};
