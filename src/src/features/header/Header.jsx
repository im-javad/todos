import { useState } from "react";
import { useDispatch } from "react-redux";
import { seveNewTodo, todoAdd } from "../todos/todosSlice";
import { ProgressBar } from "react-loader-spinner";

export default function Header() {
  const [isLoadin, setLoading] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = async (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      setLoading(true);
      await dispatch(seveNewTodo(trimmedText));
      setText("");
      setLoading(false);
    }
  };

  return (
    <header className="header">
      {!isLoadin ? (
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isLoadin}
        />
      ) : (
        <div className="w-100 d-flex bg-light justify-content-center">
          <ProgressBar
            height="80"
            width="80"
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        </div>
      )}
    </header>
  );
}
