import Todo from "./todo";

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
  updateTodo: (todoId: string, todoName: string) => void;
}