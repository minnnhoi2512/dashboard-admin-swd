import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPaidOrders, getShippers } from "../../API";
import moment from "moment";
function PaidOrder() {
  const [loading, setLoading] = useState(false);
  // const [loadingShipper, setLoadingShipper] = useState(false);
  // const [dataSource, setDataSource] = useState([]);
  // const [shippers, setListShipper] = useState([]);
  // useEffect(() => {
  //   setLoading(true);
  //   getPaidOrders().then((res) => {
  //     setDataSource(res);
  //     setLoading(false);
  //   });
  //   getShippers().then((res) => {
  //     setDataSource(res);
  //     setLoadingShipper(false);
  //   });
  // }, []);
  const handleChooseShipper = (CustomerOrderId) => {
    console.log(CustomerOrderId);
  };
  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>PaidOrder</Typography.Title>
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
              title: "Customer",
              dataIndex: "Name",
            },
            {
              title: "Product Price",
              dataIndex: "Total",
            },
            {
              title: "ShippingPrice",
              dataIndex: "ShippingPrice",
            },
            {
              title: "Date",
              dataIndex: "OrderDate",
              render: (OrderDate) => {
                const formattedDate = moment(OrderDate).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Status",
              dataIndex: "Status",
            },
            {
              title: "To",
              dataIndex: "BuildingName",
            },
            {
              title: "Shipper",
              dataIndex: "ShipperId",
              render: (ShipperId) => {
                let text = "";
                if (ShipperId === null) {
                  text = "NOT YET";
                }
                return <span>{text}</span>;
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
                      Choose Shipper
                    </button>
                  </span>
                );
              },
            },
          ]}
          // dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </div>
    </Space>
  );
}
export default PaidOrder;
