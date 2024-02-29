import { useEffect, useReducer } from 'react';
import todosReducer from '../reducers/todos-reducer';
import TodosActionType from '../models/todos-action-type';
import TodosContextProviderProps from '../models/todos-context-provider-props';
import TodoContext from './todos-context';
import Todo from '../models/todo';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TodosContextProvider({
  children,
  todos: initialTodos,
}: TodosContextProviderProps) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [, setSavedTodos] = useLocalStorage<Todo[]>('MY_TODOS', []);

  const addTodo = (newTodoName: string) => {
    dispatch({ type: TodosActionType.ADD_TODO, payload: newTodoName });
  };

  const toggleTodo = (todoId: string) => {
    dispatch({ type: TodosActionType.TOGGLE_TODO, payload: todoId });
  };

  const removeTodo = (todoId: string) => {
    dispatch({ type: TodosActionType.REMOVE_TODO, payload: todoId });
  };

  useEffect(() => {
    setSavedTodos(todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
