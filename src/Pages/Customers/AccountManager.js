import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAccounts, getInventory } from "../../API";

function AccountManager() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAccounts(3).then((res) => {
      setDataSource(res);
      setLoading(false);
      console.log(res)
    });
  }, []);
  /// note : cái dataIndex : để fetch data , nên
  return (
    <Space size={20} direction="vertical" className="items-center  ">
      <Typography.Title level={4}>Account</Typography.Title>
      <div className="flex justify-center ">
        <Table
          loading={loading}
          columns={[
            {
              title: "#",
              dataIndex: "id",
            },
            {
              title: "Username",
              dataIndex: "username",
            },
            {
              title: "Password",
              render: () => {
                return <span>********</span>;
              }
            },
            {
              title: "Role",
              dataIndex: "role",
              render: (role) => {
                let roleText = "";
                if (role === 1) {
                  roleText = "STORE";
                } else if (role === 2) {
                  roleText = "STAFF";
                } else if (role === 3) {
                  roleText = "ADMIN";
                }

                return <span>{roleText}</span>;
              },
            },
            {
              title: "Create At",
              dataIndex: "createAt",
            },
            // {
            //   title: "Phone",
            //   dataIndex: "phone",
            // },

            // {
            //   title: "BuildingName",
            //   dataIndex: "address",

            // },
            // {
            //   title: "AreaName",
            //   dataIndex: "phone",
            // },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 8,
          }}
        ></Table>
      </div>
    </Space>
  );
}
export default AccountManager;
