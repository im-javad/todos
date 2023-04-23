import { shallowEqual, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { selectFilteredTodoIds, todoIds } from "./todosSlice";

const TodoList = () => {
  const todosIds = useSelector(selectFilteredTodoIds, shallowEqual);

  const renderListItems = todosIds.map((id) => (
    <TodoListItem key={id} id={id} />
  ));

  return <ul className="todo-list">{renderListItems}</ul>;
};

export default TodoList;
