import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/modal/Modal";
import classes from "./CartOrder.module.css";

const CartOrder = (props) => {
  const ctxCart = useContext(CartContext);
  // const amount = ctxCart.items.map((item) => item.amount);
  // console.log(amount);
  const totalAmount = ctxCart.totalAmount.toFixed(2);

  // memunculkan tombol power jika kita mempunyai item pada cartOrder
  const hasItem = ctxCart.items.length > 0;

  // membuat fungsi mengedit item
  const removeItemHandler = (id) => {
    ctxCart.removeItem(id);
  };
  const addItemHandler = (item) => {
    ctxCart.addItem({ ...item, amount: 1 });
  };

  const orderList = (
    <ul className={classes.order_list}>
      {ctxCart.items.map((item) => (
        <li>
          <div className={classes.detail}>
            <h2 className={classes.detail__title}>{item.title}</h2>
            <span className={classes.detail__price}>${item.price}</span>
            <span className={classes.detail__amount}>x {item.amount}</span>
          </div>
          <div className={classes.edit_item}>
            <span onClick={removeItemHandler.bind(null, item.id)}>-</span>
            <span onClick={addItemHandler.bind(null, item)}>+</span>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {orderList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.action}>
        {hasItem && (
          <button className={classes.order} onClick={props.orderHandler}>
            Order
          </button>
        )}
        <button className={classes.cencel} onClick={props.hiddenCartHandler}>
          Cencel
        </button>
      </div>
    </Modal>
  );
};

export default CartOrder;
