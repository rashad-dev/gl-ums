import { Route, Routes } from "react-router-dom";

import AppLayout from "../src/components/layout/AppLayout";
import Products from "../src/pages/Products";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Profile from "../src/pages/Profile";
import NotFound from "../src/pages/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
