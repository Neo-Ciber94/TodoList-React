/**
 * Persist the application state.
 */
export interface Store<T> {
  /**
   * Loads the app state.
   */
  load(): T;

  /**
   * Save the app state.
   * @param data the new state.
   */
  save(data: T): void;
}
