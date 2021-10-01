// action types
import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  addTodo,
}

// define different Action here to be used in reducers/todos.ts
export type Action = FetchTodosAction | DeleteTodoAction;
