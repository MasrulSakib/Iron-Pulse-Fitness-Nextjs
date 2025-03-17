import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBrandData } from "./fetchData";

type Brand = {
    src: string;
    href: string;
};

const initialState: {
    brands: Brand[];
    isLoading: boolean;
    isError: boolean;
    error: string | null;
} = {
    brands: [],
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchBrandData = createAsyncThunk('blogs/fetchBrandData', async () => {
    const blogs = await getBrandData();
    return blogs;
});

const brandSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrandData.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBrandData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.brands = action.payload;
            })
            .addCase(fetchBrandData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || "An unknown error occurred";
            });
    }
});

export default brandSlice.reducer;
