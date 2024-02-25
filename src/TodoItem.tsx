import { TodoItemProps } from './models/todo-item';

export default function TodoItem({
  todo,
  toggleTodo,
  removeTodo,
}: TodoItemProps) {
  return (
    <li>
      <label htmlFor={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.name}</span>
      </label>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}
