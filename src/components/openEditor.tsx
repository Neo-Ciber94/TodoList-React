import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NewTodo } from "../models/NewTodo";
import "./openEditor.css";

const SwalEditor = withReactContent(Swal);

interface EditorState {
  initialValue?: NewTodo;
  onConfirm: (todo: NewTodo) => void;
}

export async function openEditor(state: EditorState) {
  let title: string | undefined = state.initialValue?.title;
  let description: string | undefined = state.initialValue?.description;

  const formElement = (
    <form>
      <div className="form-group">
        <label className="form-label mb-0">Title</label>
        <input
          type="text"
          defaultValue={title || ""}
          className="todo-title form-control"
          placeholder="Todo title"
          onInput={(e) => (title = e.currentTarget.value)}
        />
      </div>
      <div className="form-group mt-4">
        <label className="form-label mb-0">Description</label>
        <textarea
          defaultValue={description || ""}
          className="todo-desc form-control m-0"
          placeholder="Todo description"
          onInput={(e) => (description = e.currentTarget.value)}
        />
      </div>
    </form>
  );

  const result = await SwalEditor.fire({
    title: "New todo",
    showCloseButton: true,
    showCancelButton: true,
    html: formElement,
    customClass: {
      title: "title-todo",
      confirmButton: "confirm-button",
      cancelButton: "cancel-button",
    },
  });

  if (result.isConfirmed) {
    if (title == null && description == null) {
      return;
    }

    if (title) {
      state.onConfirm({ title, description });
    }

    title = undefined;
    description = undefined;
  }
}
