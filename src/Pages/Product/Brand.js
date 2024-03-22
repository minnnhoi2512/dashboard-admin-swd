import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getBrands } from "../../API";

function Brand() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBrands().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Thương hiệu</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "Ảnh",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Tên",
              dataIndex: "Name",
            },
            {
              title: "Số lượng",
              dataIndex: "StoreQuantity",
            },
            {
              title: "Trạng thái",
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
