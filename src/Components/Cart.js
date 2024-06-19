import React from "react";
import "./Cart.css";
import Cartitem from "./Cartitem";

function Cart({ cartItems, setCartItems}) {
  return (
    <div className="cart-container">
      <h2>Your order</h2>
      <div className="cart-items">
        {cartItems.map((item) => (<Cartitem key={item.id} item={item} />)

        )}
      </div>
    </div>
  );
}

export default Cart;
