import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.entities);

  const renderListItems = Object.keys(todos).map((todoId) => (
    <TodoListItem key={todoId} todo={todos[todoId]} />
  ));

  return <ul className="todo-list">{renderListItems}</ul>;
};

export default TodoList;
