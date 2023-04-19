import { ReactComponent as TimesSolid } from "./times-solid.svg";

export const availableColors = ["green", "blue", "orange", "purple", "red"];

const TodoListItem = () => {
  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input className="toggle" type="checkbox" />
          <div className="todo-text">Text ....</div>
        </div>
        <div className="segment buttons">
          <select className="colorPicker" defaultValue={"blue"}>
            <option value=""></option>
          </select>
          <button className="destroy">
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
