import { FormEvent, useRef } from 'react';
import { NewTodoFormProps } from './models/new-todo-form-props';

export function NewTodoForm({ addTodo }: NewTodoFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!nameRef?.current) return;

    const name = nameRef.current.value;
    addTodo(name);
    nameRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit} id="new-todo-form">
      <label htmlFor="new-todo-name">New Todo</label>
      <input type="text" ref={nameRef} />
      <button>Add</button>
    </form>
  );
}
