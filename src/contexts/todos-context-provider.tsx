import { useEffect, useReducer, useState } from 'react';
import todosReducer from '../reducers/todos-reducer';
import TodosActionType from '../models/todos-action-type';
import TodosContextProviderProps from '../models/todos-context-provider-props';
import TodoContext from './todos-context';
import Todo from '../models/todo';
import useLocalStorage from '../hooks/useLocalStorage';
import TodosFilter from '../models/todos-filter';

export default function TodosContextProvider({
  children,
  todos: initialTodos,
}: TodosContextProviderProps) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [, setSavedTodos] = useLocalStorage<Todo[]>('MY_TODOS', []);
  const [filter, setFilter] = useState<TodosFilter>({
    name: '',
    hideCompleted: false,
  });

  const filteredTodos = todos.filter((todo) => {
    const nameMatch =
      !filter.name ||
      todo.name.toLowerCase().includes(filter.name.toLowerCase());
    const hideCompletedMatch = filter.hideCompleted ? !todo.completed : true;
    return nameMatch && hideCompletedMatch;
  });

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
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        removeTodo,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
