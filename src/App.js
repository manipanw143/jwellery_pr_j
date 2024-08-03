// App.js

import React from 'react';
import JewelryCard from './jwellery/jwellery';
import './App.css';
// import DiwaliCard from './jwellery/Diwali';

function App() {
  return (
    <div className="App">
      <JewelryCard festival="Diwali" jewelryName="Necklace" />
      {/* <DiwaliCard/> */}
    </div>
  );
}

export default App;
