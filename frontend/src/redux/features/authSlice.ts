import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Define a type for the slice state
interface DefaultState {
    user: object | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: false,
    message: string
}

const initialState: DefaultState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register new user
export const register = createAsyncThunk(
    'auth/register',
    async (user: object | null, thunkAPI) => {
        try {
            // return await authService.register(user)
        } catch(error: any) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        }
        
    }
)

// Login user
export const login = createAsyncThunk(
    'auth/login',
    async (user: object | null, thunkAPI) => {
        console.log(user);
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

// export const userLogined = (state: RootState) => state.auth;

export default authSlice.reducer;
