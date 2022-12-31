import React from "react";
import FoodList from "./FoodList";
import classes from "./FoodAvailable.module.css";

const FoodAvailable = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  // function exportHandler(addCart) {
  //   props.onExport(addCart);
  // }
  return (
    <React.Fragment>
      <div className={classes.container}>
        <FoodList items={DUMMY_MEALS}  />
      </div>
    </React.Fragment>
  );
};

export default FoodAvailable;
