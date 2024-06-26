import React from "react";
import "./Cart.css";
import Cartitem from "./Cartitem";
import SubmitButton from "./Common/SubmitButton";
import { api } from "../Config";
import toast from "react-hot-toast";
import axios from "axios";

function Cart({ cartItems, setCartItems }) {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.qty;
  });

  const handleAdd = (itemID) => {
    const newCartItems = cartItems.map((item) => {
      if (itemID === item.id) {
        return { ...item, qty: item.qty + 1 };
      }

      return item;
    });
    setCartItems(newCartItems);
  };

  const handleRemove = (itemID) => {
    const newCartItems = cartItems.map((item) => {
      if (itemID === item.id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }

      return item;
    });
    setCartItems(newCartItems);
  };

  const handleDelete = (itemID) => {
    const newCartItems = cartItems.filter((item) => {
      if (itemID === item.id) {
        return false;
      }

      return true;
    });
    setCartItems(newCartItems);
  };

  const placeOrder = async () => {
    try {
      await axios.post(`${api}/item/place-order`, { items: cartItems });
      toast.success("Order Placed Successfully");

      setCartItems([]);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your order</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <Cartitem
            key={item.id}
            item={item}
            handleAdd={() => handleAdd(item.id)}
            handleRemove={() => handleRemove(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="total">Total: Rs. {total}</div>
          <SubmitButton
            className="place-order-button"
            text="Place order"
            onClick={placeOrder}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
