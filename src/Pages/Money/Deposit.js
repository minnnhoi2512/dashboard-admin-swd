import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getDeposit} from "../../API";

function Deposit() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getDeposit().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Deposit</Typography.Title>
      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
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
              render : (Status)=>{
                let text = "";
                let textColorClass = "";

                if (Status != 1) {
                  text = "Thất bại";
                  textColorClass = "text-red-500"; // Chữ màu đỏ
                } else {
                  text = "Thành công";
                  textColorClass = "text-green-500"; // Chữ màu xanh
                }

                return <span className={textColorClass}>{text}</span>;
              }
            },
            {
              title: "Date",
              dataIndex: "Date",
            },
            {
              title: "To",
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
export default Deposit;
