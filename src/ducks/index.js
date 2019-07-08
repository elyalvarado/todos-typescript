import { createStore, combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

const configureStore = initialState => createStore(rootReducer, initialState);

export default configureStore;
