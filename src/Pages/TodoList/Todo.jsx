import { useState, useRef } from "react";
import TodoInput from "../../Components/Todo/TodoInput";
import "../TodoList/Todo.css";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const countRef = useRef(0);

  const handleAddTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { no: countRef.current++, text, display: "" }]);
  };

  return (
    <section className="todoContainer">
      <h2 className="todo-header">Todo List</h2>
      <TodoInput onAdd={handleAddTodo} />
      <ol className="todo-list">
        {todos.length > 0 ? (
          todos.map((item) => (
            <li key={item.no} className="todo-list-item">
              <span>{item.text}</span>
            </li>
          ))
        ) : (
          <li className="empty-state">No tasks yet</li>
        )}
      </ol>
    </section>
  );
};

export default ToDo;
