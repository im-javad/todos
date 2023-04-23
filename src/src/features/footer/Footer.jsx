import RemainingTodos from "./RemainingTodos";
import StatusFilter from "./StatusFilter";
import ColorFilters from "./ColorFilters";
import TodosActions from "./TodosActions";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <TodosActions />
      </div>
      <RemainingTodos />
      <StatusFilter />
      <ColorFilters />
    </footer>
  );
}
