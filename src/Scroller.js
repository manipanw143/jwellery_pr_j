import React from 'react';
import './scroller.css';

const Scroller = ({ items = [] }) => {
  return (
    <div className="scroller-container">
      <div className="scroller-content">
        {items.map((item, index) => (
          <span key={index} className="scroller-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
