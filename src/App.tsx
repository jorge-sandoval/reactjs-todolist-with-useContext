import './App.css';
import Todo from './models/todo';
import useLocalStorage from './hooks/useLocalStorage';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import TodosContextProvider from './contexts/todos-context-provider';
import TodoFilterForm from './TodoFilterForm';

function App() {
  const [savedTodos] = useLocalStorage<Todo[]>('MY_TODOS', []);

  return (
    <TodosContextProvider todos={savedTodos}>
      <div className="App">
        <TodoFilterForm></TodoFilterForm>
        <TodoList />
        <NewTodoForm />
      </div>
    </TodosContextProvider>
  );
}

export default App;
