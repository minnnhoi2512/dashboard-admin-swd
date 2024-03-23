import { Button, Form, Input, Modal, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAccounts } from "../../API";
import moment from "moment";
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
        Tài khoản
      </Typography.Title>
      <div className="flex justify-end mr-12">
        <Button
          type="primary"
          className="bg-blue-700 w-[70px] h-[30px] rounded-md"
          onClick={handleButtonClick}
        >
          Thêm
        </Button>
      </div>
      <Modal
        title="Thêm tài khoản"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            label="Tên"
            name="name"
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
            label="Mât khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter the email",
              },
              {
                type: "password",
                message: "Please enter a valid password",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Vai trò"
            name="role"
            rules={[
              {
                required: true,
                message: "Please enter the role",
              },
              {
                type: "password",
                message: "Please enter a valid role",
              },
            ]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              Tạo tài khoản
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
              title: "Tên đăng nhập",
              dataIndex: "username",
            },
            {
              title: "Mật khẩu",
              render: () => {
                return <span>********</span>;
              },
            },
            {
              title: "Vai trò",
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
              title: "Ngày tạo",
              dataIndex: "createAt",
              render: (createAt) => {
                const formattedDate = moment.utc(createAt).format('YYYY-MM-DD HH:mm:ss');
                
                return <span>{formattedDate}</span>;
              },
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
