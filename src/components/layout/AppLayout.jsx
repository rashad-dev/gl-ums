import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../ui/Nav";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      
      <Nav />
      <div className="w-full mt-16 flex-1 pb-14">
        <Outlet />
      </div>
      <footer className="bg-[#f0e5f8] w-full h-36 md:h-56 flex items-center justify-center text-5xl md:text-7xl font-bold">Footer</footer>
    </div>
  );
};

export default AppLayout;
