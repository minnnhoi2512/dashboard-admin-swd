import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPaidOrders, getShippers } from "../../../API";
import moment from "moment";
import { Link } from "react-router-dom";

function PaidOrderNoShipper() {
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
    <Space size={20} direction="vertical" className="  ">
      <Typography.Title level={4} className="text-center mt-8">
        PaidOrder
      </Typography.Title>
      <div>
        <Link to="/paid_order">
          <button className="rounded-md bg-blue-400 w-[100px] h-[30px]">
            HaveShipper
          </button>
        </Link>

        <button className="rounded-md ml-5 bg-blue-400 w-[100px]  h-[30px]">
          NoShipper
        </button>
      </div>

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
              title: "ShipperName",
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
export default PaidOrderNoShipper;
