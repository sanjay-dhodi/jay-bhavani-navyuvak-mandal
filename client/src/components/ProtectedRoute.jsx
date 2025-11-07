import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const token = true;

  return <>{token ? children : <Navigate to="/login" replace />}</>;
}
