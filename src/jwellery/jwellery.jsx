import React, { useState } from 'react';
import './jwellery.css';
import logo from '../img/lo.jpg'; // Adjust the path to your logo
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const JewelryCard = ({ festival, jewelryName = "Sample Jewelry", shopName = "Ambika Jewellers" }) => {
  const [image, setImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const [gram, setGram] = useState('');
  const [rate, setRate] = useState('');
  const [goldRate, setGoldRate] = useState('');
  const [silverRate, setSilverRate] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const downloadCard = () => {
    const cardElement = document.getElementById('jewelry-card');

    // Temporarily replace input fields with text
    const gramElement = document.getElementById('gram-value');
    const rateElement = document.getElementById('rate-value');
    const goldRateElement = document.getElementById('gold-rate-value');
    const silverRateElement = document.getElementById('silver-rate-value');

    gramElement.innerText = gram || 'Gram';
    rateElement.innerText = rate || 'Rate';
    goldRateElement.innerText = goldRate || 'Gold';
    silverRateElement.innerText = silverRate || 'Silver';

    html2canvas(cardElement).then((canvas) => {
      // Revert changes after capturing the canvas
      gramElement.innerText = '';
      rateElement.innerText = '';
      goldRateElement.innerText = '';
      silverRateElement.innerText = '';

      canvas.toBlob((blob) => {
        saveAs(blob, `${jewelryName}_${festival}.png`);
      });
    });
  };

  const datedata = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="card-container">
      <div className="jewelry-card" id="jewelry-card">
        <div className="logo-container">
          <h2 style={{ color: "#f39c12" }}>{shopName}</h2>
        </div>
        <h2 className="festival-name">{festival}</h2>
        <div className="image-container">
          {image ? (
            <img src={image} alt={jewelryName} className="jewelry-image" />
          ) : (
            <div className="placeholder-image">Upload Image</div>
          )}
        </div>
        <div className="items-available">
          <span>
            <input
              style={{
                border: "1px solid #f39c12",
                color: "#f39c12",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                padding: "5px",
                borderRadius: "5px"
              }}
              type="text"
              placeholder="Enter or Select"
              list="jewelry-types"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
            />
            <datalist id="jewelry-types">
              {/* Add your jewelry options here */}
            </datalist>
          </span>
        </div>
        <div className="items-available" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <span style={{ width: "60px" }}>
            Gram
            <input
              id="gram-input"
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={gram}
              onChange={(e) => setGram(e.target.value)}
            />
            <span id="gram-value" style={{ display: 'none' }}></span>
          </span>
          <span style={{ width: "60px" }}>
            Rate
            <input
              id="rate-input"
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <span id="rate-value" style={{ display: 'none' }}></span>
          </span>
        </div>
        <div className="details">
          <p>omgovindraj@gmail.com</p>
          <p>https://ambikajewellerys.vercel.app/</p>
          <p>9449987873</p>
          <p>#27, Nehru Road, Kullappa Circle, Kammanahalli, Bangalore~560084</p>
        </div>
        <div className="items-available">
          <span>Gold Jewellery, Silver Jewellery</span>
          <span>Antique Jewellery, Diamond Jewellery</span>
          <span>Lucky Birth Stone Jewellery</span>
          <span style={{ fontFamily: "bold" }}>
            Today Rate
            <span>Date : {datedata()}</span>
          </span>
          <div className="items-available" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <span style={{ width: "60px" }}>
              Gold
              <input
                id="gold-rate-input"
                style={{ border: "1px solid #f39c12", width: "40px" }}
                type="text"
                value={goldRate}
                onChange={(e) => setGoldRate(e.target.value)}
              />
              <span id="gold-rate-value" style={{ display: 'none' }}></span>
            </span>
            <span style={{ width: "60px" }}>
              Silver
              <input
                id="silver-rate-input"
                style={{ border: "1px solid #f39c12", width: "40px" }}
                type="text"
                value={silverRate}
                onChange={(e) => setSilverRate(e.target.value)}
              />
              <span id="silver-rate-value" style={{ display: 'none' }}></span>
            </span>
          </div>
        </div>
      </div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={downloadCard}>Download Card</button>
    </div>
  );
};

export default JewelryCard;
