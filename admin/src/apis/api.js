import axios from "axios";

const API = "http://localhost:5000/api";

// ***************
// ** Product Category **
// ***************

// Create New Product category
export const AddNewProductCategoryApi = async (formData) => {
    try {
        const response = await axios.post(`${API}/product-category/create`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
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

// Get Total count of product category
export const GetTotalCountProductCategoryApi = async () => {
    try {
        const response = await axios.get(
            `${API}/product-category/total-count`
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                error: true,
                message: error.response.data.message
            };
        }
        return {
            error: true,
            message: "Server not responding to get product category"
        };
    }
};

// Get All Product Category
export const GetAllProductCategoryApi = async () => {
    try {
        const response = await axios.get(
            `${API}/product-category`
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                error: true,
                message: error.response.data.message
            };
        }
        return {
            error: true,
            message: "Server not responding to get product category"
        };
    }
};

// Get Product Category By Id
export const GetProductCategorybyIdApi = async ()=>{
    try {
        const response = await axios.get(
            `${API}/product-category`
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                error: true,
                message: error.response.data.message
            };
        }
        return {
            error: true,
            message: "Server not responding to get product category"
        };
    }
}