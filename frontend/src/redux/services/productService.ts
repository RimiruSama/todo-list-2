import axios from 'axios';

const getAllProduct = async () => {
    console.log('call api product');
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
}

const getAllCategories = async () => {
    console.log('call api category');
    const response = await axios.get('http://localhost:5000/api/category/getAll');
    // const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
}

const getProductByCategory = async (category: string) => {
    console.log('call api product-category');
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
}

const createCategory = async (data: any) => {
    console.log("create category");
    
    const response = await axios.post('http://localhost:5000/api/category/create', data);
    return response.data;
}

const createProduct = async (data:any) => {
    console.log("create product");
    const response = await axios.post('http://localhost:5000/api/product/create', data);
    return response.data;
}

const getAllProductRQ = async (cate: any) => {
    console.log('call api product');
    if(cate) {
        const response = await axios.get(`http://localhost:5000/api/product/${cate}`);
        return response.data;
    }else {
        const response = await axios.get('http://localhost:5000/api/product/getAll');
        return response.data;
    }
    return [];
}

const productService = {
    getAllProduct,
    getAllCategories,
    getProductByCategory,
    getAllProductRQ,
    createCategory,
    createProduct
}

export default productService;