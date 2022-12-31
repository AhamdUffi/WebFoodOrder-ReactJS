import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref)  => {

  return (
    <React.Fragment>
      <label htmlFor={props.label}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </React.Fragment>
   );
});

export default Input;
