import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getListOrderStore } from "../../API";
import moment from "moment";
function OrderOfCustomer() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const storeId = localStorage.getItem("storeId");
    setLoading(true);
    getListOrderStore(storeId).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        setDataSource(res.data);
      } else {
        setDataSource(null);
      }
      setLoading(false);
    });
  }, []);

  //   const getStatusColor = (status) => {
  //     if (status === "Pending") {
  //       return "yellow";
  //     } else if (status === "Canceled") {
  //       return "red";
  //     } else if (status === "Success") {
  //       return "green";
  //     } else {
  //       return "";
  //     }
  //   };

  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Đơn hàng</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "#",
              dataIndex: "",
            },
            {
              title: "Tên sản phẩm",
              dataIndex: "Name",
            },
            {
              title: "Hình ảnh",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Số lượng",
              dataIndex: "ProductQuantity",
            },
            {
              title: "Ngày",
              dataIndex: "OrderDate",
              render: (OrderDate) => {
                const formattedDate = moment(OrderDate).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
                return <span>{formattedDate}</span>;
              },
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
export default OrderOfCustomer;
