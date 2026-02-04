import axios from "axios";

const API = "http://localhost:5000/api";

// ***************
// ** Product Category **
// ***************

// Create New Product category
export const AddNewProductCategoryApi = async (formData) => {
    try {
        const response = await axios.post(`${API}/create`, formData);
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                error: true,
                message: error.response.data.message
            }
        }
        return {
            error: true,
            message: "Server not responding"
        };
    }
};