/**
 * Helper class that creates a wrapper around an array of type `T`.
 * Provides various different methods to help with accessing and modifying array.
 */
export class ArrayStore<T> {
  private _array: T[] = [];
  get array(): T[] {
    return this._array;
  }

  private _compareProperty: string | null | undefined;

  constructor(compareProperty: string | null | undefined) {
    this._compareProperty = compareProperty;
  }

  /**
   * Searches for `item` and returns its index.
   *
   * @param item Item to search for.
   * @returns Index of `item` if it was found. Otherwise, returns `-1`.
   */
  public getIndex = (item: T): number => this._array.findIndex(x =>
    !this._compareProperty ?
      x === item :
      ((x as any)[this._compareProperty] === (item as any)[this._compareProperty])
  );

  /**
   * Checks if `item` exists.
   *
   * @param item Item to search for.
   * @returns `True` if `item` was found. Otherwise, returns `false`.
   */
  public contains = (item: T): boolean => this.getIndex(item) !== -1;

  /**
   * Attempts to store `item` in the array.
   * If `item` is already being stored, nothing will happen and `false` will be returned.
   *
   * @param item Item to store.
   * @returns `True` if `item` was successfully stored. Otherwise, returns `false.`
   */
  public store(item: T): boolean {
    const shouldAdd = !this.contains(item);
    if (shouldAdd) {
      this._array.push(item);
    }

    return shouldAdd;
  }

  /**
   * Attempts to remove `item` from the array.
   * If `item` isn't being stored, nothing will happen and `false` will be returned.
   *
   * @param item Item to remove.
   * @returns `True` if `item` was successfully removed. Otherwise, returns `false`.
   */
  public remove(item: T): boolean {
    const shouldRemove = this.contains(item);
    if (shouldRemove) {
      this._array.splice(this.getIndex(item), 1);
    }

    return shouldRemove;
  }
}
