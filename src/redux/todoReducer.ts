import { NewTodo } from "../models/NewTodo";
import { Todo } from "../models/Todo";
import { TodoData } from "../models/TodoData";
import { LocalStorageStore, Store } from "../store";
import { TodoAction } from "./todoActions";

const store: Store<TodoData> = new LocalStorageStore();

export function getInitialState(): TodoData {
  return store.load();
}

export function todoReducer(state: TodoData, action: TodoAction): TodoData {
  let newState: TodoData;

  switch (action.type) {
    case "add": {
      const todos = state.todos.slice();
      const newTodo = createTodo(state, action.todo);
      todos.push(newTodo);
      newState = { nextId: newTodo.id, todos };
      break;
    }
    case "update": {
      const index = state.todos.findIndex((e) => e.id === action.todo.id);
      const todos = state.todos.slice();
      todos[index] = action.todo;
      newState = { ...state, todos };
      break;
    }
    case "remove": {
      const todos = state.todos.filter((e) => e.id !== action.id);
      newState = { ...state, todos };
      break;
    }
    default:
      throw new Error("Invalid action: " + action);
  }

  // Save the new state
  store.save(newState);
  return newState;
}

function createTodo(data: TodoData, newTodo: NewTodo): Todo {
  return {
    ...newTodo,
    id: ++data.nextId,
    complete: false,
  };
}
