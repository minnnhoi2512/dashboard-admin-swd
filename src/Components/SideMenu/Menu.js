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
    "Dashboard",
    "dashboard",
    <PieChartOutlined />,
    null,
    "link",
    "/dashboard"
  ),
  getItem("Account Manager", "accountManagement", <ContainerOutlined />, [
    getItem("Account", "account", null, null, "link", "/accounts"),
  ]),
  getItem("Location", "location", <DesktopOutlined />, [
    getItem("Area", "area", null, null, "link", "/area"),
  ]),
  getItem("Product", "product", <AppstoreOutlined />, [
    getItem("Brand", "brand", null, null, "link", "/brand"),
    getItem(
      "Store",
      "store",
      null,
      [
        getItem(
          "StoreDetail",
          "storeDetail",
          null,
          null,
          "link",
          "/store_detail"
        ),
        getItem(
          "Product in Store",
          "productInStore",
          null,
          null,
          "link",
          "/wallet"
        ),
      ],
      "subMenu"
    ),
    getItem("Product", "product", null, null, "link", "/product"),
  ]),
  getItem("Order", "order", <MailOutlined />, [
    getItem(
      "Pending Order",
      "pendingOrder",
      null,
      null,
      "link",
      "/pending_order"
    ),
    getItem("Paid Order", "paidOrder", null, null, "link", "/paid_order"),
    getItem(
      "Canceled Order",
      "canceledOrder",
      null,
      null,
      "link",
      "/canceled_order"
    ),
  ]),
  getItem("Money", "money", <PieChartOutlined />, [
    getItem("Deposit", "deposit", null, null, "link", "/deposit"),
    getItem("Transaction", "transaction", null, null, "link", "/transaction"),
    getItem("Wallet", "wallet", null, null, "link", "/wallet"),
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
    <div className="bg-black">
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
