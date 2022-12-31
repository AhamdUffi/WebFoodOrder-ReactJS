import React from "react";
import { useState } from "react";
import "./App.css";
import CartOrder from "./components/CartOrder/CartOrder";
import FoodAvailable from "./components/FoodAvailable/FoodAvailable";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import CartProvaider from "./store/CartProvaider";

function App() {
  // membuat useState untuk function Menmbah Food
  const [addcart, setAddCart] = useState(0);

  function exportHandler(addcart) {
    setAddCart(addcart);
  }

  const [showCart, setShowCart] = useState(false);

  // menampilkan list daftar yang ada di keranjang
  const showCartHandler = () => {
    setShowCart(true);
  };

  // menutip atauu mengcencel  list daftar yang ada di keranjang
  const cencelCartHandler = () => {
    setShowCart(false);
  };
  // melakuakn order pesanan di keranjang
  const orderHandler = () => {
    setShowCart(false);
    console.log("Ordering...");
  };

  return (
    <CartProvaider>
      {showCart && (
        <CartOrder
          hiddenCartHandler={cencelCartHandler}
          orderHandler={orderHandler}
        />
      )}
      <Navbar showCartHandler={showCartHandler} />
      <Hero />
      <FoodAvailable onExport={exportHandler} />
    </CartProvaider>
  );
}

export default App;
