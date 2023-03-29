import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button } from 'antd';
import "../components/Styles/footer.css";
import Appcas from "./PCarousel";

const Footer = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  return (
    <>
    <section>
    <Appcas />
    </section>
    <footer className="footer bg-info">
      <div className="container">
        <div className='row pt-5 pb-5'>
          <div className='col-md-3' >
            <span className='title'>LINKS </span>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/junction-oval/" className='nav-link'>Junction Oval</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/news/" className='nav-link'>latest news</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/shop/" className='nav-link'>Shop</a>
              </li>
            </ul>
           </div>

           <div className='col-md-3'>
            <span className='title'>SUPPORT </span>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/child-safe-member-protection/" className='nav-link'>Child Safe and memeber Protection</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/clubs-support/" className='nav-link'>Clubs /Associations</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/coaching/" className='nav-link'>Coaching</a>
              </li>
              
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/umpiring/" className='nav-link'>Umpiring</a>
              </li>
              
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/government-and-facilities/" className='nav-link'>Covernment & Facilities</a>
              </li>
            </ul>
           </div>

           <div className='col-md-3'>
            <span className='title'>ABOUT </span>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/board/" className='nav-link'>Our Board</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/sponsors/" className='nav-link'>Our Partners</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/corporate/" className='nav-link'>Corporate</a>
              </li>
              
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/careers/" className='nav-link'>Careers</a>
              </li>
              
              <li className='nav-item'>
                <a href="https://www.cricketvictoria.com.au/contact/" className='nav-link'>Contact</a>
              </li>
            </ul>
           </div>

           <div className='col-md-3'>
                        <span className='title'>CONTACT </span>
                < div id='addr' >
                <h6>Cricket Victoria</h6>
                <p>CitiPower Centre - Junction Oval</p>
                <p>Lakeside Drive</p>
                 <p>St Kilda VIC 3182</p> 
                 <br></br>
              <p> Ph: +61 3 9085 4000</p>
              <p> Fax: 03 9085 4001</p>
            <p> Email: vca@cricketvictoria.com.au</p>

 </div>
                  
           </div>
<hr />
<div className='footer-bottom'>
  <div className='container'>
    <div className='row'>
      <div className='col-xs-12'>
     
        <div className='signature'>
          <h6>© Cricket Victoria 2023. All Rights Reserved</h6>
          <ul  className='linear'>
            <li className='footlist'>
              <a href="https://www.cricketvictoria.com.au/privacy-policy/" className="nav-link"> Privacy Policy</a>
            </li>
            <li className='footlist'>
              <a href="https://www.cricketvictoria.com.au/collection-statement/" className="nav-link"> Collection Statement</a>
            </li>
            <li className='footlist'>
              <a href="https://www.cricketvictoria.com.au/terms-and-conditions/" className="nav-link"> Terms and Conditions</a>
            </li>
          </ul>
          <span> 
             <a target="_blank" title="Website design" href="https://www.google.com" className="nav-link" id="dev"> Website Design by </a>
              </span>
        </div>
      </div>
      </div>
      </div>
      </div>

      </div>
      </div>
 </footer>
        </>
      );
};

export default Footer;
