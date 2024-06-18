import React, { useEffect, useState } from 'react';
import "./MainMenu.css"
import axios from "axios"
import Menuitem from './Menuitem';
import { api } from '../Config';

function MainMenu() {
    const [items, setItems] = useState ([]);

  useEffect(() => {
    const fetchItem= async ()=>{
      const result = await axios.get(`${api}/item/all`);
      setItems(result.data)
    }
    fetchItem();
},[])

  return (
    <div className='main-menu-container'>
      {items.map((item) => {
        return <Menuitem key={item.id} item={item} />
       })}
    </div>
  );
};

export default MainMenu;