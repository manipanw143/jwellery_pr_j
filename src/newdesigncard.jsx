import React from 'react';
import { Card, Button } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design CSS
import './ProfileCard.css'; // Import your custom CSS

const ProfileCard = () => {
    return (
        <Card
            className="profile-card"
            cover={<img alt="Person Image" src="/img/boy.jpg" className="card-img" />}
            actions={[
                <Button type="primary" key="follow">
                    Follow
                </Button>
            ]}
        >
            <div className="card-basic-info">
                <h2>राजेश </h2>
                <p></p>
            </div>
            <div className="card-profile-info">
                <img src="/img/Rajes.avif" alt="Profile Image" className="profile-img" />
                <div className="info-text">
                    <p>राजेश </p>
                    {/* Uncomment and adjust if you want to include additional text */}
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;
