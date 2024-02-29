export enum TodosActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
}

export interface TodosActionPayload {
  todoId?: string;
  todoName?: string;
}
