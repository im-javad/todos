import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todosSlice";

const availableColors = ["green", "red", "black", "orang", "aqua"];

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

function TodoListItem({ key, todo }) {
  const { id, text, completed, color } = todo;

  const dispatch = useDispatch();

  const colorOptions = availableColors.map((color) => (
    <options key={color} value={color}>
      {capitalize(color)}
    </options>
  ));

  function handleCompleted() {
    dispatch(toggleTodo(id));
  }

  function handleDelete() {
    dispatch(deleteTodo(id));
  }

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={completed}
            onClick={handleCompleted}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            style={{ color }}
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

