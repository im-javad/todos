import { applyMiddleware, legacy_createStore as createStore } from "redux";
import appReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(appReducer, composeEnhancers);

export default store;
