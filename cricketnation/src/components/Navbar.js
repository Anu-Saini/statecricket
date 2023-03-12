import React from 'react';
//import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import "./navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoName from '../Assets/logo_criVic.jpg';



function Navigation () {
  return (
    <Navbar className="Navi" bg="light" expand="lg">
      <Nav.Link href="#play">Play</Nav.Link>
      <Nav.Link href="#home">Competitions</Nav.Link>
      <Nav.Link href="#home">Our Teams</Nav.Link>
      <div className='log'>
    <img src={logoName} alt="main logo for cricket Victoria" id='logoimg'></img> 
    <h1>CRICKET VICTORIA</h1>
   </div>
      <Nav.Link href="#home">CitiPower Centre</Nav.Link>
    
            <Nav.Link href="#home">Support</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          
    </Navbar>
  
  )
}

export default Navigation;
