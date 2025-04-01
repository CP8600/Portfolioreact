import { useEffect, useRef, useState } from "react";
import "./CSS/ToDo.css";
import ToDoItems from "./ToDoItems";
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const inputref = useRef(null);
  const countRef = useRef(0);

  const add = () => {
    setTodos([
      ...todos,
      { no: countRef.current++, text: inputref.current.value, display: "" },
    ]);
    inputref.current.value = "";
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">Todo List</div>
      <div className="todo-add">
        <input
          ref={inputref}
          type="text"
          placeholder="Add your task"
          className="todo-input"
        />

        <div onClick={add} className="todo-add-btn">
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <div key={index}>
            <ToDoItems no={item.no} display={item.display} />
            <span>{item.text}</span> {/* Displaying text properly */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
