import { Avatar, Rate, Space, Table, Typography, Modal } from "antd";
import { useEffect, useState } from "react";
import { getPaidOrders, getShippers, chooseShipper } from "../../../API";
import moment from "moment";

function PaidOrder() {
  const [loading, setLoading] = useState(false);
  const [loadingShipper, setLoadingShipper] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [shippers, setShippers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedShipper, setSelectedShipper] = useState(null);
  // const [shippers, setListShipper] = useState([]);
  useEffect(() => {
    setLoading(true);
    getPaidOrders().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    loadShippers();
  }, []);
  console.log(shippers);
  // const handleChooseShipper = (CustomerOrderId) => {
  // console.log(CustomerOrderId);
  // };
  const handleChooseShipper = (CustomerOrderId) => {
    setSelectedOrderId(CustomerOrderId);
    loadShippers();
    setModalVisible(true);
  };

  // const loadShippers = () => {
  //   setLoadingShipper(true);
  //   // getShippers().then((res) => {
  //   //   setShippers(res.data);
  //   //   setLoadingShipper(false);
  //   // });
  // };

  const loadShippers = () => {
    setLoadingShipper(true);
    getShippers()
      .then((res) => {
        setShippers(res.data);
        setLoadingShipper(false);
      })
      .catch((error) => {
        console.error("Error loading shippers:", error);
        setLoadingShipper(false);
      });
  };

  const handleSelectShipper = (shipperId) => {
    setSelectedShipper(shipperId);
    setModalVisible(false);
    if (selectedOrderId && shipperId) {
      chooseShipper(selectedOrderId, shipperId)
        .then((response) => {
          if (response.ok) {
            console.log("Shipper chosen successfully.");
            // Update the dataSource with the selected shipper's name
            const updatedDataSource = dataSource.map((item) => {
              if (item.CustomerOrderId === selectedOrderId) {
                return {
                  ...item,
                  ShipperId: shipperId,
                };
              }
              return item;
            });
            setDataSource(updatedDataSource);
          } else {
            console.error("Failed to choose shipper:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error choosing shipper:", error);
        });
    } else {
      console.error("Selected order ID or shipper ID is missing.");
    }
  };
  console.log("Selected: ", selectedShipper);

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
              render: (CustomerOrderId, record) => {
                const { ShipperId } = record;
                if (ShipperId !== null) {
                  const shipper = shippers.find(
                    (shipper) => shipper.ShipperId === ShipperId
                  );
                  if (shipper) {
                    return <span>{shipper.Name}</span>;
                  }
                }
                return (
                  <span>
                    <button
                      onClick={() => handleChooseShipper(CustomerOrderId)}
                    >
                      Chọn Shipper
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
        <div className="max-h-40 overflow-y-auto">
          {/* {loadingShipper ? (
          <p>Loading shippers...</p>
        ) : (
          <select>
            {shippers.map((shipper) => (
              <li key={shipper.id}>{shipper.Name}</li>
            ))}
          </select>
        )} */}
          {Array.isArray(shippers) && shippers.length > 0 ? (
            shippers.map((shipper, index) => (
              <div
                key={index}
                class="block py-2 px-4 text-gray-800 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectShipper(shipper.ShipperId)}
              >
                {shipper.Name}
              </div>
            ))
          ) : (
            <div>No syllabus data available.</div>
          )}
        </div>
      </Modal>
    </Space>
  );
}
export default PaidOrder;
