// App.js

import React from 'react';
import JewelryCard from './jwellery/jwellery';
import './App.css';
// import MyCarousel from './separatestyle/mycarousel';
import Festivals from './scrolling/festival';
// import ImageScrolling from './scrolling/horizontalscrolling';
// import DiwaliCard from './jwellery/Diwali';

function App() {
  return (
    <div className="App">
     <Festivals/>
      <JewelryCard festival="Diwali" jewelryName="Necklace" />
      {/* <DiwaliCard/> */}
    </div>
  );
}

export default App;
