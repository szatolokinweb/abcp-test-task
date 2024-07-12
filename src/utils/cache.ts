export class Cache<T> {
  private _cache = new Map<number, T>();

  getByKey(key: number): T | undefined {
    return this._cache.get(key);
  }

  setByKey(key: number, value: T): void {
    this._cache.set(key, value);
  }
}
