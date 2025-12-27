import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data || "Error");
  }
};
