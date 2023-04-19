import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.entities);

  const renderListItems = todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return <ul className="todo-list">{renderListItems}</ul>;
};

export default TodoList;
