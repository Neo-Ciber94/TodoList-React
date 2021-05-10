import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList: React.FC = () => {
  const context = useContext(TodoContext);
  const todoItems = context.data.todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h1>Todos</h1>
        <div className="todos">
          <ul>{todoItems}</ul>
        </div>
      </div>
    </div>
  );
};
