import { Avatar, Rate, Space, Table, Typography, Modal, Select, Button } from "antd";
import { useEffect, useState } from "react";
import { getPaidOrders, getShippers } from "../../../API";
import moment from "moment";

const { Option } = Select;

function PaidOrder() {
  const [loading, setLoading] = useState(false);
  const [loadingShipper, setLoadingShipper] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [shippers, setShippers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [selectedShipperId, setSelectedShipperId] = useState('');

  useEffect(() => {
    setLoading(true);
    getPaidOrders().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);

  const handleChooseShipper = (CustomerOrderId) => {
    setSelectedOrderId(CustomerOrderId);
    console.log(CustomerOrderId);
    loadShippers();
    setModalVisible(true);
  };

  const loadShippers = () => {
    setLoadingShipper(true);
    getShippers().then((res) => {
      setShippers(res.data);
      setLoadingShipper(false);
    });
  };

  const handleShipperSelect = (shipperId) => {
    console.log(shipperId);
    setSelectedShipperId(shipperId);
  };

  const handleConfirmShipper = () => {
    // Handle shipper selection here
    // You can make an API call or perform any other necessary actions
    console.log("Selected Order ID:", selectedOrderId);
    console.log("Selected Shipper ID:", selectedShipperId);
    setModalVisible(false);
  };

  return (
    <Space size={20} direction="vertical" className="  ">
      <Typography.Title level={4} className="text-center mt-8">
        Đơn đã thanh toán
      </Typography.Title>

      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            // ...existing columns
            {
              title: "#",
              dataIndex: "CustomerOrderId",
            },
            {
              title: "Khách hàng",
              dataIndex: "Customer_Name",
            },
            {
              title: "Tiền sản phẩm",
              dataIndex: "Total",
            },
            {
              title: "Tiền vận chuyển",
              dataIndex: "ShippingPrice",
            },
            {
              title: "Ngày",
              dataIndex: "OrderDate",
              render: (OrderDate) => {
                const formattedDate = moment(OrderDate).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Trạng thái",
              dataIndex: "Status",
            },
            {
              title: "Mã tòa",
              dataIndex: "BuildingName",
            },
            {
              title: "ID-Shipper",
              dataIndex: "ShipperId",
              render: (ShipperId) => {
                let text = "";
                let textColorClass = "";

                if (ShipperId === null) {
                  text = "NOT YET";
                  textColorClass = "text-red-500"; // Chữ màu đỏ
                } else {
                  text = ShipperId;
                  textColorClass = "text-green-500"; // Chữ màu xanh
                }

                return <span className={textColorClass}>{text}</span>;
              },
            },
            {
              title: "Action",
              dataIndex: "CustomerOrderId",
              render: (CustomerOrderId) => {
                return (
                  <span>
                    <Button onClick={() => handleChooseShipper(CustomerOrderId)}>
                      Chọn Shipper
                    </Button>
                  </span>
                );
              },
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </div>

      <Modal
        title="Chọn Shipper"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Hủy
          </Button>,
          <Button
            key="confirm"
            type="primary"
            onClick={handleConfirmShipper}
            disabled={!selectedShipperId}
          >
            Xác nhận
          </Button>,
        ]}
      >
        {loadingShipper ? (
          <p>Loading shippers...</p>
        ) : (
          
          <Select
            style={{ width: "100%" }}
            placeholder="Tên"
            onChange={handleShipperSelect}
            value={selectedShipperId}
          >
            {shippers.map((shipper) => (
              <Option key={shipper.id} value={shipper.id}>
                {shipper.Name}
              </Option>
            ))}
          </Select>
        )}
      </Modal>
    </Space>
  );
}

export default PaidOrder;