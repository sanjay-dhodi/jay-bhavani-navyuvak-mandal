import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoading, isAuth } = useContext(AuthContext);

  if (isLoading) return <h1>Loading...</h1>;
  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}
