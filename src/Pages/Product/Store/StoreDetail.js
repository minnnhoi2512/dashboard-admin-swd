import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getStore } from "../../../API";

function StoreDetail() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getStore().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Store</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "No",
              dataIndex: "ProductInStoreId",
            },
            {
              title: "StoreName",
              dataIndex: "StoreName",
            },
            {
              title: "Address",
              dataIndex: "Address",
            },

            {
              title: "NameProduct",
              dataIndex: "Name",
            },
            {
              title: "Image",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Origin",
              dataIndex: "Origin",
            },
            {
              title: "MfgDate",
              dataIndex: "MfgDate",
            },
            {
              title: "ExpDate",
              dataIndex: "ExpDate",
            },
            {
              title: "CategoryName",
              dataIndex: " CategoryName",
            },
            {
              title: "Quantity",
              dataIndex: " Quantity",
            },
            {
              title: "Status",
              dataIndex: " Status",
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
export default StoreDetail;
