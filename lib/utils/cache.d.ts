export declare class Cache<Key, Value> {
    private map;
    constructor();
    has(key: Key): boolean;
    forget(key: Key): void;
    put(key: Key, value: Value): void;
    getOrEmplace(key: Key, defaultValueFactory: () => Value): Value;
    get(key: Key): Value | undefined;
}
