import React, { useEffect, useState } from 'react';
import "./MainMenu.css"
import axios from "axios"
import Menuitem from './Menuitem';
import { api } from '../Config';

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
    const newCartItems = [...cartItems];
    const newItem = {
      ...clickedItem, Qty:1
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