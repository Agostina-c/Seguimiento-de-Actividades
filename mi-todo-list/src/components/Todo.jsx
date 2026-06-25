const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      {}
      <div className="todo-content">
        <li className="todo-item">{todo.text}</li>
        {todo.dueDate && <span className="todo-date">{todo.dueDate.replace("T", " ")}</span>}
      </div>

      <div className="todo-buttons">
        <button onClick={completeHandler}><i className="fas fa-check"></i></button>
        <button onClick={deleteHandler}><i className="fas fa-trash"></i></button>
      </div>
    </div>
  );
};

export default Todo;