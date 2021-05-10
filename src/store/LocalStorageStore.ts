import { TodoData } from "../models/TodoData";
import { Store } from "./Store";

const TODO_DATA_KEY = "todos";

export class LocalStorageStore implements Store<TodoData> {
  load(): TodoData {
    const jsonData = localStorage.getItem(TODO_DATA_KEY);
    let result: TodoData | null = null;

    if (jsonData) {
      try {
        result = JSON.parse(jsonData) as TodoData;
      } catch {
        // Nothing todo
      }
    }

    if (result == null) {
      result = {
        todos: [],
        nextId: 0,
      };
    }

    return result;
  }

  save(data: TodoData): void {
    const json = JSON.stringify(data);
    localStorage.setItem(TODO_DATA_KEY, json);
  }
}
