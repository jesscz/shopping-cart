import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import './css/App.css'


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
