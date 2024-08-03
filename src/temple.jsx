import React from 'react';
import im1 from './img/aaimaa.jpg'
import im2 from './img/dharmguru.jpg'

const Temple = () => {
  const containerStyle = {
    position: 'relative',
    width: 'fit-content',
    height: 'fit-content',
    margin: 'auto',
    border: '2px solid #000', // Optional: Adds a border around the container for better visibility
  };

  const templeImageStyle = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  };

  const innerImageStyle = {
    position: 'absolute',
    top: '30%',  // Adjust this value to position the inner image correctly
    left: '30%', // Adjust this value to position the inner image correctly
    width: '40%',  // Adjust this value to change the size of the inner image
    height: 'auto',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={containerStyle}>
      <img src= {im1} alt="Temple" style={templeImageStyle} />
      <img src= {im2} alt="Inner Content" style={innerImageStyle} />
    </div>
  );
};

export default Temple;
