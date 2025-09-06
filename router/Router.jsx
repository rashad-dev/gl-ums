import { Route, Routes } from "react-router-dom";

import AppLayout from "../src/components/layout/AppLayout";
import Products from "../src/pages/Products";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Profile from "../src/pages/Profile";
import NotFound from "../src/pages/PageNotFound";
import PrivateRoutes from "../src/components/protect/ProtectRoute";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes redirectTo="/login" />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
