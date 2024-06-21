import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ChakraProvider> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
      <Toaster position='bottom-right'/>
    </ChakraProvider>
        
  );
}

export default App;
