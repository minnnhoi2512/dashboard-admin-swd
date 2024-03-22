import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Space,
  Table,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { getBuilding } from "../../API";

function Area() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
    getBuilding().then((res) => {
      setDataSource(res);
      console.log(res);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={10} direction="vertical">
      <Typography.Title level={4} className="text-center mt-2">
        Building
      </Typography.Title>
      {/* <div className="flex justify-end mr-12">
        <Button
          type="primary"
          className="bg-blue-700 w-[70px] h-[30px] rounded-md"
          onClick={handleButtonClick}
        >
          Add
        </Button>
      </div>
      <Modal
        title="Add Area"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            label="AreaName"
            name="AreaName"
            rules={[
              {
                required: true,
                message: "Please enter the name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bulding"
            name="Bulding"
            rules={[
              {
                required: true,
                message: "Please enter the Bulding",
              },
              {
                type: "Bulding",
                message: "Please enter a valid Bulding",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </Modal> */}
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "BuildingID",
              dataIndex: "BuildingId",
            },
            {
              title: "AreaName",
              dataIndex: "AreaName",
            },

            {
              title: "Building",
              dataIndex: "BuildingName",
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </div>
    </Space>
  );
}
export default Area;
