import React from "react";
import "../../Css/Products/Product.css";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div className='product'>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image" />
          <div className="card-body">
            <h5 className={name}></h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <h2>Price : {price}</h2>
          </div>
          <div class="card-footer">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
