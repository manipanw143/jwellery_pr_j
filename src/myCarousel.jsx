// MyCarousel.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './owl.css'; // Make sure to import your custom CSS file

const MyCarousel = () => {
  const options = {
    loop: true,
    nav: true,
    className: "owl-theme",
    // items: 4,
    dots: false,
    margin: 20 
  };

  return (
    <div className="carousel-wrapper">
      <OwlCarousel {...options} className='owl-theme team-carousel position-relative p-5 py-sm-5' loop margin={10} nav>
        <img className="img" src="https://picsum.photos/200" alt="" />
        <img className="img" src="https://picsum.photos/200" alt="" />
        <img className="img" src="https://picsum.photos/200" alt="" />
        <img className="img" src="https://picsum.photos/200" alt="" />
      </OwlCarousel>
    </div>
  );
};

export default MyCarousel;
