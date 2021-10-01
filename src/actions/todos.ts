// everything related to todos action
import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";
// action creator
export const fetchTodos = () => {
  // remember we are using redux thunk
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
// action creator
export const deleteTodo = (id: number): DeleteTodoAction => {
  // we don't need async function here
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
