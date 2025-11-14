import api from "../api/axios";

export const loginService = async (payload) => {
  const response = await api.post("/admin/login", payload);
  return response;
};

export const logoutService = async () => {
  const response = await api.post("/admin/logout");
  return response;
};

export const verifyAuthService = async () => {
  const response = await api.get("/admin/verify");
  return response;
};
