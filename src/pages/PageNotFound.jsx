// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 p-8 md:p-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Animated floating shapes */}
        <svg className="absolute top-0 left-0 w-64 h-64 opacity-20 animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#8b5cf6" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-20 animate-pulse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="#ec4899" strokeWidth="2" fill="none" />
        </svg>

        {/* Left: 404 Text */}
        <div className="text-center md:text-left z-10">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg md:text-xl">
            The page you are looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-shadow shadow-lg"
          >
            Go Home
          </Button>
        </div>

        {/* Right: Minimal SVG illustration */}
        <div className="w-48 md:w-64 h-48 md:h-64 z-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="#8b5cf6" opacity="0.1">
              <animate attributeName="r" values="80;85;80" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="50" fill="#ec4899" opacity="0.1">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="6s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
