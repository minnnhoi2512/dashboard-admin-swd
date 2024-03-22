import { Button, Form, Input, Modal, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAccounts } from "../../API";

function AccountManager() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (values) => {
    // Process the form data and create a new account
    console.log("Form submitted:", values);
    // ...
    // After successfully creating the account, you can reset the form and hide the modal
    setShowModal(false);
  };

  useEffect(() => {
    setLoading(true);
    getAccounts().then((res) => {
      setDataSource(res);
      setLoading(false);
      console.log(res);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} className="text-center mt-5">
        Account
      </Typography.Title>
      <div className="flex justify-end mr-12">
        <Button
          type="primary"
          className="bg-blue-700 w-[70px] h-[30px] rounded-md"
          onClick={handleButtonClick}
        >
          Create account
        </Button>
      </div>
      <Modal
        title="Add Account"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter the name",
              },
            ]}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            type="password"
            rules={[
              {
                required: true,
                message: "Please require password",
              }
            ]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div className="flex justify-center">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "#",
              dataIndex: "id",
            },
            {
              title: "Username",
              dataIndex: "username",
            },
            {
              title: "Password",
              render: () => {
                return <span>********</span>;
              },
            },
            {
              title: "Role",
              dataIndex: "role",
              render: (role) => {
                let roleText = "";
                if (role === 1) {
                  roleText = "STORE";
                } else if (role === 2) {
                  roleText = "STAFF";
                } else if (role === 3) {
                  roleText = "ADMIN";
                }

                return <span>{roleText}</span>;
              },
            },
            {
              title: "Create At",
              dataIndex: "createAt",
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 8,
          }}
        ></Table>
      </div>
    </Space>
  );
}

export default AccountManager;
