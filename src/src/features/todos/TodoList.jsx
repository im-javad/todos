import { shallowEqual, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { selectFilteredTodoIds } from "./todosSlice";

const TodoList = () => {
  const todosIds = useSelector(selectFilteredTodoIds, shallowEqual);
  const fetchStatus = useSelector((state) => state.todos.failFetch);

  if(!fetchStatus) {
    return <strong className="text-danger my-5 mx-2">Error in fetching data...</strong>
  }
  
  const renderListItems = todosIds.map((id) => (
    <TodoListItem key={id} id={id} />
  ));

  return <ul className="todo-list">{renderListItems}</ul>;
};

export default TodoList;
