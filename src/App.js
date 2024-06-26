import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import { Toaster } from "react-hot-toast";
import Register from './Pages/Register';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </ChakraProvider>
  );
}

export default App;
