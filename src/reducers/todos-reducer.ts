import { Todo } from "../models/todo";
import { TodoActionType } from "../models/todo-action-type";

export function todosReducer(
  state: Todo[],
  action: { type: TodoActionType; payload: string }
) {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return [
        ...state,
        { name: action.payload, completed: false, id: crypto.randomUUID() },
      ];
    case TodoActionType.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case TodoActionType.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}