export const availableColors = ["green", "blue", "orange", "purple", "red"];

const ColorFilters = () => {
  const renderedColors = availableColors.map((color) => {
    return (
      <label key={color}>
        <input type="checkbox" name={color} defaultChecked={true} />
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
      <form className="colorSelection d-flex">{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;
