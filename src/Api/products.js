
import api from "./api";

// Get all products
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;  
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

// Get product by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};
