export class Cache<Key, Value> {
	private map: Map<Key, Value>;

	constructor() {
		this.map = new Map();
	}

	has(key: Key): boolean {
		return this.map.has(key);
	}

	forget(key: Key): void {
		this.map.delete(key);
	}

	put(key: Key, value: Value) {
		this.map.set(key, value);
	}

	getOrEmplace(key: Key, defaultValueFactory: () => Value): Value {
		if (!this.has(key)) {
			this.put(key, defaultValueFactory());
		}

		return this.get(key)!;
	}

	get(key: Key): Value|undefined {
		return this.map.get(key);
	}
}
