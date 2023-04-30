import { combineReducers } from "redux";
import { todosSlice } from "./features/todos/todosSlice";
import { filterReducer } from "./features/filters/filtersSlice";

const appReducer = combineReducers({
  todos: todosSlice,
  filters: filterReducer,
});

export default appReducer;
