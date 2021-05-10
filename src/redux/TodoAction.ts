import { NewTodo, Todo } from "../models";

export interface AddTodo {
  type: "add";
  todo: NewTodo;
}

export interface RemoveTodo {
  type: "remove";
  id: number;
}

export interface UpdateTodo {
  type: "update";
  todo: Todo;
}

export type TodoAction = AddTodo | RemoveTodo | UpdateTodo;
