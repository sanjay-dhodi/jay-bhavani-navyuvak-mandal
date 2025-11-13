import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  loginService,
  logoutService,
  verifyAuthService,
} from "../services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const response = await verifyAuthService();
      if (response.status === 200) {
        setIsAuth(true);
      }
    } catch (error) {
      if (error.response) {
        setIsAuth(false);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function login(payload) {
    try {
      const response = await loginService(payload);
      if (response.status === 200) {
        setIsAuth(true);
        return true;
      }
    } catch (error) {
      if (error.response) {
        setIsAuth(false);
        return false;
      }
    }
  }

  async function logout() {
    try {
      const response = await logoutService();

      if (response.status === 200) {
        setIsAuth(false);
        return true;
      }
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      setIsAuth(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  const data = { isLoading, isAuth, login, logout };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
