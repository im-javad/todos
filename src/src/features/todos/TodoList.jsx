import { shallowEqual, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { todoIds } from "./todosSlice";

const TodoList = () => {
  const todosIds = useSelector(todoIds , shallowEqual);

  const renderListItems = todosIds.map((id) => (
    <TodoListItem key={id} id={id} />
  ));

  return <ul className="todo-list">{renderListItems}</ul>;
};

export default TodoList;
