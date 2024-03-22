import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getProductsInSystem } from "../../API";

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
      <Typography.Title level={4}>Sản phẩm</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "Tên sản phẩm",
              dataIndex: "Name",
            },

            {
              title: "Ảnh",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Nguồn gốc",
              dataIndex: "Origin",
            },
            {
              title: "Ngày sản xuất",
              dataIndex: "MfgDate",
            },
            {
              title: "Hạn sử dụng",
              dataIndex: "ExpDate",
            },
            {
              title: "Mục sản phẩm",
              dataIndex: "CategoryName",
            },
            {
              title: "Nguồn gốc",
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
