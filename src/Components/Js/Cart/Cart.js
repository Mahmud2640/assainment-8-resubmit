import React from "react";
import "../../Css/Cart/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, deleteClick}) => {
  const { img, name } = cart;
  return (
    <div className="cart">
      <div className="cart-info">
        <img src={img} alt="" />
        <h6>{name}</h6>
      </div>
      <button onClick={() => deleteClick(cart)} className="delete-icon">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Cart;
