import Todo from "../models/todo";
import TodosActionType from "../models/todos-action-type";

export default function todosReducer(
  state: Todo[],
  action: { type: TodosActionType; payload: string }
) {
  switch (action.type) {
    case TodosActionType.ADD_TODO:
      return [
        ...state,
        { name: action.payload, completed: false, id: crypto.randomUUID() },
      ];
    case TodosActionType.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case TodosActionType.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}