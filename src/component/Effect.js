import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
      console.log("use effect")
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("useeffect todoes")
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
