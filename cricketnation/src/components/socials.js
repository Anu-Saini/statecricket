import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button } from 'antd';
import "../components/Styles/socials.css";
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: '50%',
  height: ['300px', '300px'],
  layout: [1, 5],
  photos: [
    { source: "https://loremflickr.com/640/360" },
    { source: "https://placekitten.com/640/360" },
    { source: 'https://placebeard.it/640x360' },
     { source: 'https://placekitten.com/640/360' },
     { source: 'http://placeimg.com/640/360/any' },
     { source: 'https://placebeard.it/640x360' },
     { source: 'https://loremflickr.com/640/360' },
     { source: 'https://placekitten.com/640/360' },
     { source: 'https://placebeard.it/640x360' },
     { source: 'http://placeimg.com/640/360/any' },
  ],
  showNumOfRemainingPhotos: true
};




const socials = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  return (
    <>
    <section id="h1-connect">
    <div className='footer-social'>
        <ul className='linear'>
        
            <li className='flist' >
              <a href="https://www.facebook.com/cricketvictoria" title="facebook" target="#" className='fa fa-facebook nav-link'>
             facebook   </a>
            </li>
            <li className='flist'>
              <a href="https://twitter.com/cricketvictoria" title="twitter" target="#" className='fa fa-twitter nav-link'>
              twitter </a>
            </li>
            <li className='flist'>
              <a href="https://www.instagram.com/cricketvictoria/" title="Instagram" target="#" className='fa fa-instagram nav-link'>
              instagram</a>
            </li>
          </ul>
        </div>
</section> 
{/* <section> 
<ReactPhotoCollage {...setting} />
</section> */}
    </>
    
  );
};

export default socials;