import React from "react";
import "./Grid.css"; // Import CSS file for styling
import MyCarousel from './myCarousel'

const Grid = () => {
  // Column headers
  // const headers = ["कृ.स.", "नाम", "संबंध", "व्यवसाय", "उम्र", "शिक्षा"];

  // Generate an array with numbers from 1 to 54 (9 rows of data)
  // const cellCount = Array.from({ length: 54 }, (_, index) => index + 1);

  return (
    // <div className="grid-wrapper">
    //   <div className="boxes">
    //     <div className="box">
    //         <div>
    //          Office Address :
    //         </div>
    //     </div>
    //     <div className="box">
    //         <div>
    //            Residence Address :
    //         </div> 
    //     </div>

    //   </div>
    //   <div className="outer-line">
    //     <div className="info-line">
    //       गाँव शेखावास, बेरा पिसका, वाया सजा रोड, जिला पाली, राजस्थान -
    //       09928739594
    //     </div>
    //   </div>
    //   <div className="grid">
    //     {/* Header row */}
    //     {headers.map((header, index) => (
    //       <div
    //         key={index}
    //         className={`grid-cell header ${index === 0 ? "small-column" : ""}`}
    //       >
    //         {header}
    //       </div>
    //     ))}
    //     {/* Data rows */}
    //     {cellCount.map((cell, index) => (
    //       <div
    //         key={index}
    //         className={`grid-cell ${index % 6 === 0 ? "small-column" : ""}`}
    //       >
    //         {cell}
    //       </div>
    //     ))}
    //   </div>

    <div>
      <MyCarousel/>
    </div>
  );
};

export default Grid;
