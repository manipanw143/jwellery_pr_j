import React, { useState } from 'react';
import { Typography, Button, Select, Input, Form, Upload, message } from 'antd';
import { UploadOutlined, SendOutlined } from '@ant-design/icons';
import { ShopOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const MessageBox = () => {
  const [recipient, setRecipient] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleRecipientChange = (value) => {
    setRecipient(value);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleSendMessage = () => {
    // Implement your send message logic here
    message.success('Message sent successfully');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        maxWidth: 600,
        margin: 'auto',
        marginTop: 24,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: 2,
        backgroundColor: '#ffffff',
      }}
    >
      <Typography.Title level={4} style={{ marginBottom: 24, color: '#1890ff', fontWeight: 'bold' }}>
        Send Message
      </Typography.Title>
      <Form layout="vertical" onFinish={handleSendMessage} style={{ width: '100%' }}>
        <Form.Item label="Send To">
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select recipients..."
            value={recipient}
            onChange={handleRecipientChange}
          >
            <Select.Option value="user1">User 1</Select.Option>
            <Select.Option value="user2">User 2</Select.Option>
            <Select.Option value="user3">User 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Message Text">
          <TextArea rows={4} placeholder="Type your message here..." />
        </Form.Item>
        <Form.Item label="Attachments">
          <Upload
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Return false so that Ant Design doesn't upload the file automatically
          >
            <Button icon={<UploadOutlined />}>Attach File</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
            Send
          </Button>
        </Form.Item>
      </Form>
      <h1>yeeesssssssssssssss</h1>
      <ShopOutlined style={{ fontSize: '24px', color: '#08c' }} />
    </div>
  );
};

export default MessageBox;
