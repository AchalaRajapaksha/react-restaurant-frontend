import React from "react";
import "./Cart.css";
import Cartitem from "./Cartitem";

function Cart({ cartItems, setCartItems }) {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price*item.Qty;
  });

  return (
    <div className="cart-container">
      <h2>Your order</h2>
      <div className="cart-items">
        {cartItems.map((item) => (<Cartitem key={item.id} item={item} />)

        )}
      </div>
      <div className="total">Total: {total}</div>
    </div>
  );
}

export default Cart;
