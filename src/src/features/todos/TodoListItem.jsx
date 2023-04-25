import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo, changeColor } from "./todosSlice";
import { availableColors } from "../filters/filtersSlice";

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

function TodoListItem({ id }) {
  const todo = useSelector((state) => state.todos.entities[id]);

  const { text, completed, color } = todo;

  const dispatch = useDispatch();

  const colorOptions = availableColors.map((c) => (
    <option style={{ fontSize: "19px" }} key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  function handleCompleted() {
    dispatch(toggleTodo(todo.id));
  }

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleColorChange(event) {
    const color = event.target.value;
    dispatch(changeColor(color, id));
  }

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onClick={handleCompleted}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            style={{ color }}
            onChange={handleColorChange}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handleDelete}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
