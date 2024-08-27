// Саддам Насриев
import React, { useState } from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Header from '../src/Header';
import Slider from './Slider';
import About from './About';
import Sale from './SaleSection';
import Price from './PriceSection';
import Deal from './DealSection';
import '../src/Components/css/style.css';
import '../src/Components/css/responsive.css';
import '../src/Components/css/bootstrap.css';
import '../src/Components/css/style.css.map';
import SotrudUs from './SotrudSection';
import Client from './Client';
import Contact from './Contact';
import Info from './Information';
import Footer from './Footer';
import Cart from './Cart';
import Registr from './Registr';

function App() {
  const [cart, setCart] = useState([]);
  const [corzina, setCorzina] = useState(false)

  function izmenitCorzinu() {
      setCorzina(true)
  }

  function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }


  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={
            <>
                <div className="btn-box x-pos">
                  <a href="#/contact">
                    Узнать больше
                  </a>
                </div>
              <Slider />
              <About />
              <Sale addToCart={addToCart} />
              <Price />
              <Deal />
              <SotrudUs/>
              <Client />
              <Contact/>
              <Info />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/client" element={<Client />} />
          <Route path="/price" element={<Price />} />
          <Route path="/cart" element={<Cart cart={cart} corzina={corzina}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Slider />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
