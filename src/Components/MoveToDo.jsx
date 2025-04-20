const MoveToDo = ({ todos, setTodos }) => {
  const moveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= todos.length) return; // boundary check

    const updatedTodos = [...todos];
    [updatedTodos[index], updatedTodos[newIndex]] = [
      updatedTodos[newIndex],
      updatedTodos[index],
    ];
    setTodos(updatedTodos);
  };

  return (
    <ol className="todoList">
      {todos.map((todo, index) => (
        <li key={index} className="todo-list-item">
          {todo}
          <div style={{ float: "right" }} className="move">
            <button onClick={() => moveItem(index, -1)}>⬆️</button>
            <button onClick={() => moveItem(index, 1)}>⬇️</button>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default MoveToDo;
