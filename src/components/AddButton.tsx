import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { openEditor } from "./openEditor";
import "./AddButton.css";

export const AddButton: React.FC = () => {
  const context = useContext(TodoContext);

  const onClick = () => {
    openEditor({
      onConfirm: (todo) => {
        context.dispatch({ type: "add", todo });
      },
    });
  };

  return (
    <button className="add-btn" onClick={onClick}>
      <span className="material-icons add-icon">add</span>
    </button>
  );
};
