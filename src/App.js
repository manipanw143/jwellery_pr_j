// App.js

import React from 'react';
import JewelryCard from './jwellery/jwellery';
import './App.css';
import Scroller from './Scroller';
// import FAQComponent from './faqcomponent';
// import Festivals from './scrolling/festival';
// import Festivals from './scrolling/festival';


function App() {
  const scrollerItems = [
    'Exclusive Diwali Offers!',
    'Flat 20% off on all gold jewelry!',
    'New arrivals just in time for the festive season!',
    'Custom designs available, order now!',
  ];
  return (
    <>
    <div className="App">
      {/* <Festivals/> */}
      <Scroller items={scrollerItems} />
      <JewelryCard festival="Diwali" jewelryName="Necklace" />
      {/* <DiwaliCard/> */}
      {/* <FAQComponent/> */}
    </div>
    </>
  );
}

export default App;
