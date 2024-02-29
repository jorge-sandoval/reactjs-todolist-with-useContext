import Todo from "./todo";

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
}