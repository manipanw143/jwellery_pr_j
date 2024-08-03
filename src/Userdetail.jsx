यूजर


import { ShowButton } from "@refinedev/antd";
import { Button, Table, Modal} from "antd";
import React, {useState} from "react";

export const UsersDetailList = ({ vyaapars }) => {
  const usersList = [];
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(false)
  console.log(vyaapars)
  vyaapars?.forEach((vyaapar) => {
    // appending field of vyaapar of user
    let user = vyaapar?.users[0];
    if (vyaapar.users && vyaapar.users.length > 0) {
      let user = vyaapar.users[0];
      user["business_name"] = vyaapar?.name;
      user["business_id"] = vyaapar?.businessid;
      user["mobile_number_1"] = vyaapar?.mobile_number_1;
      user["mobile_number_2"] = vyaapar?.mobile_number_2;
      user["mobile_number_3"] = vyaapar?.mobile_number_3;
      user["b_address_name"] = vyaapar?.address?.name;
      user["b_address_pincode"] = vyaapar?.address?.pincode;
      user["b_address_tehsil"] = vyaapar?.address?.tehsil;
      user["b_address_district"] = vyaapar?.address?.district;
      user["b_address_state"] = vyaapar?.address?.state;
      user["b_address_landmark"] = vyaapar?.address?.landmark;
      usersList.push(user);
    }
  });
  
  const columns = [
    { title: "ID", dataIndex: "id", key: "id", hidden: true },
    { title: "Bussiness Id", dataIndex: "business_id", key: "business_id" },
    { title: "First Name", dataIndex: "firstname", key: "firstname" },
    { title: "Father", dataIndex: "father", key: "father" },
    { title: "Gotra", dataIndex: "gotra", key: "gotra" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Business Name",
      dataIndex: "business_name",
      key: "business_name",
    },

    { title: "Mob No 1", dataIndex: "mobile_number_1", key: "mobile_number_1" },
    { title: "Mob No 2", dataIndex: "mobile_number_2", key: "mobile_number_2" },
    { title: "Mob No 3", dataIndex: "mobile_number_3", key: "mobile_number_3" },
    //{ title: "Vyaapar", dataIndex: "vyaapar", key: "vyaapar", hidden: true },
    {
      title: "Show Details",
      key: "show",
      render: (text, record) => (<ShowButton onClick={() => {
        setUser(record);
        setVisible(true);
      }}/>),
    },
  ];
  return (
    <div>
      <Table dataSource={usersList} columns={columns} rowKey="id" />
      <DataModal 
        userData={user}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};



const DataModal = ({
  userData,
  visible,
  setVisible,
}) => {
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Modal
      title="Details"
      open={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <p> <b>Name: </b>{userData?.firstname}</p>
      <p> <b>Father's Name:</b> {userData?.father}</p>
      <p> <b>Gotra:</b> {userData?.firstname}</p>
      <h3>Vyaapar</h3>
      <p> <b>Name:</b> {userData?.business_name}</p>
      <p> <b>Mob No 1:</b> {userData?.mobile_number_1}</p>
      <p> <b>Mob No 2:</b> {userData?.mobile_number_2}</p>
      <p> <b>Mob No 3:</b> {userData?.mobile_number_3}</p>
      <p> <b>Address Line 1:</b>  {userData?.b_address_name}</p>
      <p> <b>Landmark:</b> {userData?.b_address_landmark}</p>
      <p> <b>District:</b> {userData?.b_address_district}</p>
      <p> <b>Tehsil:</b> {userData?.b_address_tehsil}</p>
      <p> <b>State: </b>{userData?.b_address_state}</p>
    </Modal>
  );
};


























// import React, { useState } from "react";
// import { Card, Row, Col, Button } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBriefcase,
//   faBuilding,
//   faUserTie,
//   faUserAlt,
// } from "@fortawesome/free-solid-svg-icons";

// const { Meta } = Card;

// export const UsersDetailList = ({ vyaapars }) => {
  
//   const [showCount, setShowCount] = useState(5);
//   const [layoutMode, setLayoutMode] = useState("column"); 

//   console.log(vyaapars)

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
    position: "relative", 
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

  const cardsToDisplay = vyaapars?.slice(0, showCount);

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
                    alt={user.name}
                  />
                </div>
                <div style={memberInfoStyle}>
                  <h4 style={nameStyle}>{user.name}</h4> 
                  <span style={titleStyle}>{user.position || vyaapars.name}</span>
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
                  <span style={titleStyle}>{user.position || vyaapars.name}</span>
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
      {showCount < vyaapars.users_permissions_users?.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </div>
  );

}