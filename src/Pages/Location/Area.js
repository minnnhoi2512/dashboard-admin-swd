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
        Khu vực
      </Typography.Title>

      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "ID Tòa",
              dataIndex: "BuildingId",
            },
            {
              title: "Tên khu vực",
              dataIndex: "AreaName",
            },

            {
              title: "Tòa",
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
