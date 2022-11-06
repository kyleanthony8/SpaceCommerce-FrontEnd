import api from "./apiConfig.js";

export const getImages = async () => {
  try {
    const response = await api.get("/images");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getImage = async (id) => {
  try {
    const response = await api.get(`/images/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createImage = async (data) => {
  try {
    const response = await api.post("/images", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateImage = async (id, data) => {
  try {
    const response = await api.put(`/images/id/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await api.delete(`/images/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
