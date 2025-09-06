import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../ui/Nav";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Nav />
      <div className="w-full mt-16 flex-1 pb-14">
        <Outlet />
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
