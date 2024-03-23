import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getListProductInStore } from "../../../API";
import { useLocation,useParams } from "react-router-dom";
import moment from "moment";
function StoreDetail() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const { id } = useParams(); // Retrieve the URL parameter
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeName = searchParams.get('store');
  // const [storeName, setStoreName] = useState("");
  console.log(id)
  console.log(storeName)
  useEffect(() => {
    setLoading(true);
    getListProductInStore(id).then((res) => {
      if (res.status === 200) {
        // setStoreName(res.data[0].StoreName);
        setDataSource(res.data);
      } else {
        // setStoreName("Trống");
        setDataSource(null)
      }

      setLoading(false);
    });
  }, [id]); // Add id to the dependency array to trigger the effect when id changes

  return (
    <Space size={20} direction="vertical" className="items-center">
      <Typography.Title level={4}>
        Sản phẩm của cửa hàng: {storeName}
      </Typography.Title>
      <div className="flex justify-center">
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
              title: "Địa chỉ",
              dataIndex: "Address",
            },
            {
              title: "Sản phẩm",
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
              title: "Xuất xứ",
              dataIndex: "Origin",
            },
            {
              title: "Ngày sản xuất",
              dataIndex: "MfgDate",
              render: (MfgDate) => {
                const formattedDate = moment(MfgDate).format("YYYY-MM-DD");
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Ngày hết hạn",
              dataIndex: "ExpDate",
              render: (ExpDate) => {
                const formattedDate = moment(ExpDate).format("YYYY-MM-DD");
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Phân loại",
              dataIndex: "CategoryName",
            },
            {
              title: "Tồn kho",
              dataIndex: "Remaining",
            },
            {
              title: "Trạng thái",
              dataIndex: "Status",
              render: (status) => {
                if (status === 1) {
                  return <span style={{ color: "green" }}>Còn bán</span>;
                } else if (status === 0) {
                  return <span style={{ color: "red" }}>Ngưng bán</span>;
                } else {
                  return null;
                }
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

export default StoreDetail;
