import { useContext } from 'react';
import TodoContext from './contexts/todos-context';
import TodosFilter from './models/todos-filter';

export default function TodoFilterForm() {
  const { setFilter } = useContext(TodoContext);
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="filter">Name</label>
        <input
          type="text"
          id="filter"
          defaultValue=""
          onChange={(e) =>
            setFilter((f: TodosFilter) => ({ ...f, name: e.target.value }))
          }
        />
      </div>
      <label>
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={(e) =>
            setFilter((f: TodosFilter) => ({
              ...f,
              hideCompleted: e.target.checked,
            }))
          }
        />
        Hide Completed
      </label>
    </div>
  );
}
