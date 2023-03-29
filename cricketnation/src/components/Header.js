import React from 'react';
//import  {  Routes, Route } from 'react-router-dom';
import background from '../Assets/02junction3.jpg';
//import pimg from '../Assets/360.jpg';
//import {NavLink} from 'react-router-dom';
import '../components/Styles/header.css';
import Navbar from './Navbar'
import Mainsearchbar from "./searchbar.js"
// import LoginPage from "../pages/LoginPage";

const  Header = () => {
  return (
    <div>
<div className='tbar' style={{backgroundImage: `url(${background})`}}>
  <div className='mains'>
     <Mainsearchbar />

     <Navbar />
     <routes>
     {/* <Route path="/Profile" element={<LoginPage></LoginPage>} />  */}
     
     

     </routes>
     

  </div>
    
    


</div>
</div>
  )
};

export default Header;