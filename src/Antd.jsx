import React from 'react';
import { Card } from 'antd';

const AntCard = () => {
  return (
    <Card title="Ant Business Card" style={{ width: 300 }}>
      <div>
        <img
          src="https://placeimg.com/200/150/animals"
          alt="Ant"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <p><strong>Business Name:</strong> Ants R Us</p>
        <p><strong>Specialty:</strong> Ant Extermination Services</p>
        <p><strong>Contact:</strong> 123-456-7890</p>
        <p><strong>Email:</strong> info@antsrus.com</p>
      </div>
    </Card>
  );
}

export default AntCard;
