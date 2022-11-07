import api from "./apiConfig.js";

export const getSpaceItems = async () => {
  try {
    const response = await api.get("/spaceItems");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSpaceItem = async (id) => {
  try {
    const response = await api.get(`/spaceItems/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSpaceItem = async (data) => {
  try {
    const response = await api.post("/spaceItems", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSpaceItem = async (id, data) => {
  try {
    const response = await api.put(`/spaceItems/id/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSpaceItem = async (id) => {
  try {
    const response = await api.delete(`/spaceItems/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};