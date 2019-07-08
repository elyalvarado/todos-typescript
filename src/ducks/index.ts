// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Create and export an interface for the Global State
// ✅ Use the global state interface for typing combineReducers
//    and configureStore (hint: use generics)

import { createStore, combineReducers, DeepPartial } from "redux";
import todos, { ITodo } from "./todos";
import visibilityFilter, { VisibilityFilters } from "./visibilityFilter";

export interface IGlobalState {
  todos: ITodo[];
  visibilityFilter: VisibilityFilters;
}

const rootReducer = combineReducers<IGlobalState>({
  todos,
  visibilityFilter
});

const configureStore = (initialState?: DeepPartial<IGlobalState>) =>
  createStore(rootReducer, initialState);

export default configureStore;
