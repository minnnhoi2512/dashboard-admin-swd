import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    account: false,
    location: false,
    product: false,
    order: false,
    money: false,
    store: false,
  });

  const toggleDropdown = (section) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="p-8 bg-white h-full w-[306px] ">
      <Link to="/dashboard">
        <h1 className="text-lg font-semibold mb-4 ml-8">Dashboard</h1>
      </Link>

      <div className="space-y-4">
        {/* Account Manager */}
        <div
          className={`bg-gray-200 p-4 rounded shadow ${
            isDropdownOpen.account ? "bg-blue-300" : ""
          }`}
        >
          <h2
            className={`text-lg font-semibold cursor-pointer ${
              isDropdownOpen.account ? "mb-2 text-white" : ""
            }`}
            onClick={() => toggleDropdown("account")}
          >
            Account Manager
          </h2>
          {isDropdownOpen.account && (
            <ul className="ml-4">
              <Link to="/accounts" className="text-blue-700">
                Account
              </Link>
            </ul>
          )}
        </div>

        {/* Location */}
        <div
          className={`bg-gray-200  p-4 rounded shadow ${
            isDropdownOpen.location ? "bg-blue-300" : ""
          }`}
        >
          <h2
            className={`text-lg font-semibold cursor-pointer ${
              isDropdownOpen.location ? "mb-2 text-white" : ""
            }`}
            onClick={() => toggleDropdown("location")}
          >
            Location
          </h2>
          {isDropdownOpen.location && (
            <div>
              <div>
                <Link to="/area" className="text-blue-700">
                  Area
                </Link>
              </div>
              <div>
                <Link to="/building" className="text-blue-700">
                  Building
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Product */}
        <div
          className={`bg-gray-200  p-4 rounded shadow ${
            isDropdownOpen.product ? "bg-blue-300" : ""
          }`}
        >
          <h2
            className={`text-lg font-semibold cursor-pointer ${
              isDropdownOpen.product ? "mb-2 text-white" : ""
            }`}
            onClick={() => toggleDropdown("product")}
          >
            Product
          </h2>
          {isDropdownOpen.product && (
            <ul className="ml-4">
              <li>
                <Link to="/brand" className="text-blue-700">
                  Brand
                </Link>
              </li>
              <li>
                <div
                  className={`  cursor-pointer text-blue-700 ${
                    isDropdownOpen.store ? "mb-2 text-red-700" : ""
                  }`}
                  onClick={() => toggleDropdown("store")}
                >
                  Store
                </div>
                {isDropdownOpen.store && (
                  <ul className="ml-4">

                  </ul>
                )}
              </li>

              <li>
                <Link to="/product" className="text-blue-700">
                  Product
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Order */}
        <div
          className={`bg-gray-200  p-4 rounded shadow ${
            isDropdownOpen.order ? "bg-blue-300" : ""
          }`}
        >
          <h2
            className={`text-lg font-semibold cursor-pointer ${
              isDropdownOpen.order ? "mb-2 text-white" : ""
            }`}
            onClick={() => toggleDropdown("order")}
          >
            Order
          </h2>
          {isDropdownOpen.order && (
            <ul className="ml-4">
              <li>
                <Link to="/pending_order" className="text-blue-700">
                  Pending Order
                </Link>
              </li>
              <li>
                <Link to="/paid_order" className="text-blue-700">
                  Paid Order
                </Link>
              </li>
              <li>
                <Link to="/canceled_order" className="text-blue-700">
                  Canceled Order
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Money */}
        <div
          className={`bg-gray-200  p-4 rounded shadow ${
            isDropdownOpen.money ? "bg-blue-300" : ""
          }`}
        >
          <h2
            className={`text-lg font-semibold cursor-pointer ${
              isDropdownOpen.money ? "mb-2  text-white" : ""
            }`}
            onClick={() => toggleDropdown("money")}
          >
            Money
          </h2>
          {isDropdownOpen.money && (
            <ul className="ml-4">
              <li>
                <Link to="/deposit" className="text-blue-700">
                  Deposit
                </Link>
              </li>
              <li>
                <Link to="/transaction" className="text-blue-700">
                  Transaction
                </Link>
              </li>
              <li>
                <Link to="/wallet" className="text-blue-700">
                  Wallet
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
