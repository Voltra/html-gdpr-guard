declare type Listener = (e: Event) => void;
declare type EventName = string;
declare type Selector = string;
export declare const GlobalEventBus: {
    /**
     * Store the event managers and their listeners
     */
    events: Record<string, Record<string, Listener[]>>;
    /**
     * Add an event listener on the given selector as a live listener (i.e. is not limited to the current matching set of {@link HTMLElement})
     * @param event - The name of the event
     * @param selector - The selector to match against
     * @param listener - The listener to call when the event is triggered on an element that matches the given selector
     */
    on(event: EventName, selector: Selector, listener: Listener): void;
};
export {};
