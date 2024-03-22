import React from "react";
import NavStore from "../Components/AppHeader/NavStore";

import { Outlet } from "react-router-dom";

import MenuStore from "../Components/SideMenu/MenuStore";

export default function StorePage() {
  return (
    <div className="overflow-y-hidden ">
      <NavStore />
      <div className="flex w-full">
        <div>
          <MenuStore />
        </div>

        <div className=" flex mx-auto mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
