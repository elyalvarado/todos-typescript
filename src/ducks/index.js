// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Create and export an interface for the Global State
// ✅ Use the global state interface for typing combineReducers
//    and configureStore (hint: use generics)

import { createStore, combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

const configureStore = initialState => createStore(rootReducer, initialState);

export default configureStore;
