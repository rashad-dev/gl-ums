// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const links = [
    { name: "Category", path: "category" },
    { name: "Brand", path: "brand" },
    { name: "Contact", path: "contact" },
    { name: "FAQ's", path: "faqs" },
  ];

  return (
    <nav className="w-full bg-white border-b- border-baseGray shadow-sm">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold text-primary italic cursor-pointer " onClick={()=>{navigate("/")}}>
              FashionHub
            </h1>
            <div className="hidden md:flex space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium text-primary hover:text-gray-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div className="relative bg-[#f5f2ef] p-2 rounded-full">
              <FiShoppingBag className="w-5 h-5 text-primary" />
              <span className="absolute -top-1 -right-1 text-xs bg-blue-900 text-white rounded-full px-1">
                3
              </span>
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={()=>{navigate("/profile")}}>
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="hidden sm:block text-sm">
                <p className="text-gray-500">Good Morning!</p>
                <p className="font-semibold text-primary">Scarlet Johnson</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <FiX className="w-6 h-6 text-primary" />
                ) : (
                  <FiMenu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="space-y-2 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block text-sm font-medium text-primary hover:text-gray-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
