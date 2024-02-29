import { FormEvent, useContext, useRef } from 'react';
import TodoContext from './contexts/todos-context';

export default function NewTodoForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodoContext);

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
