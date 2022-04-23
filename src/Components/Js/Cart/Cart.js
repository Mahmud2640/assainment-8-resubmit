import React from "react";
import "../../Css/Cart/Cart.css";

const Cart = ({ cart }) => {
  const { img, name } = cart;
  return (
    <div className="cart">
      <div className="cart-info">
        <img src={img} alt="" />
        <h6>{name}</h6>
      </div>
    </div>
  );
};

export default Cart;
