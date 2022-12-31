import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

// make a backdrop in the modal
const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

// make a contenet for modal
const Content = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("modal");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portal)}
      {ReactDOM.createPortal(<Content> {props.children}</Content>, portal)}
    </React.Fragment>
  );
};

export default Modal;
