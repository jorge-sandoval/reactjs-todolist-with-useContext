import Todo from './todo';
export default interface TodosContextProps {
  todos: Todo[];
  addTodo: (newTodoName: string) => void;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
}