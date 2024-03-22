import React from "react";

import SideMenu from "../Components/SideMenu/Menu";

import AppHeader from "../Components/AppHeader/NavHeader";
import { Outlet } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="overflow-y-hidden ">
      <AppHeader />
      <div className="flex w-full">
        <div>
          <SideMenu />
        </div>

        <div className=" flex mx-auto mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
