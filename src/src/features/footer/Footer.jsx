import RemainingTodos from "./RemainingTodos";
import StatusFilter from "./StatusFilter";
import ColorFilters from "./ColorFilters";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>
      <RemainingTodos />
      <StatusFilter />
      <ColorFilters />
    </footer>
  );
}
