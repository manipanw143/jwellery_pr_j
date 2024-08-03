import React, { useState } from "react";
import { Card, Row, Col, Button, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faUserTie,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import aaimaa from "./img/aaimaa.jpg";
import { useTable } from "@refinedev/antd";
import { useOne } from "@refinedev/core";

const { Meta } = Card;

const Karyakarini = ({ templeId }) => {
  const [showCount, setShowCount] = useState(5); // State to manage number of cards to show
  const [layoutMode, setLayoutMode] = useState("column"); // State to manage layout mode

  const {data, isLoading} = useOne({
    resource: 'temples',
    id: templeId,
    meta: {
      populate: ["users_permissions_users"]
    }
  })
  const containerStyle = {
    padding: "30px",
    fontFamily: "'Roboto', sans-serif",
  };

  const memberStyle = {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    marginBottom: "20px",
    position: "relative", // Added for positioning the close button
  };

  const closeAllBtnStyle = {
    marginBottom: "10px",
  };

  const picStyle = {
    flexShrink: 0,
    marginRight: "20px",
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
  };

  const memberInfoStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const nameStyle = {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const titleStyle = {
    fontSize: "16px",
    color: "gray",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    margin: 0,
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  const socialStyle = {
    display: "flex",
    marginTop: "10px",
  };

  const socialLinkStyle = {
    marginRight: "10px",
    color: "#555",
    fontSize: "18px",
    transition: "color 0.3s ease",
  };

  const socialLinkHoverStyle = {
    color: "#007bff",
  };

  const handleShowMore = () => {
    setShowCount(showCount + 5); // Increase the count to show additional 5 cards
  };

  const handleLayoutChange = (mode) => {
    setLayoutMode(mode);
  };

  const handleCloseAllCards = () => {
    // Optional: Implement closing all cards logic if needed
    console.log("Closing all cards");
  };

  if (isLoading){
    return <Spin fullscreen></Spin>
  }

  const cardsToDisplay = data.data?.users_permissions_users?.slice(0, showCount);
  console.log("karyakarini", cardsToDisplay)

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "20px" }}>
        <Button onClick={() => handleLayoutChange("column")} style={{ marginRight: "10px" }}>
          Show in Columns
        </Button>
        <Button onClick={() => handleLayoutChange("row")} style={{ marginRight: "10px" }}>
          Show One per Row
        </Button>
        <Button onClick={handleCloseAllCards} style={closeAllBtnStyle}>
          Close All Cards
        </Button>
      </div>
      {layoutMode === "column" ? (
        <Row gutter={16}>
          {cardsToDisplay.map((user, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card style={memberStyle}>
                <div style={picStyle}>
                  <img
                    src={user.pictures} // Ensure a default image path
                    style={imgStyle}
                    alt={user.firstname || "Member"}
                  />
                </div>
                <div style={memberInfoStyle}>
                  <h4 style={nameStyle}>{user.firstname || "Member Name"}</h4>
                  <span style={titleStyle}>{user.position || data.data.name}</span>
                  <p style={descriptionStyle}>
                    {user.description ||
                      "Description of the member. Add more details here."}
                  </p>
                  <div style={socialStyle}>
                    <a
                      href="https://twitter.com/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faBriefcase} />
                    </a>
                    <a
                      href="https://www.facebook.com/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faBuilding} />
                    </a>
                    <a
                      href="https://www.instagram.com/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faUserTie} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faUserAlt} />
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div>
          {cardsToDisplay.map((user, index) => (
            <Card key={index} style={{ ...memberStyle, marginBottom: "20px" }}>
              <div style={{ display: "flex" }}>
                <div style={picStyle}>
                  <img
                    src={user.pictures} // Ensure a default image path
                    style={imgStyle}
                    alt={user.firstname || "Member"}
                  />
                </div>
                <div style={{ ...memberInfoStyle, flex: 1 }}>
                  <h4 style={nameStyle}>{user.firstname || "Member Name"}</h4>
                  <span style={titleStyle}>{user.position || data.data.name}</span>
                  <p style={descriptionStyle}>
                    {user.description ||
                      "Description of the member. Add more details here."}
                  </p>
                  <div style={socialStyle}>
                    <a
                      href="https://twitter.com/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faBriefcase} />
                    </a>
                    <a
                      href="https://www.facebook.com/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faBuilding} />
                    </a>
                    <a
                      href="https://www.instagram.com/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faUserTie} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/example"
                      style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}
                    >
                      <FontAwesomeIcon icon={faUserAlt} />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      {showCount < data.data.users_permissions_users?.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </div>
  );
};

export default Karyakarini;
