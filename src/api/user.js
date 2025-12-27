import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getUser = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data || "Error fetching user");
  }
};
