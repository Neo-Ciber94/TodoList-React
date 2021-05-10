import { NewTodo } from "../models/NewTodo";
import { Todo } from "../models/Todo";

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
