import React, { useState } from "react";
import Basket from "./Basket/Basket";
import "./Navbar.css";

function Navbar(props) {
  return (
    <React.Fragment>
      <nav className="navbar" onClick={props.showCartHandler}>
        <div className="icon-brand">
          <h1> FoodDelivery </h1>
        </div>
        <div className="Basket">
          <Basket total={props.total} />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
