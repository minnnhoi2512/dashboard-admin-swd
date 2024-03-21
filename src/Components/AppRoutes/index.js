import { Route, Routes } from "react-router-dom";
import AccountManager from "../../Pages/Customers/AccountManager";
import Dashboard from "../../Pages/Dashboard/Dashboard";

import Area from "../../Pages/Location/Area";

import Brand from "../../Pages/Product/Brand";
import StoreDetail from "../../Pages/Product/Store/StoreDetail";
import Product from "../../Pages/Product/Product";
import PendingOrder from "../../Pages/Orders/PendingOrder";
import PaidOrder from "../../Pages/Orders/PaidOrder";
import CanceledOrder from "../../Pages/Orders/CanceledOrder";
import Deposit from "../../Pages/Money/Deposit";
import Transaction from "../../Pages/Money/Transaction";
import Wallet from "../../Pages/Money/Wallet";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/area" element={<Area />}></Route>

      <Route path="/accounts" element={<AccountManager />}></Route>
      <Route path="/brand" element={<Brand />}></Route>
      <Route path="/store_detail" element={<StoreDetail />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/pending_order" element={<PendingOrder />}></Route>
      <Route path="/canceled_order" element={<CanceledOrder />}></Route>
      <Route path="/paid_order" element={<PaidOrder />}></Route>
      <Route path="/deposit" element={<Deposit />}></Route>
      <Route path="/transaction" element={<Transaction />}></Route>
      <Route path="/wallet" element={<Wallet />}></Route>
    </Routes>
  );
}
export default AppRoutes;
