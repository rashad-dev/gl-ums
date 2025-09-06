import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoutes = ({ redirectTo = "/login", role }) => {
  const auth = getAuth();
  const firebaseUser = auth.currentUser;
  const localUser = JSON.parse(localStorage.getItem("user"));

  // If not logged in
  if (!firebaseUser || !localUser) {
    return <Navigate to={redirectTo} replace />;
  }

  // If role is specified and doesn't match
  if (role && localUser.role !== role) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
