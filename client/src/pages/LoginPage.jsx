import React, { useContext, useEffect, useState } from "react";
import LoginForm from "../components/admin/LoginForm";
import { AuthContext } from "../context/AuthContext";

import { Navigate, useNavigate } from "react-router";

export default function LoginPage() {
  const { login, isAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [validationError, setValidationError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.username == "" || formData.password == "") {
      setValidationError("Username & Password required");
      return;
    }

    setValidationError("");

    const success = await login(formData);

    if (success) {
      navigate("/admin");
    } else {
      setValidationError("wrong username or password");
    }
  }

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  if (isAuth) return <Navigate to="/admin" replace />;

  return (
    <LoginForm
      onsubmit={handleSubmit}
      onchange={handleOnChange}
      formdata={formData}
      error={validationError}
    />
  );
}
