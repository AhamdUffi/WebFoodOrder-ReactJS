import React, { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import Add from "../UI/Add/Add";
import Input from "../UI/Input/Input";
import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  // const [addCart, setAddCart] = useState(0);

  //  const addFood = () => {
  //    setAddCart((prev) => {
  //     return prev + 1;
  //   });
  //   // props.onExport(addCart)
  // };

  const ctxCart = useContext(CartContext);

  const amountItemRef = useRef();

  const onClickHandler = () => {
    const entiredAmount = amountItemRef.current.value;
    const entiredAmountNumber = +entiredAmount;
    console.log(typeof entiredAmountNumber);

    if (
      entiredAmount.trim().length === 0 ||
      entiredAmountNumber < 1 ||
      entiredAmountNumber > 5
    ) {
      return;
    } else {
      ctxCart.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        amount: entiredAmountNumber,
      });
    }
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const entiredAmount = amountItemRef.current.value;
  //   const entiredAmountNumber = +entiredAmount;

  //   if (
  //     entiredAmount.trim().length === 0 ||
  //     entiredAmountNumber < 1 ||
  //     entiredAmountNumber > 5
  //   ) {
  //     return;
  //   } else {
  //     props.onAddToCArt(entiredAmountNumber);
  //     console.log("ok");
  //   }
  // };

  return (
    <React.Fragment>
      <li className={classes.food}>
        <div className={classes.food__title}>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
          <p>${props.price}</p>
        </div>
        <div className={classes.food__price}>
          <form
            action="#"
            // onSubmit={submitHandler}
            className={classes.food__form}
          >
            <Input
              ref={amountItemRef}
              className={classes.input}
              label="Amount"
              input={{
                id: "amount_" + props.id, // this changed!
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "0",
              }}
            />
            <br />
            <Add className={classes.food__price_add} onClick={onClickHandler} />
          </form>
        </div>
      </li>
      <hr />
    </React.Fragment>
  );
};

export default FoodItem;
