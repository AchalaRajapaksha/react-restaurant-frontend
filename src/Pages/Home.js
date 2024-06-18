import React from 'react';
import "./Home.css"
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import MainMenu from '../Components/MainMenu';
import Cart from '../Components/Cart';


function Home() {
  return (
    <div className="home-container">
      <div className="home-nav">
        <Logo />
        <div>
          <Link to="/login">
            <Button colorScheme="blue" variant="outline">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="teal" variant="outline">
              Register
            </Button>
          </Link>
        </div>
      </div>
      <div className="home-inner-container">
        <MainMenu />
        <Cart />
      </div>
    </div>
  );
};

export default Home;