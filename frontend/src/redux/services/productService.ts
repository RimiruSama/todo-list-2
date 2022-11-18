import axios from 'axios';

const getAllProduct = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');

    return response.data;
}

const getAllCategories = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
}

const getProductByCategory = async (category: string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
}

const productService = {
    getAllProduct,
    getAllCategories,
    getProductByCategory
}

export default productService;