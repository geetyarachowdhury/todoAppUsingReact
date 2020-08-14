import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function doneItem() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={doneItem}
      style={{ textDecoration: isDone === true ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
