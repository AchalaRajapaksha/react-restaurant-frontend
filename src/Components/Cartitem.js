import React from "react";
import { api } from "../Config";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";

export default function Cartitem({ item, handleAdd, handleRemove, handleDelete }) {
  return (
    <div className="cart-item-container">
      <img src={`${api}${item.image}`} alt="Food image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.name}</h3>
        <h5 className="cart-item-price">
          Rs. {item.price} x {item.Qty}
        </h5>

        <div className="add-delete-buttons">
          <IconButton
            size="sm"
            colorScheme="green"
            icon={<AddIcon w={3} h={3} />}
            onClick={handleAdd}
          />

          <IconButton
            size="sm"
            colorScheme="blue"
            icon={<MinusIcon w={3} h={3} />}
            onClick={handleRemove}
          />
        </div>
      </div>

      <IconButton
        colorScheme="red"
        icon={<DeleteIcon w={3} h={3} />}
        onClick={handleDelete}
      />
    </div>
  );
}
