import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";

function Brand() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Brand</Typography.Title>
      <div className="flex justify-center ">
        <Table
          loading={loading}
          columns={[
            {
              title: "Image",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Name",
              dataIndex: "Name",
            },
            {
              title: "Quantity",
              dataIndex: "StoreQuantity",
            },
            {
              title: "Status",
              dataIndex: "Status",
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
export default Brand;
