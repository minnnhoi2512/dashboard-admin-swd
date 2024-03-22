import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  FullscreenOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  };
}

const items = [
  getItem(
    "Bảng số liệu",
    "dashboard",
    <PieChartOutlined />,
    null,
    "link",
    "/store/dashboard_store"
  ),

  getItem("Sản phẩm", "productInStore", <AppstoreOutlined />, [
    getItem(
      "Sản phẩm trong cửa hàng",
      "product",
      null,
      null,
      "link",
      "/store/product_in_store"
    ),
  ]),
  getItem("Đơn hàng của khách", "OrderOfCustomer", <MailOutlined />, [
    getItem(
      "Đơn hàng",
      "OrderOfCustomer",
      null,
      null,
      "link",
      "/store/order_customer"
    ),
  ]),
  getItem("Tiền", "money", <PieChartOutlined />, [
    getItem(
      "Giao dịch",
      "transaction",
      null,
      null,
      "link",
      "/store/store_transaction"
    ),
  ]),
];

const MenuStore = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    accountManagement: false,
    location: false,
    product: false,
    order: false,
    money: false,
  });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleDropdownClick = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="bg-black h-screen  ">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["dashboard"]}
        defaultOpenKeys={["accountManagement"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {items.map((item) => {
          if (item.children) {
            return (
              <Menu.SubMenu
                key={item.key}
                icon={item.icon}
                title={item.label}
                onTitleClick={() => handleDropdownClick(item.key)}
                open={isDropdownOpen[item.key]}
              >
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    <Link to={child.path}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          } else if (item.type === "link") {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          } else {
            return null;
          }
        })}
      </Menu>
    </div>
  );
};

export default MenuStore;
