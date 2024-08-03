import React from 'react';
import { Button, Form, Image, Input, Select, Space } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ApprovalForm = ({ image }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <Form
            {...layout}
            name="approval-form"
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              name="content"
              label="Content"
              rules={[
                {
                  required: true,
                  message: 'Please input the content',
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image"
            >
              {image && <Image width={200} src={image} />}
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[
                {
                  required: true,
                  message: 'Please select a status',
                },
              ]}
            >
              <Select
                placeholder="Select a status"
                allowClear
              >
                <Option value="pending">Pending</Option>
                <Option value="requested">Approved</Option>
                <Option value="accepted">Rejected</Option>
                <Option value="accepted">Under Review</Option>
                <Option value="accepted">Completed</Option>
                <Option value="accepted">Cancelled</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button">
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };
  
export default ApprovalForm;
