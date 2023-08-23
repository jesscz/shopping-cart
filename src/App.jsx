import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import './css/App.css'


function App() {
  
  const [cart, setCart] = useState({});

  const productClick = (e) => {

  }

  const addToCart = (product) => { //add to cart in state 
      if (cart[product]){
        setCart({
          ...cart,
          [product]: {
            ...cart[product],
            numItems: cart[product].numItems + 1,
          }
        })
      }
      else{
        setCart({
          ...cart,
          [product]: {
            ...cart[product],
            numItems: 1,
          }
        })
      }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop 
            addToCart={addToCart}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart 
            cart={cart}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
