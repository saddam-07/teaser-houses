import { useState } from 'react'
import logo from '../src/Components/images/logo.png'
import { Routes, Route, Link} from 'react-router-dom';
import SignUp from './Cart'
import Contact from './Contact';
import App from './App';
import Client from './Client';

export default function Header({izmenitCorzinu}) {
  const [newNav, setNewNav] = useState(false)

  function openNav() {
    setNewNav(true)
  }    
  function closeNav() {
    setNewNav(false)
  } 


    return(
      <>
       
        <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.js">
              <img src={logo} alt="" className='logo-header'/>
            </a>
            <div className="navbar-collapse" id="">
              <ul className="navbar-nav justify-content-between ">
                <div className="User_option">
                  <li className="">
                    <a href="#/cart" className="corzina"></a>
                    <a className="proto-mr-4" href='#/registr'>Регистрация</a>
                  </li>
                </div>
              </ul>
  
              <div className={newNav===false? 'custom_menu-btn': 'exit-btn'}>
                <div onClick={openNav}>
                  <span className="s-1">
  
                  </span>
                  <span className="s-2">
  
                  </span>
                  <span className="s-3">
  
                  </span>
                </div>
              </div>
              <div id="myNav" className={newNav===false? 'overlay':'menu_width'}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <div className="overlay-content">
                  <a href="#/home">HOME</a>
                  <a href="#/about">ABOUT</a>
                  <a href="#/sale">HOUSE</a>
                  <a href="#/price">PRICING</a>
                  <a href='#/contact'>CONTACT US</a>
                  <a href='#/client'>OUR CLIENTS</a>
                  <a href='#/deal'>CONTACT US</a>
                  <a href='#/info'>INFORMATION</a>
                  <a href='#/cart'>КОРЗИНА</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      </>
      
    )
}