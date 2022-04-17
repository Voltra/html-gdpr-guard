export const GlobalEventBus = {
	events: {} as Record<string, Record<string, Array<(e: Event) => void>>>,
	on(event: string, selector: string, listener: (e: Event) => void) {
		if (!(event in this.events)) {
			this.events[event] = {
				[selector]: [listener],
			};

			window.addEventListener(event, e => {
				Object.entries(this.events[event])
					.forEach(([selector, listeners]: [string, (typeof listener)[]]) => {
						if ((e.target as HTMLElement | null)?.matches?.(selector)) {
							listeners.forEach(listener => listener(e));
						}
					});
			});
		} else {
			const eventManager = this.events[event];

			if (!(selector in eventManager)) {
				eventManager[selector] = [];
			}

			eventManager[selector].push(listener);
		}

	}
};
