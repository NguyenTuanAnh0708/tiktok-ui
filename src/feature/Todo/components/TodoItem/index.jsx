import React from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  todoItem: PropTypes.string,
  index: PropTypes.number.isRequired,
  onClear: PropTypes.func.isRequired,
};
TodoItem.defaultProps = {
  todoItem: "",
};

function TodoItem({ todoItem, index, onClear }) {
  return (
    <div>
      <span>{todoItem}</span>
      <span onClick={() => onClear(index)} style={{ padding: "0 10" }}>
        &times;
      </span>
    </div>
  );
}

export default TodoItem;
