import api from "../api/axios";

export const getAllRecord = async () => {
  const response = await api.get("/allrecord");
  return response.data;
};
export const getsingleRecord = async (id) => {
  const response = await api.get(`/singlerecord/${id}`);
  return response.data;
};

export const createRecord = async (payload) => {
  const response = await api.post("/admin/record/create", payload);
  return response.data;
};
