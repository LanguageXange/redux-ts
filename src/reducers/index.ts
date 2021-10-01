// this file is simply a ts file we are not using any JSX syntax

import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";
export interface StoreState {
  todos: Todo[];
  stuff: number;
}

// make it easier to catch errors
export const rootReducers = combineReducers<StoreState>({
  todos: todosReducer,
  stuff: () => 100,
});
