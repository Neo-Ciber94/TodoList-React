import { useReducer } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { getInitialState, todoReducer } from "../redux/todoReducer";
import { AddButton } from "./AddButton";
import { TodoList } from "./TodoList";

function App() {
  const [data, dispatch] = useReducer(todoReducer, getInitialState());
  return (
    <TodoContext.Provider value={{ data, dispatch }}>
      <div className="container-fluid">
        <TodoList />
        <AddButton />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
