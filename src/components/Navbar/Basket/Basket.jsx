import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartProvaider from "../../../store/CartProvaider";
import CartIcon from "../../CardIcon/CardIcon";
import classes from "./Basket.module.css";
// import svg from "./basket-icon.svg";
const Basket = (props) => {
  // mengambil nilai dari Api CartContext
  const ctxCart = useContext(CartContext);
  const [btnHiglited, setBinHighlighted] = useState(false);

  const { items } = ctxCart;

  // mengambil nilai dari total AMount
  const numberOfCartItem = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length >= 1) {
      setBinHighlighted(true);
    }
    const clearHiglt = setTimeout(() => {
      setBinHighlighted(false);
    }, 400);

    return () => {
      clearTimeout(clearHiglt);
    };
  }, [items]);

  const animation = `${classes.container} ${btnHiglited ? classes.bump : ""}`;

  return (
    <button className={animation}>
      <div className={classes.icon}>
        <CartIcon className={classes.icon__svg} />
      </div>
      <div className={classes.title}>
        <h6>You Cart</h6>
      </div>
      <div className={classes.total}>{numberOfCartItem}</div>
    </button>
  );
};

export default Basket;
