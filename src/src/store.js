import { legacy_createStore as createStore } from "redux";
import appReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();

const store = createStore(appReducer , composeEnhancers);

export default store;
