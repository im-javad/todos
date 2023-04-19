import ReactDomClient from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";

const root = ReactDomClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
