import React from "react";
import "../../Css/Products/Product.css";

const Product = (props) => {
  const { name, img, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
      <button className="product-button">
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
