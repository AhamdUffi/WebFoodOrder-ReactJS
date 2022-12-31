import React from "react";
import classes from "./Add.module.css";

const Add = (props) => {
  return (
    <React.Fragment>
      <button className={classes.roundedPill} onClick={props.onClick}>
        <p>+ Add</p>
      </button>
    </React.Fragment>
  );
};

export default Add;
