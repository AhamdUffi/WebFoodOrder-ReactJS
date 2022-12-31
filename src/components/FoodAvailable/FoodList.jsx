import React from "react";
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  // function exportHandler(addCart) {
  //   props.onExport(addCart);
  // }
  const mealList = props.items.map((item) => (
    <FoodItem
      key={item.id}
      id={item.id}
      title={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <React.Fragment>
      <ul>{mealList}</ul>
    </React.Fragment>
  );
};

export default FoodList;
