import { createContext} from 'react';
import TodosContextProps from '../models/todos-context-props';

const TodoContext = createContext<TodosContextProps>({
  todos: [],
  addTodo: (newTodoName: string) => console.log(`addTodo ${newTodoName}`),
  toggleTodo: (todoId: string) => console.log(`toggleTodo ${todoId}`),
  removeTodo: (todoId: string) => console.log(`todoId ${todoId}`),
});

export default TodoContext;