import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChange} value={props.value} type="text" />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
