import React, { useState, useEffect, useRef } from "react";
import "./jwellery.css";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { FaPalette, FaCamera } from "react-icons/fa";

const JewelryCard = ({
  festival,
  jewelryName = "Sample Jewelry",
  shopName = "Ambika Jewellers",
}) => {
  const [image, setImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [gram, setGram] = useState("");
  const [rate, setRate] = useState("");
  const [goldRate, setGoldRate] = useState("");
  const [silverRate, setSilverRate] = useState("");
  const [selectedFestival, setSelectedFestival] = useState(
    festival || "Diwali"
  );
  const [customFestival, setCustomFestival] = useState("");
  const [cardColor, setCardColor] = useState("#fff8e1");
  const [spanBgColor, setSpanBgColor] = useState("#f39c12");
  const [spanFontColor, setSpanFontColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#f39c12"); // Color for Ambika Jewellers, Festival name, and contact details
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [offerText, setOfferText] = useState(
    "Special Diwali Offer: 20% Off on All Gold Jewelry!"
  );
  const videoRef = useRef(null);

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

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const capturedImage = canvas.toDataURL("image/png");
      setImage(capturedImage);
      setCameraEnabled(false); // Turn off camera after capture
    }
  };

  const downloadCard = () => {
    const cardElement = document.getElementById("jewelry-card");
    html2canvas(cardElement).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, `${jewelryName}_${selectedFestival}.png`);
      });
    });
  };

  const datedata = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
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
      setCustomFestival("");
    }
  };

  const getBackgroundImage = (festival) => {
    switch (festival) {
      case "Diwali":
        return "/Diwali.jpg";
      case "Dussehra":
      case "Navratri":
        return "";
      case "Christmas":
        return "";
      default:
        return "";
    }
  };

  const handleJewelryChange = (e) => {
    const value = e.target.value;
    setSelectedItem(value);

    // Map each option to its corresponding image
    const imageMap = {
      Har: "/har.jpg",
      Deepa: "/images/deepa.png",
      "Silver dollar": "/images/silver-dollar.png",
      Necklace: "/images/necklace.png",
      Ring: "/images/ring.png",
      // Add paths for other items
    };

    // Set the image based on the selected value
    if (imageMap[value]) {
      setImage(imageMap[value]);
    } else {
      setImage(null); // Clear the image if not found
    }
  };

  useEffect(() => {
    if (cameraEnabled && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({
          video: { facingMode: { exact: "environment" } }, // Add this line to prefer back camera
        })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
          setCameraEnabled(false);
        });
    } else {
      // Stop camera if disabled
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    }
  }, [cameraEnabled]);

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
          <FaPalette style={{ marginRight: "8px" }} />
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
            style={{ marginLeft: "10px" }}
          />
          <input
            type="color"
            value={spanFontColor}
            onChange={(e) => setSpanFontColor(e.target.value)}
            title="Choose Span Font Color"
            style={{ marginLeft: "10px" }}
          />
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            title="Choose Text Color"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>
      <div
        className="jewelry-card"
        id="jewelry-card"
        style={{
          backgroundColor: cardColor,
          backgroundImage: getBackgroundImage(
            customFestival || selectedFestival
          ),
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="logo-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="./aj.jpeg"
            alt="Logo"
            className="logo"
            style={{
              marginRight: "50px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <h2 className="ambikaje" style={{ color: textColor }}>
            {shopName}
          </h2>
        </div>
        <h2 className="festival-name" style={{ color: textColor }}>
          {customFestival || selectedFestival}
        </h2>

        <div
          className="offer-container"
          style={{
            backgroundColor: "#ffeb3b",
            color: "#d32f2f",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {offerText}
        </div>

        <div className="image-container">
          {cameraEnabled ? (
            <div>
              <video ref={videoRef} style={{ maxWidth: "100%" }} />
              <button
                onClick={handleCaptureImage}
                style={{ marginTop: "10px" }}
              >
                Capture Image
              </button>
            </div>
          ) : image ? (
            <img src={image} alt={selectedItem} className="jewelry-image" />
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
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Enter or Select"
              list="jewelry-types"
              value={selectedItem}
              // onChange={(e) => setSelectedItem(e.target.value)}
              onChange={handleJewelryChange}
            />
            <datalist id="jewelry-types">
              {/* List of jewelry types */}
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
        <div
          className="items-available"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              width: "60px",
              backgroundColor: spanBgColor,
              color: spanFontColor,
            }}
          >
            Gram
            <input
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={gram}
              onChange={(e) => setGram(e.target.value)}
            />
          </span>
          <span
            style={{
              width: "60px",
              backgroundColor: spanBgColor,
              color: spanFontColor,
            }}
          >
            Rate
            <input
              style={{ border: "1px solid #f39c12", width: "40px" }}
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </span>
        </div>
        <div className="details" style={{ color: textColor }}>
          <p>omgovindraj@gmail.com</p>
          <p>https://ambikajewellerys.vercel.app/</p>
          <p>9449987873</p>
          <p>
            #27, Nehru Road, Kullappa Circle, Kammanahalli, Bangalore~560084
          </p>
        </div>
        <div className="items-available">
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }}>
            Gold Jewellery, Silver Jewellery
          </span>
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }}>
            Antique Jewellery, Diamond Jewellery
          </span>
          <span style={{ backgroundColor: spanBgColor, color: spanFontColor }}>
            Lucky Birth Stone Jewellery
          </span>
          <span
            style={{
              fontFamily: "bold",
              backgroundColor: spanBgColor,
              color: spanFontColor,
            }}
          >
            Today Rate
            <span
              style={{ backgroundColor: spanBgColor, color: spanFontColor }}
            >
              Date : {datedata()}
            </span>
          </span>
          <div
            className="items-available"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                width: "60px",
                backgroundColor: spanBgColor,
                color: spanFontColor,
              }}
            >
              Gold
              <input
                style={{ border: "1px solid #f39c12", width: "40px" }}
                type="text"
                value={goldRate}
                onChange={(e) => setGoldRate(e.target.value)}
              />
            </span>
            <span
              style={{
                width: "60px",
                backgroundColor: spanBgColor,
                color: spanFontColor,
              }}
            >
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
      <div className="offer-input-container">
          <label htmlFor="offer-input">Set Offer Text:</label>
          <input
            id="offer-input"
            type="text"
            value={offerText}
            onChange={(e) => setOfferText(e.target.value)}
            placeholder="Enter your offer here"
          />
        </div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={() => setCameraEnabled(!cameraEnabled)}>
        <FaCamera style={{ marginRight: "8px" }} />
        {cameraEnabled ? "Turn Off Camera" : "Capture with Camera"}
      </button>
      <button className="download-button" onClick={downloadCard}>
        Download Card
      </button>
      
    </div>
  );
};

export default JewelryCard;
