import React, { useEffect, useState } from 'react';
import "./MainMenu.css"
import axios from "axios"
import Menuitem from './Menuitem';
import { api } from '../Config';
import toast from 'react-hot-toast';

function MainMenu({ cartItems, setCartItems}) {
    const [items, setItems] = useState ([]);

  useEffect(() => {
    const fetchItem= async ()=>{
      const result = await axios.get(`${api}/item/all`);
      setItems(result.data)
    }
    fetchItem();
  }, [])
  
  const handleClick = (clickedItem) => { 
    const itemFound = cartItems.find((item) => {
      if (item.id === clickedItem.id) {
        return true;
      } else { return false; }
    })
    
    if (itemFound) { 
      toast.error("Item already added to the cart");
      return
    }

    const newCartItems = [...cartItems];
    const newItem = {
      ...clickedItem, qty:1
    }
    newCartItems.push(newItem);
    setCartItems(newCartItems);
  }

  return (
    <div className='main-menu-container'>
      {items.map((item) => {
        return <Menuitem key={item.id} item={item} onClick={
          () => { handleClick(item); }
        } />
       })}
    </div>
  );
};

export default MainMenu;