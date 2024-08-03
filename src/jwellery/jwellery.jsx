import React, { useState } from 'react';
import './jwellery.css';
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
    html2canvas(cardElement).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, `${jewelryName}_${festival}.png`);
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
            <option value="Har" />
              <option value="Deepa" />
              <option value="Silver dollar" />
              <option value="Necklace" />
              <option value="Plate" />
              <option value="Silver bracelet" />
              <option value="Ring" />
              <option value="Kum kum bharni" />
              <option value="Silver black beds chain" />
              <option value="Kamal" />
              <option value="Snake" />
              <option value="Silver rosary" />
              <option value="Tali" />
              <option value="Bowl" />
              <option value="Silver gold plated item" />
              <option value="Kola" />
              <option value="Kamakshi deepa" />
              <option value="Silver kada" />
              <option value="Dollar" />
              <option value="Vigraha" />
              <option value="Silver bangle" />
              <option value="Mura" />
              <option value="Glass" />
              <option value="Mattal" />
              <option value="Banna plant" />
              <option value="Chain" />
              <option value="Panch patra" />
              <option value="Laxmi kas" />
              <option value="Rudrani" />
              <option value="Stone gundu" />
              <option value="Pal ada" />
              <option value="Antique kamal" />
              <option value="Neck chain" />
              <option value="Antique har" />
              <option value="Leg chain" />
              <option value="Antique necklace" />
              <option value="Cup plate" />
              <option value="Jumkis" />
              <option value="Dab" />
              <option value="Pearl chains" />
              <option value="Tulsi plant" />
              <option value="Black beds chain" />
              <option value="Bendgi" />
              <option value="Bracelet" />
              <option value="Chambu" />
              <option value="Vale chip" />
              <option value="Punjabi kada" />
              <option value="Paner chambu" />
              <option value="Mango bhat" />
              <option value="Kalsa chambu" />
              <option value="Tope tali" />
              <option value="Cow" />
              <option value="Stone mattal" />
              <option value="Stand" />
              <option value="Pendant" />
              <option value="Flower butti" />
              <option value="Baby bracelet" />
              <option value="Fruit bowl" />
              <option value="Choker" />
              <option value="Silver frame" />
              <option value="Jomalla gundu" />
              <option value="Silver pen" />
              <option value="Sima kada" />
              <option value="Silver ring" />
              <option value="Bangales" />
              <option value="Arke item" />
              <option value="Baby bangles" />
              <option value="Gulsh" />
              <option value="Bugri" />
              <option value="Kada" />
              <option value="Drops" />
              <option value="Anaker" />
              <option value="Gold frame" />
              <option value="Gift item" />
              <option value="Baby ring" />
              <option value="Silver coin" />
              <option value="Bessari" />
              <option value="Old coin" />
              <option value="Gold coin" />
              <option value="Mandasana" />
              <option value="Bell" />
              <option value="Julla" />
              <option value="Mala flower" />
              <option value="Flower" />
              <option value="Kapor arti" />
              <option value="Spoon" />
              <option value="Silver coconut" />
            </datalist>
          </span>
        </div>
        <div className="items-available" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <span style={{ width: "60px" }}>
            Gram
            <input
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={gram}
              onChange={(e) => setGram(e.target.value)}
            />
          </span>
          <span style={{ width: "60px" }}>
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
          {/* <span>Gold Jewellery, Silver Jewellery</span>
          <span>Antique Jewellery, Diamond Jewellery</span>
          <span>Lucky Birth Stone Jewellery</span> */}
          <span style={{ fontFamily: "bold" }}>
            Today Rate
            <span>Date : {datedata()}</span>
          </span>
          <div className="items-available" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <span style={{ width: "60px" }}>
              Gold
              <input
                style={{ border: "1px solid #f39c12", width: "40px" }}
                type="text"
                value={goldRate}
                onChange={(e) => setGoldRate(e.target.value)}
              />
            </span>
            <span style={{ width: "60px" }}>
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
