import { useEffect, useReducer } from 'react';
import './App.css';
import { Todo } from './models/todo';
import TodoItem from './TodoItem';
import useLocalStorage from './hooks/useLocalStorage';
import { TodoActionType } from './models/todo-action-type';
import { todosReducer } from './reducers/todos-reducer';
import { NewTodoForm } from './NewTodoForm';

function App() {
  const [savedTodos, setSavedTodos] = useLocalStorage<Todo[]>('MY_TODOS', []);
  const [todos, dispatch] = useReducer(todosReducer, savedTodos);

  useEffect(() => {
    setSavedTodos(todos);
  }, [todos]);

  function addTodo(newTodoName: string) {
    dispatch({ type: TodoActionType.ADD_TODO, payload: newTodoName });
  }

  function toggleTodo(todoId: string) {
    dispatch({ type: TodoActionType.TOGGLE_TODO, payload: todoId });
  }

  function removeTodo(todoId: string) {
    dispatch({ type: TodoActionType.REMOVE_TODO, payload: todoId });
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
      <NewTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
