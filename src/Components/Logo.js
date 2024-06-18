import React from 'react';
import "./Logo.css"

function Logo() {
  return (
    <div className='logo'>
      <img src='/logo.svg' alt='Logo'/>
      <h1>My Restaurant</h1>
    </div>
  );
};

export default Logo;