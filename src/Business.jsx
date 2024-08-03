import React, { useState } from "react";
import {
  Modal,
  Table,
  Button,
  Drawer,
  Select,
  Input,
  Upload,
  Form,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useCreate } from "@refinedev/core";
const { TextArea } = Input;
const { Option } = Select;

const API_URL = import.meta.env.VITE_APP_UPLOAD_ENDPOINT;

const ShopTable = ({ templeId, dataSource }) => {
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [open, setOpen] = useState(false);
  const [currCategory, setCurrCategory] = useState("");
  const [all, setAll] = useState(false);
  const [selectedCategorys, setSelectedCategoys] = useState([]);
  const { mutate: createMessage } = useCreate();
  const [form] = Form.useForm();

  const userId = JSON.parse(localStorage.getItem('id'));

  const options = [{ label: "SELECT_ALL", value: "SELECT_ALL" }];

  const showDrawer = (curr = "ALL") => {
    if (curr === "ALL") {
      setAll(true);
    } else {
      setAll(false);
      setCurrCategory(curr);
    }
    setOpen(true);
  };
  const onClose = () => {
    setCurrCategory("");
    setOpen(false);
  };
  
  const typeCounts = dataSource.reduce((counts, item) => {
    if (!counts[item.type]) {
      counts[item.type] = [];
    }
    counts[item.type].push(item);
    return counts;
  }, {});

  const sortedTypeCounts = Object.entries(typeCounts).sort(
    (a, b) => b[1].length - a[1].length
  );
  const totalCount = dataSource.length;

  const types = [];
  sortedTypeCounts?.forEach((data) => {
    types.push({
      type: data[0],
      count: data[1].length,
      users: data[1],
    });
    options.push({
      label: data[0],
      value: data[0],
    });
  });

  const openDialog = (vyapars) => {
    setSelectedUsers(vyapars.flatMap((vyapar) => vyapar.users));
  };

  const closeDialog = () => {
    setSelectedUsers(null);
  };

  const handleChange = (value) => {
    const objectvalues = Object.values(value);
    if (objectvalues.includes("SELECT_ALL")) {
      setSelectedCategoys(options);
    } else {
      setSelectedCategoys(value);
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "First Name", dataIndex: "firstname", key: "firstname" },
    { title: "Father", dataIndex: "father", key: "father" },
    { title: "Gotra", dataIndex: "gotra", key: "gotra" },
  ];

  const typeColumns = [
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Count", dataIndex: "count", key: "count" },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <>
          <Button onClick={() => openDialog(record.users)}>Users</Button>
          <span> </span>
          <Button onClick={() => showDrawer(record.type)}>Message</Button>
        </>
      ),
    },
  ];

  const handleOnFinish = () => {
    const values = form.getFieldValue([]);
    let files = [];
    values?.attachments?.fileList?.forEach((file) => {
      files.push(file?.response[0]?.id);
    })
    let categoryCSV = "";
    selectedCategorys?.forEach((category) => {  
        if (typeof category == 'string'){
          categoryCSV += ',' + category;
        } else {
          if (category?.value !== "SELECT_ALL")
          categoryCSV += ',' + category?.value;
        }
    })
    categoryCSV = categoryCSV.substr(1);
    if (!all) categoryCSV = currCategory;
    console.log(categoryCSV)
    createMessage(
      {
        resource: 'posts',
        values: {
          description: values?.message,
          media: files,
          categories: categoryCSV,
          user: userId,
          temple: templeId,
          //fields can be mapped in future
        }
      }
    )
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>कुल दुकाने: <b>{totalCount}</b></p>
        <Button onClick={() => showDrawer()}>
          Message In Multipe Categories
        </Button>
      </div>
      <Table dataSource={types} columns={typeColumns} rowKey="id" />
      <Drawer title="Message" onClose={onClose} open={open} width={500}>
        <Form form={form} onFinish={handleOnFinish}>
          <Form.Item name="categories">
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ width: "5rem", paddingTop: "1rem" }}>Send To</p>
              {all ? (
                <Select
                  mode="multiple"
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select Categories to deliver to.."
                  value={selectedCategorys}
                  onChange={handleChange}
                  options={options}
                />
              ) : (
                <Input disabled={true} value={currCategory} />
              )}
            </div>
          </Form.Item>
          <Form.Item name="attachments">
            <Upload
              name="files"
              action={`${API_URL}/api/upload`}
              headers={{
                Authorization: `Bearer ${localStorage.getItem(
                  "strapi-jwt-token"
                )}`,
              }}
              accept="*"
            >
              <Button icon={<UploadOutlined />}>Attach File</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="message">
            <TextArea
              showCount
              maxLength={200}
              //onChange={onChange}
              placeholder="Type your message here......"
              style={{
                height: 200,
                resize: "none",
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Send</Button>
          </Form.Item>
        </Form>
      </Drawer>
      <Modal
        visible={selectedUsers !== null}
        onCancel={closeDialog}
        footer={null}
      >
        <Table dataSource={selectedUsers} columns={columns} rowKey="id" />
      </Modal>
    </div>
  );
};

export default ShopTable;

