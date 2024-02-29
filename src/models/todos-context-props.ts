import { Dispatch, SetStateAction } from 'react';
import Todo from './todo';
import TodosFilter from './todos-filter';
export default interface TodosContextProps {
  todos: Todo[];
  addTodo: (newTodoName: string) => void;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
  updateTodo: (todoId: string, todoName: string) => void;
  setFilter: Dispatch<SetStateAction<TodosFilter>>;
}