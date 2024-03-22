import { Avatar, Rate, Space, Table, Typography, Modal } from "antd";
import { useEffect, useState } from "react";
import { getPaidOrders, getShippers } from "../../../API";
import moment from "moment";

function PaidOrder() {
  const [loading, setLoading] = useState(false);
  const [loadingShipper, setLoadingShipper] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [shippers, setShippers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  // const [shippers, setListShipper] = useState([]);
  useEffect(() => {
    setLoading(true);
    getPaidOrders().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);
  // const handleChooseShipper = (CustomerOrderId) => {
  //   console.log(CustomerOrderId);
  // };
  const handleChooseShipper = (CustomerOrderId) => {
    setSelectedOrderId(CustomerOrderId);
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

  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="  ">
      <Typography.Title level={4} className="text-center mt-8">
        PaidOrder
      </Typography.Title>
      {/* <div>
        <Link to="/paid_order">
          <button className="rounded-md bg-blue-400 w-[100px] h-[30px]">
            HaveShipper
          </button>
        </Link>
        <Link to="/paid_order_noshipper">
          <button className="rounded-md ml-5 bg-blue-400 w-[100px]  h-[30px]">
            NoShipper
          </button>
        </Link>
      </div> */}

      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
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
                    <button
                      onClick={() => handleChooseShipper(CustomerOrderId)}
                    >
                      chọn Shipper
                    </button>
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
        footer={null}
      >
        {loadingShipper ? (
          <p>Loading shippers...</p>
        ) : (
          <select>
            {shippers.map((shipper) => (
              <li key={shipper.id}>{shipper.Name}</li>
            ))}
          </select>
        )}
      </Modal>
    </Space>
  );
}
export default PaidOrder;
