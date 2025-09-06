import React from "react";
import { Route, Routes } from "react-router-dom";
import Router from "../router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ top: "50px" }}
      />
      <Routes>
        <Route path="/*" element={<Router />} />
      </Routes>
    </>
  );
};

export default App;
