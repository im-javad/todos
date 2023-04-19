import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoAdd } from "../todos/todosSlice";

export default function Header() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      dispatch(TodoAdd(trimmedText));
      console.log(trimmedText);
      setText("");
    }
  };

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
}
