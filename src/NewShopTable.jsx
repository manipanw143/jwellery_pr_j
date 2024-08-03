import React, { useState } from "react";
import { Card, Button, Typography, Table, Drawer,  Select,
  Input,
  Upload,
  Form,
  Modal,} from "antd";
import {
  ShopOutlined,
  UserOutlined,
  MessageOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
// import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons";
import { useCreate } from "@refinedev/core";
const { TextArea } = Input;
const { Option } = Select;
const API_URL = import.meta.env.VITE_APP_UPLOAD_ENDPOINT;

const { Title } = Typography;

const styles = {
  card: {
    width: "calc(40% - 20px)",
    margin: "10px",
    border: "1px solid #e8e8e8",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
  },
  icon: {
    fontSize: "24px",
    color: "#08c",
  },
  field: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  text: {
    marginLeft: "16px",
  },
  showMoreButton: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};

const ShopTable = ({ templeId, dataSource }) => {
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [visibleCards, setVisibleCards] = useState(5);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [all, setAll] = useState(false);
  const { mutate: createMessage } = useCreate();
  const [selectedCategorys, setSelectedCategoys] = useState([]);
  const [currCategory, setCurrCategory] = useState("");
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
  
  // const columns = [
  //   { title: "ID", dataIndex: "id", key: "id" },
  //   { title: "First Name", dataIndex: "firstname", key: "firstname" },
  //   { title: "Father", dataIndex: "father", key: "father" },
  //   { title: "Gotra", dataIndex: "gotra", key: "gotra" },
  // ];

  // const typeColumns = [
  //   { title: "Type", dataIndex: "type", key: "type" },
  //   { title: "Count", dataIndex: "count", key: "count" },
  //   {
  //     title: "Actions",
  //     key: "action",
  //     render: (text, record) => (
  //       <>
  //         <Button onClick={() => openDialog(record.users)}>Users</Button>
  //         <span> </span>
  //         <Button onClick={() => showDrawer(record.type)}>Message</Button>
  //       </>
  //     ),
  //   },
  // ];
  const type = dataSource.map((item) => ({
    type: item.type,
    count: item.users.length,
  }));

  const showMoreCards = () => {
    setVisibleCards((prev) => prev + 5);
  };

  const showLessCards = () => {
    setVisibleCards(5);
  };

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
    console.log("Category Csvvvvvvvvvvvvvvvv",categoryCSV)
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
    <>
     <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
          <div style={styles.field}>
            <AppstoreOutlined style={styles.icon} />
            <div style={styles.text}>
               <p>कुल दुकाने: <b>{totalCount}</b></p>
            </div>
          </div>
          <div style={styles.field}>
           
            <div style={styles.text}>
            <Button onClick={() => showDrawer()}>
            <MessageOutlined style={styles.icon} />  Message In Multipe Categories
            </Button>
            </div>
          </div>
       
        
      </div>
       <Card>
      
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
     
       </Card>
      {type.slice(0, visibleCards).map((user, index) => (
        <Card key={index} style={styles.card}>
          <Title level={4}>Business Information</Title>
          <div style={styles.field}>
            <AppstoreOutlined style={styles.icon} />
            <div style={styles.text}>
              <strong>Business Type:</strong> {user.type}
            </div>
          </div>
          <div style={styles.field}>
            <ShopOutlined style={styles.icon} />
            <div style={styles.text}>
              <strong>Total Shops:</strong> {user.count}
            </div>
          </div>
          <div style={styles.field}>
            <UserOutlined style={styles.icon} />
            <div style={styles.text}>
              <strong>Users:</strong> {12454} {/* Replace with actual user count */}
            </div>
          </div>
          <div style={styles.field}>
            <MessageOutlined style={styles.icon} />
            <div style={styles.text}>
              <strong>Messages:</strong> {5445} {/* Replace with actual message count */}
            </div>
          </div>
        </Card>
      ))}
      {visibleCards < type.length ? (
        <div style={styles.showMoreButton}>
          <Button type="primary" onClick={showMoreCards}>
            Show More
          </Button>
          <Button style={{ marginLeft: "10px" }} onClick={showLessCards}>
            Show Less
          </Button>
        </div>
      ) : (
        <div style={styles.showMoreButton}>
          <Button type="primary" onClick={showLessCards}>
            Show Less
          </Button>
        </div>
      )}
    </>
  );
};

export default ShopTable;
