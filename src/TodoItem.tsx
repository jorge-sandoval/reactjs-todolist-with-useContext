import { TodoItemProps } from './models/todo-item-props';

export default function TodoItem({
  todo,
  toggleTodo,
  removeTodo,
}: TodoItemProps) {
  return (
    <li className="list-item">
      <label className="list-item-label" htmlFor={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          data-list-item-checkbox
        />
        <span data-list-item-text>{todo.name}</span>
      </label>
      <button onClick={() => removeTodo(todo.id)} data-button-delete>
        Remove
      </button>
    </li>
  );
}
