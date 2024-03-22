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
    "/admin/dashboard"
  ),
  getItem("Quản lý tài khoản", "accountManagement", <ContainerOutlined />, [
    getItem("Tài Khoản", "account", null, null, "link", "/admin/accounts"),
  ]),
  getItem("Vị trí", "location", <DesktopOutlined />, [
    getItem("Khu vực", "area", null, null, "link", "/admin/area"),
  ]),
  getItem("Sản phẩm", "product", <AppstoreOutlined />, [
    getItem("Nhãn hàng", "brand", null, null, "link", "/admin/brand"),
    getItem("Cửa hàng", "store", null, null, "link", "/admin/store"),
    getItem("Sản phẩm", "product", null, null, "link", "/admin/product"),
  ]),
  getItem("Đơn hàng", "order", <MailOutlined />, [
    getItem(
      "Đơn hàng chờ",
      "pendingOrder",
      null,
      null,
      "link",
      "/admin/pending_order"
    ),
    getItem(
      "Đơn hàng đã thanh toán",
      "paidOrder",
      null,
      null,
      "link",
      "/admin/paid_order"
    ),
    getItem(
      "Đơn hàng bị hủy",
      "canceledOrder",
      null,
      null,
      "link",
      "/admin/canceled_order"
    ),
    getItem(
      "Đơn hàng thành công",
      "successOrder",
      null,
      null,
      "link",
      "/admin/success_order"
    ),
  ]),
  getItem("Tiền", "money", <PieChartOutlined />, [
    getItem("Tiền gửi", "deposit", null, null, "link", "/admin/deposit"),
    getItem(
      "Giao dịch",
      "transaction",
      null,
      null,
      "link",
      "/admin/transaction"
    ),
  ]),
];

const SideMenu = () => {
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

export default SideMenu;
