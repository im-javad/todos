import { useSelector } from "react-redux";
import { selectTodosVal } from "../todos/todosSlice";

const RemainingTodos = () => {
  const count = useSelector((state) => {
    const remainingTodos = selectTodosVal(state).filter(
      (todo) => !todo.completed
    );
    return remainingTodos.length;
  });

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> items left
    </div>
  );
};

export default RemainingTodos;
