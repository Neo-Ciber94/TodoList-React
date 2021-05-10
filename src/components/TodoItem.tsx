import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Todo } from "../models/Todo";
import { openEditor } from "./openEditor";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const context = useContext(TodoContext);

  const toggleTodo = () => {
    context.dispatch({
      type: "update",
      todo: { ...todo, complete: !todo.complete },
    });
  };

  const removeTodo = () => {
    context.dispatch({ type: "remove", id: todo.id });
  };

  const editTodo = (selectedTodo: Todo) => {
    openEditor({
      initialValue: selectedTodo,
      onConfirm: (newTodo) => {
        const todo: Todo = { ...newTodo, ...selectedTodo };
        context.dispatch({ type: "update", todo });
      },
    });
  };

  return (
    <li className={"todo-item" + (todo.complete ? " completed" : "")}>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column align-center">
          <input
            type="checkbox"
            id={todo.id.toString()}
            checked={todo.complete}
            onChange={toggleTodo}
          />
          <label htmlFor={todo.id.toString()}></label>
        </div>
        <div className="todo-content mx-1 flex-grow-1">
          <div className="todo-title">{todo.title}</div>
          <div className="todo-description">{todo.description}</div>
        </div>
        <div className="todo-actions mx-1">
          <button className="todo-edit mx-2" onClick={() => editTodo(todo)}>
            <i className="fas fa-pen"></i>
          </button>
          <button className="todo-remove mx-2" onClick={removeTodo}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <hr></hr>
    </li>
  );
};
