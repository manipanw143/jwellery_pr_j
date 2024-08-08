import React, { useState } from 'react';
import './jwellery.css';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { FaPalette } from 'react-icons/fa';

const JewelryCard = ({ festival, jewelryName = "Sample Jewelry", shopName = "Ambika Jewellers" }) => {
  const [image, setImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const [gram, setGram] = useState('');
  const [rate, setRate] = useState('');
  const [goldRate, setGoldRate] = useState('');
  const [silverRate, setSilverRate] = useState('');
  const [selectedFestival, setSelectedFestival] = useState(festival || 'Diwali');
  const [customFestival, setCustomFestival] = useState('');
  const [cardColor, setCardColor] = useState('#fff8e1'); 
  const [spanBgColor, setSpanBgColor] = useState('#f39c12'); // default background color for span
  const [spanFontColor, setSpanFontColor] = useState('#fff'); // default font color for span

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
    html2canvas(cardElement).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, `${jewelryName}_${selectedFestival}.png`);
      });
    });
  };

  const datedata = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleFestivalChange = (e) => {
    const value = e.target.value;
    if (value === "Custom") {
      const customValue = prompt("Enter Custom Festival Name:");
      if (customValue) {
        setCustomFestival(customValue);
        setSelectedFestival(customValue);
      }
    } else {
      setSelectedFestival(value);
      setCustomFestival('');
    }
  };

  const getBackgroundImage = (festival) => {
    switch (festival) {
      case 'Diwali':
        return 'url(/Rangoli.jpg)';
      case 'Dussehra':
        return 'url(/Di.jpg)';
      case 'Ganesh Chaturthi':
        return 'url(/path/to/ganesh-chaturthi-background.jpg)';
      case 'Navratri':
        return 'url(/path/to/navratri-background.jpg)';
      case 'Christmas':
        return 'url(/path/to/christmas-background.jpg)';
      default:
        return '';
    }
  };

  return (
    <div className="card-container">
      <div className="controls-container">
        <div className="festival-selector">
          <label htmlFor="festival-select">Select Festival:</label>
          <select 
            id="festival-select"
            className="festival-dropdown"
            value={customFestival || selectedFestival} 
            onChange={handleFestivalChange}
          >
            <option value="Diwali">Diwali</option>
            <option value="Dussehra">Dussehra</option>
            <option value="Ganesh Chaturthi">Ganesh Chaturthi</option>
            <option value="Navratri">Navratri</option>
            <option value="Christmas">Christmas</option>
            <option value="Custom">Enter Custom Festival</option>
          </select>
        </div>
        <div className="color-picker-container">
          <FaPalette style={{ marginRight: '8px' }} />
          <input 
            type="color" 
            value={cardColor} 
            onChange={(e) => setCardColor(e.target.value)} 
            title="Choose Card Color"
          />
          <input 
            type="color" 
            value={spanBgColor} 
            onChange={(e) => setSpanBgColor(e.target.value)} 
            title="Choose Span Background Color"
            style={{ marginLeft: '10px' }}
          />
          <input 
            type="color" 
            value={spanFontColor} 
            onChange={(e) => setSpanFontColor(e.target.value)} 
            title="Choose Span Font Color"
            style={{ marginLeft: '10px' }}
          />
        </div>
      </div>
      <div 
        className="jewelry-card" 
        id="jewelry-card" 
        style={{ 
          backgroundColor: cardColor, 
          backgroundImage: getBackgroundImage(customFestival || selectedFestival),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="logo-container">
          <h2 style={{ color: "#f39c12" }}>{shopName}</h2>
        </div>
        <h2 className="festival-name">{customFestival || selectedFestival}</h2>
        <div className="image-container">
          {image ? (
            <img src={image} alt={jewelryName} className="jewelry-image" />
          ) : (
            <div className="placeholder-image">Upload Image</div>
          )}
        </div>
        <div className="items-available">
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }}>
            <input
              style={{
                border: "1px solid #f39c12",
                color: "#f39c12",
                fontSize: "16px",
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
              {/* Your existing jewelry options */}
              <option value="Har" />
              <option value="Deepa" />
              {/* Other options */}
            </datalist>
          </span>
        </div>
        <div className="items-available" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <span style={{ width: "60px", backgroundColor: spanBgColor, color: spanFontColor }}>
            Gram
            <input
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={gram}
              onChange={(e) => setGram(e.target.value)}
            />
          </span>
          <span style={{ width: "60px" , backgroundColor: spanBgColor, color: spanFontColor }}>
            Rate
            <input
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </span>
        </div>
        <div className="details">
          <p>omgovindraj@gmail.com</p>
          <p>https://ambikajewellerys.vercel.app/</p>
          <p>9449987873</p>
          <p>#27, Nehru Road, Kullappa Circle, Kammanahalli, Bangalore~560084</p>
        </div>
        <div className="items-available">
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }} >Gold Jewellery, Silver Jewellery</span>
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }}>Antique Jewellery, Diamond Jewellery</span>
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }}>Lucky Birth Stone Jewellery</span>
          <span style={{ fontFamily: "bold",backgroundColor: spanBgColor, color: spanFontColor }} >
            Today Rate
            <span style={{ backgroundColor: spanBgColor, color: spanFontColor }} >Date : {datedata()}</span>
          </span>
          <div className="items-available" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <span style={{ width: "60px",backgroundColor: spanBgColor, color: spanFontColor }}>
              Gold
              <input
                style={{ border: "1px solid #f39c12", width: "40px" }}
                type="text"
                value={goldRate}
                onChange={(e) => setGoldRate(e.target.value)}
              />
            </span>
            <span style={{ width: "60px",backgroundColor: spanBgColor, color: spanFontColor }}>
              Silver
              <input
                style={{ border: "1px solid #f39c12", width: "40px" }}
                type="text"
                value={silverRate}
                onChange={(e) => setSilverRate(e.target.value)}
              />
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
