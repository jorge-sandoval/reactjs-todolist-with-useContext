import { useContext } from 'react';
import TodoContext from './contexts/todos-context';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </>
  );
}
