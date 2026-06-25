import Todo from './Todo';

const TodoList = ({ todos, setTodos, status }) => {
  return (
    <div className="todo-container-grid">
      
      {(status === 'all' || status === 'uncompleted') && (
        <div className="section">
          <h2>Pendientes</h2>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <Todo 
                key={todo.id} 
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
              />
            ))}
        </div>
      )}
      
      {/* Sección Completadas: Se muestra si el status es 'all' o 'completed' */}
      {(status === 'all' || status === 'completed') && (
        <div className="section">
          <h2>Completadas</h2>
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <Todo 
                key={todo.id} 
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
              />
            ))}
        </div>
      )}
      
    </div>
  );
};

export default TodoList;