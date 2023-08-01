import React from "react";

function Todoitem(props) {
  return (
    <div
      onClick={() => {
        props.check(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Todoitem;
