/**
 * Type for event listeners used in the {@link GlobalEventBus}
 */
type Listener = (e: Event) => void;
type EventName = string;
type Selector = string;

export const GlobalEventBus = {
	/**
	 * Store the event managers and their listeners
	 */
	events: {} as Record<EventName, Record<Selector, Listener[]>>,

	/**
	 * Add an event listener on the given selector as a live listener (i.e. is not limited to the current matching set of {@link HTMLElement})
	 * @param event - The name of the event
	 * @param selector - The selector to match against
	 * @param listener - The listener to call when the event is triggered on an element that matches the given selector
	 */
	on(event: EventName, selector: Selector, listener: Listener) {
		if (!(event in this.events)) { // This event had no selectors or listeners attached yet
			this.events[event] = {
				[selector]: [listener],
			};

			window.addEventListener(event, e => {
				Object.entries(this.events[event])
					.forEach(([selector, listeners]: [Selector, Listener[]]) => {
						const target = e.target as HTMLElement|null;

						if (target?.matches?.(selector)) {
							listeners.forEach(listener => listener(e));
						}
					});
			});
		} else {
			const eventManager = this.events[event];

			if (!(selector in eventManager)) { // This event didn't have the selector registered yet
				eventManager[selector] = [];
			}

			eventManager[selector].push(listener);
		}

	}
};
