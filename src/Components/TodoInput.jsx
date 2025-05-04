import { useRef } from "react";

const TodoInput = ({ onAdd }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value;
    if (value.trim() === "") return;
    onAdd(value);
    inputRef.current.value = "";
  };

  return (
    <>
      <h2 className="todo-header">Todo List</h2>
      <section className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="todo-input"
          maxLength={20}
        />

        <div onClick={handleClick} className="todo-add-btn">
          Add
        </div>
      </section>
    </>
  );
};

export default TodoInput;
