import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './mycarousel.css';
import { TempleCard } from './card';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const MyCarousel = () => {
  return (
    <Carousel 
      responsive={responsive}
      containerClass="carousel-container"
      infinite={true}
      itemClass="carousel-item"
      >
      
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      <TempleCard/>
      
    </Carousel>
  );
}
export default MyCarousel;