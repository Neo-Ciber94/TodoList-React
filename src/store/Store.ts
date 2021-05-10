export interface Store<T> {
  load(): T;
  save(data: T): void;
}
