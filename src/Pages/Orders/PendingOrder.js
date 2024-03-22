import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPendingOrder } from "../../API";
import moment from "moment";
function PendingOrder() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPendingOrder().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Pending</Typography.Title>
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
              dataIndex: "Customer_Name",
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
export default PendingOrder;
