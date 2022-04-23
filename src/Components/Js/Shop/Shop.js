import React, { useEffect, useState } from "react";
import "../../Css/Shop/Shop.css";
import Product from "../Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
   console.log(product);
   const newCart = [...cart, product];
   setCart(newCart);
 }
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product}
          addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Summery</h1>
         <p>Total items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
