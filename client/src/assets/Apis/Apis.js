import axios from "axios";

const API = "http://localhost:5000/api";

// ======================
// Register User
// ======================
export const registerUserApi = async (formData) => {
  try {
    const res = await axios.post(`${API}/register`, formData);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: true, message: error.response.data.message };
    }
    return { error: true, message: "Server not responding" };
  }
};

// ======================
// Login User
// ======================
export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API}/login`, credentials);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: true, message: error.response.data.error };
    }
    return { error: true, message: "Server not responding" };
  }
};
