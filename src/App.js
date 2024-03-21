import "./App.css";
import AppFooter from "./Components/AppFooter";
import NavHeader from "./Components/AppHeader/NavHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu/Menu";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-full">
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>

      <NavHeader />
      <div className="SideMenuAndPageContent flex flex-1  ">
        <SideMenu></SideMenu>

        <div className="bg-gray-200 w-full flex justify-center items-center ">
          <PageContent />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;
