import appReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.REACT_APP_PROJECT_STATUS === "dev",
});

export default store;
