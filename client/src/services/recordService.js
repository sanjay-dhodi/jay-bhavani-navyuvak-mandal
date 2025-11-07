import api from "../api/axios";

export const getAllRecord = async () => {
  try {
    const response = await api.get("/allrecord");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getsingleRecord = async (id) => {
  try {
    const response = await api.get(`/singlerecord/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
