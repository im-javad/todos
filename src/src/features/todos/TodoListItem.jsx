import { AiFillDelete } from "react-icons/ai";

const availableColors = ["green", "red", "black", "orang", "aqua"];

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

function TodoListItem({ key, todo }) {
  const { text, completed, color } = todo;

  const options = availableColors.map((color) => (
    <options key={color} value={color}>
      {capitalize(color)}
    </options>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input className="toggle" type="checkbox" />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select className="colorPicker" defaultValue={"blue"}></select>
          <button className="destroy">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
