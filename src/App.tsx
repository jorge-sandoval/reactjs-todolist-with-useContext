import './App.css';
import Todo from './models/todo';
import useLocalStorage from './hooks/useLocalStorage';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import TodosContextProvider from './contexts/todos-context-provider';

function App() {
  const [savedTodos] = useLocalStorage<Todo[]>('MY_TODOS', []);

  return (
    <TodosContextProvider todos={savedTodos}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
        <NewTodoForm />
      </div>
    </TodosContextProvider>
  );
}

export default App;
