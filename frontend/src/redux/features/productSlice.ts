import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import productService from "../services/productService";

interface ProductState {
    products: Array<object>,
    categories: Array<string>
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
}

const initialState: ProductState = {
    products: [],
    categories: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getAllProducts = createAsyncThunk(
    'product/getAll',
    async () => {
        return await productService.getAllProduct();
    }
)

export const getAllCategories = createAsyncThunk(
    'product/getAllCategories',
    async () => {
        return await productService.getAllCategories();
    }
)

export const getProductByCategory = createAsyncThunk(
    'product/getInCategory',
    async (category: string) => {
        return await productService.getProductByCategory(category);
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.products = [];
            })
            .addCase(getAllCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.categories = action.payload;
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.categories = [];
            })
            .addCase(getProductByCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getProductByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload as string;
                state.products = []
            })
    }
});

export const {reset} = productSlice.actions

export default productSlice.reducer;
