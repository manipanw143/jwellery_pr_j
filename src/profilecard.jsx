import React from 'react';
import { Card, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import './UserProfileCard.css';

const { Meta } = Card;

const UserProfileCard = () => {
  const user = {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    gotra: 'Kashyap',
    mobile: '+1 234 567 890',
    address: '123 Main Street, City, Country',
  };

  return (
    <Card
      className="user-profile-card"
      cover={<img alt="User Photo" src={user.photo} className="card-cover-photo" />}
    >
      <Meta
        avatar={<Avatar src={user.photo} />}
        title={<span className="card-title">{user.name}</span>}
        description={
          <div className="card-description">
            <p><strong>Gotra:</strong> {user.gotra}</p>
            <p><FontAwesomeIcon icon={faPhone} /> {user.mobile}</p>
            <p><FontAwesomeIcon icon={faHome} /> {user.address}</p>
          </div>
        }
      />
    </Card>
  );
};

export default UserProfileCard;
