import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen md:px-10">
      <nav>nav</nav>
      <div className="w-full mt-16 flex-1 pb-14">
        <Outlet />
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
