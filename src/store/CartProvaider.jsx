import React, { useReducer } from "react";
import CartContext from "./cart-context";

// ACTION
const ACTION = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

// default Value for CartItem
const defaultItem = {
  items: [],
  totalAmount: 0,
};

function cartItemReducer(state, action) {
  if (action.type === ACTION.ADD) {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updateItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
      console.log("true");
    } else {
      updateItems = state.items.concat(action.item);
    }
    // const updateItems = state.items.concat(action.item);
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === ACTION.REMOVE) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartItem.price;
    let updateItems;
    console.log(typeof existingCartItem.amount);
    if (existingCartItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      console.log(false);
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  } else {
    return defaultItem;
  }
}

const CartProvaider = (props) => {
  //  reducer untuk menambah item dan menjumlahkan total harga
  const [cartItem, dispatchCartItem] = useReducer(cartItemReducer, defaultItem);

  // fungsi untuk menambahkan item ke cart atau basket
  const addItemToCartHandler = (item) => {
    dispatchCartItem({ item: item, type: ACTION.ADD });
  };
  //    fingsi untuk meneghapus item yang berasa di cart atau basket
  const removeItemFromCartHandler = (id) => {
    dispatchCartItem({ id: id, type: ACTION.REMOVE });
  };

  const cartContext = {
    items: cartItem.items,
    totalAmount: cartItem.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvaider;
