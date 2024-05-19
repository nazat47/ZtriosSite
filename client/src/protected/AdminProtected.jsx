import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return isAuthenticated ? children : <Navigate to={"/login"} />;
};

export default AdminProtected;
