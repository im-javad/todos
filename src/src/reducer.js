import { combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";

const appReducer = combineReducers({
  todos: todosReducer,
});

export default appReducer;
