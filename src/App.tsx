import { useState } from 'react';
import './App.css';
import { Todo } from './models/todo';
import TodoItem from './TodoItem';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [newTodoName, setNewTodoName] = useState('');
  const [todos, setTodos] = useLocalStorage<Todo[]>('MY_TODOS', []);

  function addTodo() {
    if (!newTodoName) return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName('');
  }

  function toggleTodo(todoId: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  function removeTodo(todoId: string) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId)
    );
  }

  return (
    <>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
      <div id="new-todo-form">
        <label htmlFor="new-todo-name">New Todo</label>
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  );
}

export default App;
