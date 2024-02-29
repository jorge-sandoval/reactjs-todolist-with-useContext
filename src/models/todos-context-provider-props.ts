import { ReactNode } from 'react';
import Todo from './todo';

export default interface TodosContextProviderProps {
  todos: Todo[];
  children: ReactNode;
}