import React, { useEffect, useState } from "react";
import "../../Css/Shop/Shop.css";
import Cart from "../Cart/Cart";
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
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const deleteClick = (cart) => {
    setCart([]);
  };
  const randomClick = (cart) => {
    const randomElement = cart[Math.floor(Math.random() * cart.length)];
    if (randomElement) {
      alert(randomElement.name);
    }
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Summery</h1>
        {cart.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
        <button
          onClick={() => {
            randomClick(cart);
          }}
          className="choose-btn"
        >
          Choose One For Me
        </button>
        <button onClick={deleteClick} className="reset-btn">
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Shop;
