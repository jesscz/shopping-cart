import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import './css/App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart/" element={<Home/>} />
        <Route path="/shopping-cart/products" element={<Products/>} />
        <Route path="/shopping-cart/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
