import { availableStatus, statusFilterhandle } from "../filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const StatusFilter = () => {
  const activeStatus = useSelector((state) => state.filters.status);

  const dispatch = useDispatch();

  function handleStatusChange(status) {
    dispatch(statusFilterhandle(status));
  }

  const renderedFilters = Object.keys(availableStatus).map((key) => {
    const value = availableStatus[key];
    const className = value === activeStatus ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={() => handleStatusChange(value)}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

export default StatusFilter;
