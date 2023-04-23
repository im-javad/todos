import { useDispatch, useSelector } from "react-redux";
import {
  actionColorFolterTypes,
  availableColors,
  colorFilterhandle,
  selectColors,
} from "../filters/filtersSlice";

const ColorFilters = () => {
  const colors = useSelector(selectColors);

  const dispatch = useDispatch();

  function handleColorChange(color, colorType) {
    dispatch(colorFilterhandle(color, colorType));
  }

  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color) ? true : false;
    const type = checked
      ? actionColorFolterTypes.REMOVE
      : actionColorFolterTypes.ADD;
    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          defaultChecked={checked}
          onChange={() => handleColorChange(color, type)}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {color}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection d-flex flex-column">
        {renderedColors}
      </form>
    </div>
  );
};

export default ColorFilters;
