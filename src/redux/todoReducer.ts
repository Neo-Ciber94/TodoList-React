import { TodoData, NewTodo, Todo } from "../models";
import { Store, LocalStorageStore } from "../store";
import { TodoAction } from "./TodoAction";

const store: Store<TodoData> = new LocalStorageStore();

export function getInitialState(): TodoData {
  return store.load();
}

export function todoReducer(state: TodoData, action: TodoAction): TodoData {
  // Computes the next state
  const newState = computeNextState(state, action);

  // Save the new state
  store.save(newState);

  // Returns the new state
  return newState;
}

function computeNextState(state: TodoData, action: TodoAction): TodoData {
  switch (action.type) {
    case "add": {
      const todos = state.todos.slice();
      const newTodo = createTodo(state, action.todo);
      todos.push(newTodo);
      return { nextId: newTodo.id, todos };
    }
    case "update": {
      const todos = state.todos.slice();
      const index = todos.findIndex((e) => e.id === action.todo.id);
      todos[index] = action.todo;
      return { ...state, todos };
    }
    case "remove": {
      const todos = state.todos.filter((e) => e.id !== action.id);
      return { ...state, todos };
    }
    default:
      throw new Error("Invalid action: " + action);
  }
}

function createTodo(data: TodoData, newTodo: NewTodo): Todo {
  return {
    ...newTodo,
    id: ++data.nextId,
    complete: false,
  };
}
