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
export const GetProductCategorybyIdApi = async (id) => {
    try {
        const response = await axios.get(
            `${API}/product-category/${id}`
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

// Update Product Category By Id
export const UpdateProductCategorybyId = async (formData, id) => {
    try {
        const response = await axios.put(
            `${API}/product-category/update/${id}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
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
            message: "Server not responding while updating product category"
        };
    }
};

// DELETE PRODUCT CATEGORY BY ID
export const DeleteProductCategoryByIdApi = async (id) => {
    try {
        const response = await axios.delete(
            `${API}/product-category/delete/${id}`
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
            message: "Server not responding while deleting product category"
        };
    }
};


// ***************
// ** Product Category **
// ***************


// Create New Product
export const AddNewProductApi = async (formData) => {
    try {
        const response = await axios.post(`${API}/product/create`, formData, {
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
export const GetTotalCountProductApi = async () => {
    try {
        const response = await axios.get(
            `${API}/product/total-count`
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
            message: "Server not responding to get product"
        };
    }
};

// Get All Product Category
export const GetAllProductApi = async () => {
    try {
        const response = await axios.get(
            `${API}/product`
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
            message: "Server not responding to get product"
        };
    }
};

// Get Product Category By Id
export const GetProductbyIdApi = async (id) => {
    try {
        const response = await axios.get(
            `${API}/product/${id}`
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
            message: "Server not responding to get product"
        };
    }
};

// Update Product Category By Id
export const UpdateProductbyId = async (formData, id) => {
    try {
        const response = await axios.put(
            `${API}/product/update/${id}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
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
            message: "Server not responding while updating product"
        };
    }
};

// DELETE PRODUCT CATEGORY BY ID
export const DeleteProductByIdApi = async (id) => {
    try {
        const response = await axios.delete(
            `${API}/product/delete/${id}`
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
            message: "Server not responding while deleting product"
        };
    }
};
