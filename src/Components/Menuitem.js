import React from "react";
import { api } from "../Config";

export default function Menuitem({ item }) {
  return (
    <div className="menu-item-container">
      <img src={`${api}${item.image}`} alt="Food image" />
      <h3 className="menu-item-title">{item.name}</h3>
      <h5 className="menu-item-price">Rs. {item.price}</h5>
    </div>
  );
}
