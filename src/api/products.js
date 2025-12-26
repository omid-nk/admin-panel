import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// GET Api
export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const getCategories = (category) =>
  api.get(`/products/category/${category}`);
export const getCarts = () => api.get("/carts");
export const getCartById = (id) => api.get(`/carts/${id}`);
export const getUsers = () => api.get("/users");
export const getUserById = (id) => api.get(`/users/${id}`);

// POST Api
export const addProduct = (productData) => api.post("/products", productData);

// PUT Api
export const updateProduct = (id, productData) =>
  api.put(`/products/${id}`, productData);
export const patchProduct = (id, productData) =>
  api.patch(`/products/${id}`, productData);

// DELETE Api
export const deleteProduct = (id) => api.delete(`/products/${id}`);
