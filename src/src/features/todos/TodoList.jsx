import { shallowEqual, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { selectFilteredTodoIds } from "./todosSlice";
import { ThreeCircles } from "react-loader-spinner";

const TodoList = () => {
  const todosIds = useSelector(selectFilteredTodoIds, shallowEqual);
  const fetchStatus = useSelector((state) => state.todos.failFetch);
  const isLoading = useSelector((state) => state.todos.isLoadin);

  if (fetchStatus) {
    return (
      <strong className="text-danger my-5 mx-2">
        Error in fetching data...
      </strong>
    );
  }

  const renderListItems = todosIds.map((id) => (
    <TodoListItem key={id} id={id} />
  ));

  return (
    <ul className="todo-list">
      {isLoading ? (
        <div className="d-flex justify-content-center align-cent h-100-vh align-items-center">
          <ThreeCircles
            height="100"
            width="100"
            color="#ff4500"
            visible={true}
          />
        </div>
      ) : (
        renderListItems
      )}
    </ul>
  );
};

export default TodoList;
