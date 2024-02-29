import { FormEvent, useRef, useState } from 'react';
import { TodoItemProps } from './models/todo-item-props';

export default function TodoItem({
  todo,
  toggleTodo,
  removeTodo,
  updateTodo,
}: TodoItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef?.current?.value) return;

    setIsEditing(false);
    updateTodo(todo.id, inputRef.current.value);
  }

  return (
    <li className="list-item">
      {!isEditing ? (
        <>
          <label className="list-item-label" htmlFor={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              data-list-item-checkbox
            />

            <span data-list-item-text>{todo.name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button onClick={() => removeTodo(todo.id)} data-button-delete>
            Remove
          </button>
        </>
      ) : (
        <form onSubmit={handleSave}>
          <input
            autoFocus
            ref={inputRef}
            type="text"
            defaultValue={todo.name}
          />
          <button data-button-edit>Save</button>
        </form>
      )}
    </li>
  );
}
