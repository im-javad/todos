import ReactDomClient from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDomClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
