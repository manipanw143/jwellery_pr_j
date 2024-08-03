import React from 'react';
import { Button, Form, Input, Select, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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

const FormDisabledDemo = ({ setImage }) => {
    const [form] = Form.useForm();
  
    const onGenderChange = (value) => {
      switch (value) {
        case 'male':
          form.setFieldsValue({
            note: 'Hi, man!',
          });
          break;
        case 'female':
          form.setFieldsValue({
            note: 'Hi, lady!',
          });
          break;
        case 'other':
          form.setFieldsValue({
            note: 'Hi there!',
          });
          break;
        default:
      }
    };
  
    const onFinish = (values) => {
      console.log(values);
    };
  
    const onReset = () => {
      form.resetFields();
    };
  
    const handleUpload = ({ file }) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="mobile"
              label="MobileNo"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Upload customRequest={handleUpload}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
              {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };
  
export default FormDisabledDemo;
