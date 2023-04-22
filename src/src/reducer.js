import { combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";
import { filterReducer } from "./features/filters/filtersSlice";

const appReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export default appReducer;
