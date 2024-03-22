import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getProductsInSystem } from "../../API";
import moment from "moment";
function Product() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProductsInSystem().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Products</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "Product",
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
              render: (MfgDate) => {
                const formattedDate = moment(MfgDate).format(
                  "YYYY-MM-DD"
                );
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "ExpDate",
              dataIndex: "ExpDate",
              render: (ExpDate) => {
                const formattedDate = moment(ExpDate).format(
                  "YYYY-MM-DD"
                );
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Category",
              dataIndex: "CategoryName",
            },
            {
              title: "Origin",
              dataIndex: "Origin",
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
export default Product;
