import React, { useEffect, useState } from 'react';
import "./MainMenu.css"
import axios from "axios"

function MainMenu() {
    const [items, setItems] = useState ([]);
useEffect (()=>{
    const fetchItem= async ()=>{
      const result =await axios.get("http.//localhost:4200/item/all")
    }
},[])

  return (
    <div>
      
    </div>
  );
};

export default MainMenu;