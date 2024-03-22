import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getTransaction } from "../../API";
import moment from "moment";
function Transaction() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTransaction().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Transaction</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "ID",
              dataIndex: "TransactionId",
            },
            {
              title: "Tổng",
              dataIndex: "Amount",
            },

            {
              title: "Trạng thái",
              dataIndex: "Status",
              render: (Status) => {
                let text = "";
                let textColorClass = "";

                if (Status != "T") {
                  text = "Trừ tiền";
                  textColorClass = "text-red-500"; // Chữ màu đỏ
                } else {
                  text = "Cộng tiền";
                  textColorClass = "text-green-500"; // Chữ màu xanh
                }

                return <span className={textColorClass}>{text}</span>;
              },
            },
            {
              title: "Ngày",
              dataIndex: "Date",
              render: (Date) => {
                const formattedDate = moment(Date).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Ví tiền",
              dataIndex: "Name_Customer",
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
export default Transaction;
