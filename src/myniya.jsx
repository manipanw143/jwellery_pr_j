import React from 'react';
import { Card, List, Space, Typography } from 'antd';
import { NumberOutlined } from '@ant-design/icons';

const { Text } = Typography;

const NiyamComponent = () => {
  const niyamList = [
    "प्रथम झूठ तजो सुख पाई।",
    "दूजो तो मद मांस छुड़ाई।",
    "तीजो धन पर ब्याज न लेवो।",
    "चौथे जुआ कभी नहीं खेलो।",
    "पंचम माता-पिता री सेवा।",
    "छठे अभ्यागत हो सेवा।",
    "सात गुरु की आज्ञा पालो।",
    "आंठो परहित मार्ग चालो।",
    "नव पर नारी माता जाणो।",
    "दस कन्या को धर्म परणाओ।",
    "ग्यारह सत्मारग चलना।"
  ];

  return (
    <Card title={<h2 style={{ textAlign: 'center' }}>नियम</h2>} className="niyam-card">
      <List
        itemLayout="horizontal"
        dataSource={niyamList}
        renderItem={(item, index) => (
          <List.Item>
            <Space direction="horizontal" align="center">
              <NumberOutlined style={{ fontSize: '20px' }} />
              <Text>{item}</Text>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default NiyamComponent;
