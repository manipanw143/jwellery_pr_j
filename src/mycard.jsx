import React, { useState } from "react";
import {
  Card,
  Button,
  Typography,
  Table,
  Drawer,
  Select,
  Input,
  Upload,
  Form,
  Modal,
  Spin,
  Row,
  Col,
} from "antd";
import {
  ShopOutlined,
  UserOutlined,
  MessageOutlined,
  AppstoreOutlined,
  UploadOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useTable } from "@refinedev/antd";
import { useCreate } from "@refinedev/core";

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

const API_URL = import.meta.env.VITE_APP_UPLOAD_ENDPOINT;

const styles = {
  card: {
    background: "linear-gradient(135deg, #8418f8 0%, #78a2ec 100%)",
    margin: "10px",
    border: "1px solid #e8e8e8",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
  },
  icon: {
    fontSize: "24px",
    color: "orange",
  },
  field: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  text: {
    marginLeft: "16px",
  },
  button: {
    padding: "8px 12px",
    background: "linear-gradient(135deg, #8418f8 0%, #78a2ec 100%)",
    color: "black",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    border: "1px solid orange",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  cardUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1px 10px",
    background: "linear-gradient(135deg, #8418f8 0%, #78a2ec 100%)",
    color: "white",
    position: "relative",
  },
  descriptionStyle: {
    marginRight: "2px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
  },
};

const ShopTable = ({ templeId }) => {
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [visibleCards, setVisibleCards] = useState(5);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [all, setAll] = useState(false);
  const { mutate: createMessage } = useCreate();
  const [selectedCategorys, setSelectedCategoys] = useState([]);
  const [currCategory, setCurrCategory] = useState("");
  const userId = JSON.parse(localStorage.getItem("id"));
  const [dialog, setDialog] = useState(false);
  const [type, setType] = useState("");

  const { tableProps, tableQueryResult } = useTable({
    resource: "custom-vyaapar",
    pagination: {
      mode: "off",
    },
  });

  const record = tableProps?.dataSource;

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

  let types = [];
  const data = record?.vyaaparcount
    ? record?.vyaaparcount
    : { key: "something" };
  Object.entries(data).forEach((type) => {
    types.push({
      type: type[0],
      count: type[1].count,
    });
    options.push({
      label: type[0],
      value: type[0],
    });
  });
  types = types?.sort((a, b) => b.count - a.count);

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

  const showDialog = (type) => {
    setDialog(true);
    setType(type);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "First Name", dataIndex: "firstname", key: "firstname" },
    { title: "Father", dataIndex: "father", key: "father" },
    { title: "Gotra", dataIndex: "gotra", key: "gotra" },
  ];

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
    });
    let categoryCSV = "";
    selectedCategorys?.forEach((category) => {
      if (typeof category == "string") {
        categoryCSV += "," + category;
      } else {
        if (category?.value !== "SELECT_ALL")
          categoryCSV += "," + category?.value;
      }
    });
    categoryCSV = categoryCSV.substr(1);
    if (!all) categoryCSV = currCategory;
    createMessage({
      resource: "posts",
      values: {
        description: values?.message,
        media: files,
        categories: categoryCSV,
        user: userId,
        temple: templeId,
      },
    });
  };

  if (tableQueryResult.isLoading) {
    return <Spin fullscreen />;
  }

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
          <ShopOutlined style={styles.icon} />
          <div style={styles.text}>
            <p>
              कुल दुकाने: <b>{tableProps?.dataSource?.count}</b>
            </p>
          </div>
        </div>
        <div style={styles.field}>
          <div style={styles.text}>
            <Button onClick={() => showDrawer()}>
              <MessageOutlined style={styles.icon} /> Message In Multipe
              Categories
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <Drawer title="Message" onClose={onClose} open={open} width={500}>
          <div style={styles.drawerContent}>
            <Form
              form={form}
              onFinish={handleOnFinish}
              style={styles.drawerForm}
            >
              <Form.Item name="categories">
                <div style={styles.drawerItem}>
                  <p style={styles.drawerItemLabel}>Send To</p>
                  {all ? (
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="Select Categories to deliver to..."
                      value={selectedCategorys}
                      onChange={handleChange}
                      options={options}
                    />
                  ) : (
                    <Input disabled value={currCategory} />
                  )}
                </div>
              </Form.Item>

              <Form.Item name="attachments">
                <div style={styles.drawerItem}>
                  <p style={styles.drawerItemLabel}>Attachments</p>
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
                    <Button icon={<UploadOutlined />} style={styles.button}>
                      Attach File
                    </Button>
                  </Upload>
                </div>
              </Form.Item>

              <Form.Item name="message">
                <div style={styles.drawerItem}>
                  <p style={styles.drawerItemLabel}>Message</p>
                  <TextArea
                    showCount
                    rows={4}
                    placeholder="Type your message here..."
                  />
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Drawer>
      </Card>
      <Row gutter={16}>
        {types.slice(0, visibleCards).map((type, index) => (
          <Col key={type.type} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={type.type}
              extra={<a onClick={() => openDialog(type.users)}>More</a>}
              style={styles.card}
              headStyle={{ ...styles.cardUser, padding: "0 10px" }}
            >
              <p style={styles.descriptionStyle}>
                Total Users: <b>{type.count}</b>
              </p>
              <Button
                onClick={() => showDialog(type.type)}
                style={{ ...styles.button, background: "orange" }}
              >
                Message
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      {types.length > visibleCards && (
        <Button onClick={showMoreCards} style={styles.button}>
          Show More
        </Button>
      )}
      {visibleCards > 5 && (
        <Button onClick={showLessCards} style={styles.button}>
          Show Less
        </Button>
      )}
      {selectedUsers && (
        <Modal
          title="Selected Users"
          visible={!!selectedUsers}
          onCancel={closeDialog}
          footer={null}
        >
          <Table columns={columns} dataSource={selectedUsers} rowKey="id" />
        </Modal>
      )}
    </>
  );
};

export default ShopTable;
