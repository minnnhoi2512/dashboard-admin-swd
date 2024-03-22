import "./App.css";
import AdminPage from "./Pages/AdminPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Area from "./Pages/Location/Area";
import Login from "./Pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Wallet from "./Pages/Money/Wallet";
import Transaction from "./Pages/Money/Transaction";
import Deposit from "./Pages/Money/Deposit";
import PaidOrderNoShipper from "./Pages/Orders/PaidOrder/PaidOrderNoShipper";
import PaidOrder from "./Pages/Orders/PaidOrder/PaidOrder";
import SuccessOrder from "./Pages/Orders/SuccessOrder";
import CanceledOrder from "./Pages/Orders/CanceledOrder";
import PendingOrder from "./Pages/Orders/PendingOrder";
import Product from "./Pages/Product/Product";
import StoreDetail from "./Pages/Product/Store/StoreDetail";
import Brand from "./Pages/Product/Brand";
import AccountManager from "./Pages/Customers/AccountManager";
import StorePage from "./Pages/StorePage";
import DashboardStore from "./Pages/Dashboard/DashboardStore";
import ProductInStore from "./Pages/Product/Store/ProductInStore";
import OrderOfCustomer from "./Pages/Orders/OrderOfCustomer";
import StoreTransaction from "./Pages/Money/StoreTransaction";

function App() {
  return (
    <div className="App w-full h-full">
      <Routes>
        <Route path="/" element={<Login />} />

        {/* admin */}
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/area" element={<Area />}></Route>
          <Route path="/admin/accounts" element={<AccountManager />}></Route>
          <Route path="/admin/brand" element={<Brand />}></Route>
          <Route path="/admin/store_detail" element={<StoreDetail />}></Route>
          <Route path="/admin/product" element={<Product />}></Route>
          <Route path="/admin/pending_order" element={<PendingOrder />}></Route>
          <Route
            path="/admin/canceled_order"
            element={<CanceledOrder />}
          ></Route>
          <Route path="/admin/success_order" element={<SuccessOrder />}></Route>
          <Route path="/admin/paid_order" element={<PaidOrder />}></Route>
          <Route
            path="/admin/paid_order_noshipper"
            element={<PaidOrderNoShipper />}
          ></Route>
          <Route path="/admin/deposit" element={<Deposit />}></Route>
          <Route path="/admin/transaction" element={<Transaction />}></Route>
          <Route path="/admin/wallet" element={<Wallet />}></Route>
        </Route>

        {/* Store */}
        <Route path="/store" element={<StorePage />}>
          <Route index element={<Navigate to="/store/dashboard_store" />} />
          <Route path="/store/dashboard_store" element={<DashboardStore />} />

          <Route
            path="/store/product_in_store"
            element={<ProductInStore />}
          ></Route>
          <Route
            path="/store/order_customer"
            element={<OrderOfCustomer />}
          ></Route>

          <Route
            path="/store/store_transaction"
            element={<StoreTransaction />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
