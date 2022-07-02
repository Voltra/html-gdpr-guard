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
		document.querySelectorAll(selector).forEach(el => {
			el.addEventListener(event, listener);
		});
	}
};
