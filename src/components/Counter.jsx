import "./Counter.css";
import React, { useState } from "react";

function Counter() {
  const [cart, setCart] = useState({
    item: "Apple",
    quantity: 0,
  });

  function changeQuantity(newQuant) {
    setCart((prevCart) => ({
      ...prevCart /* Spread back out values from existing array */,
      quantity: prevCart.quantity + newQuant,
    }));
  }

  const [arr, setArr] = useState([]);
  
  function changeArr(symb) {
    setArr((prevArr) => [...prevArr, symb]);
  }

  return (
    <>
      <div className="counter__wrapper">
        <button onClick={() => changeQuantity(-1)} className="counter__btn">
          -
        </button>
        <h1 className="counter">
          {cart.quantity} {cart.item}
        </h1>
        <button onClick={() => changeQuantity(1)} className="counter__btn">
          +
        </button>
      </div>
      <div className="counter__wrapper">
        <button onClick={() => changeArr("-")} className="counter__btn">
          -
        </button>
        <button onClick={() => changeArr("+")} className="counter__btn">
          +
        </button>
        <h1 className="counter">{arr.toString()}</h1>
      </div>
    </>
  );
}

export default Counter;
