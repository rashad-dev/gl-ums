import React from "react";
import { Route, Routes } from "react-router-dom";
import Router from "../router/Router";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={<Router />} />
    </Routes>
    </>
  );
};

export default App;
