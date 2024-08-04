// App.js

import React from 'react';
import JewelryCard from './jwellery/jwellery';
import './App.css';
import Festivals from './scrolling/festival';


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
