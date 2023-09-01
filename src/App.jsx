import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import './css/App.css'
import Product from './components/Product.jsx';


function App() {
  
  
  const [cart, setCart] = useState({});
  const [cartItem, setCartItem] = useState(0); //number of unique items in the cart
  const [cartTotal, setCartTotal] = useState(0); //total number of items in the cart

  const productClick = () => {

  }

  const addToCart = (product, price, image) => { //add to cart in state 
      if (cart[product]){
        setCart((cart) => ({
          ...cart,
          [product]: {
            ...cart[product],
            numItems: cart[product].numItems + 1,
          }
        }))
      }
      else{
        setCart((cart) => ({
          ...cart,
          [product]: {
            ...cart[product],
            numItems: 1,
            price: price,
            image: image,

          }
        }))
        setCartItem(cartItem => cartItem + 1);
      }
      setCartTotal(cartTotal => cartTotal + 1);
  }
{/* <Route path='/shop/:productName'>
            <Product />
          </Route> */}
  return (
    <div>
      <BrowserRouter>
        <Navbar 
          cartTotal={cartTotal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop 
            addToCart={addToCart}
          />} />
          <Route path='/shop/:name' element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart 
            cart={cart}
            cartItem={cartItem}
          />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
