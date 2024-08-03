// src/DiwaliCard.js
import React from 'react';
import './DiwaliCard.css';
import diwali from '../img/Di.jpg';
const DiwaliCard = () => {
  return (
    <div className="card">
      <div className='header-contain'>
      <div className="contact">
        <p>Govin Sen</p>
        <p>9449987873</p>
      </div>
      {/* <div><h1 className="title"> Ambika Jwellers</h1></div> */}
      </div>
      
      <p className="subtitle">Designer Diamond & Gold Jewellery</p>
      <h2>Celebrate DIWALI with Ambika Jewellers</h2>
      <div className="bangles">
        <img src="/path-to-bangle-image.jpg" alt="Banglore" />
      </div>
      <div className="jewellery-types">
        <span>Real Diamond</span>
        <span>Gold Jewellery</span>
        <span>Antique Kundan Jewellery</span>
        <span>Platinum Jewellery</span>
        <span>Silver Jewellery</span>
      </div>
    </div>
  );
};

export default DiwaliCard;
