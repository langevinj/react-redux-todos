import React from 'react'
import './App.css';
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function App() {
  return (
    <div className="App">
      <h2>Todos:</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
