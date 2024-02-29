import Todo from "../models/todo";
import { TodosActionType, TodosActionPayload } from "../models/todos-action";

export default function todosReducer(
  state: Todo[],
  action: { type: TodosActionType; payload: TodosActionPayload }
): Todo[] {
  switch (action.type) {
    case TodosActionType.ADD_TODO:
      return [
        ...state,
        { name: action.payload.todoName || '', completed: false, id: crypto.randomUUID() }
      ];
    case TodosActionType.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case TodosActionType.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);
    case TodosActionType.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, name: action.payload.todoName || ''};
        }
        return todo;
      });
    default:
      return state;
  }
}