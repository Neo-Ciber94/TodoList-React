import React from "react";
import { TodoAction } from "../redux/todoActions";
import { TodoData } from "../models/TodoData";

export interface TodoContextProps {
  data: TodoData;
  dispatch: (action: TodoAction) => void;
}

export const TodoContext = React.createContext<TodoContextProps>(
  {} as TodoContextProps
);
