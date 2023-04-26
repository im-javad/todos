import ReactDomClient from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { fetchTodos } from "./features/todos/todosSlice";

const root = ReactDomClient.createRoot(document.getElementById("root"));

store.dispatch(fetchTodos);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
