import { useRef, useState } from "react";
import "./CSS/ToDo.css";
import ToDoItems from "./ToDoItems";
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const inputref = useRef(null);
  const countRef = useRef(0);

  const add = () => {
    const value = inputref.current.value.trim();
    if (!value) return;
    // Check if input is empty

    setTodos([
      ...todos,
      { no: countRef.current++, text: inputref.current.value, display: "" },
    ]);
    inputref.current.value = "";
  };

  return (
    <section className="todoContainer">
      <div className="todo">
        <div className="todo-header">Todo List</div>
        <div className="todo-add">
          <input
            ref={inputref}
            type="text"
            placeholder="Add your task"
            className="todo-input"
            maxLength={50}
          />

          <div onClick={add} className="todo-add-btn">
            Add
          </div>
        </div>
        <ol className="todoList">
          {todos.map((item) => (
            <li className="todo-list-item" key={item.no}>
              {item.text}
              <ToDoItems no={item.no} display={item.display} />
              {/* Displaying text properly */}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ToDo;
