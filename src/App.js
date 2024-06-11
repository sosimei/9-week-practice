import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <InputTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
