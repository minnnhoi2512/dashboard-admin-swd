import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";

function Deposit() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Deposit</Typography.Title>
      <div className="flex justify-center ">
        <Table
          loading={loading}
          columns={[
            {
              title: "No",
              dataIndex: "DepositId",
            },
            {
              title: "Amount",
              dataIndex: "Amount",
            },
            {
              title: "Method",
              dataIndex: "Method",
            },

            {
              title: "Status",
              dataIndex: "Status",
            },
            {
              title: "Date",
              dataIndex: "Date",
            },
            {
              title: "Wallet",
              dataIndex: "Wallet",
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
export default Deposit;
