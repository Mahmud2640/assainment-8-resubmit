import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "../../Css/Products/Product.css";

const Product = ({product, addToCart}) => {
  const { name, img, price } = product;
  
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
      <button onClick={() => addToCart(product)} className="product-button">
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
