import React, { useState } from "react";
const Square = (props) => {
  // const [value, setValue] = useState(null);
  return (
    <>
      <button className="square" onClick={props.onSquareClick}>
        {props.value}
      </button>
    </>
  );
};
export default Square;
