import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../services/authService';

// Define a type for the slice state
interface DefaultState {
    user: any,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
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
    async (user: object, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error: any) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message);
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
    reducers: {
        reset: (state) => {
            state.isSuccess = false;
            state.isError = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.user = null
            })
    }
});

// export const userLogined = (state: RootState) => state.auth;

export const {reset} = authSlice.actions;

export default authSlice.reducer;
