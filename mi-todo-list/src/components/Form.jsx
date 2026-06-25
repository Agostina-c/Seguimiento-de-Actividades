import { useState } from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const [date, setDate] = useState("");

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") return;

    setTodos([
      ...todos,
      { 
        text: inputText, 
        completed: false, 
        id: Math.random() * 1000, 
        dueDate: date 
      },
    ]);
    setInputText("");
    setDate("");
  };

  return (
    <form>
      <input 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        type="text" 
        placeholder="Escribe una actividad..." 
      />
      
      <input 
        type="datetime-local" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      
      <button onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select-container">
        <select onChange={(e) => setStatus(e.target.value)} name="todos" className="filter-todo">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="uncompleted">Pendientes</option>
        </select>
      </div>
    </form>
  );
};

export default Form;