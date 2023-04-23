import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleted, markAllCompleted } from "../todos/todosSlice";

function TodosActions() {
  const dispatch = useDispatch();

  function handleMarkAllCompleted() {
    dispatch(markAllCompleted());
  }

  function handleClearCompleted() {
    dispatch(clearCompleted());
  }

  return (
    <>
      <button className="button" onClick={handleMarkAllCompleted}>
        Mark All Completed
      </button>
      <button className="button" onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </>
  );
  
}

export default TodosActions;
