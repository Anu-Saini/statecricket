import React from 'react';
import '../components/Styles/footer.css';
//Install and import the library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Appcas() {

  //Responsiveness 
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    868: { items: 3 },
    1024: { items: 4 },
  };
  

  //The carousel items 
  const items = [
    <div className="item">
      <img src="/CBCo_Brewing.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/citipower.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/fulltrack.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/Kookaburra_sports.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/manhari.jpg" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/oatley.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/sunlessed.avif" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/tac.png" alt="cute cat"/>
    </div>,
    <div className="item">
    <img src="/toyota.png" alt="cute cat"/>
  </div>,
  ];


  return (
    <div className="App">

      <h3>Our partners</h3>
      
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default Appcas;
