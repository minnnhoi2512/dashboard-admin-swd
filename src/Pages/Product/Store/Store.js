import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getStore } from "../../../API";
import { useNavigate } from "react-router-dom";

function Store() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const getStatusColor = (status) => {
    if (status === "Pending") {
      return "yellow";
    } else if (status === "U") {
      return "red";
    } else if (status === "A") {
      return "green";
    } else {
      return "";
    }
  };

  useEffect(() => {
    setLoading(true);
    getStore().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  const handleRowClick = (record) => {
    // Navigate to store detail page with record.StoreId
    navigate(`/admin/store/${record.StoreId}?store=${record.StoreName}`);
  };

  return (
    <Space size={20} direction="vertical" className="items-center">
      <Typography.Title level={4}>Tất cả cửa hàng</Typography.Title>
      <div className="flex justify-center">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "#",
              dataIndex: "StoreId",
            },
            {
              title: "Tên cửa hàng",
              dataIndex: "StoreName",
            },
            {
              title: "Địa chỉ",
              dataIndex: "Address",
            },
            {
              title: "Nhãn hàng",
              dataIndex: "BrandName",
            },
            {
              title: "Thuộc khu vực",
              dataIndex: "AreaName",
            },
            {
              title: "Hình ảnh",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Trạng thái",
              dataIndex: "Status",
              render: (status) => (
                <span style={{ color: getStatusColor(status) }}>Hoạt động</span>
              ),
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        ></Table>
      </div>
    </Space>
  );
}

export default Store;
