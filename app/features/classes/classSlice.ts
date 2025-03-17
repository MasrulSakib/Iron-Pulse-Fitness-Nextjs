import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getClassData } from "./fetchData";


type Class = {
    name: string;
    img: string;
    description: string;
};

const initialState: {
    classes: Class[];
    isLoading: boolean;
    isError: boolean;
    error: string | null;
} = {
    classes: [],
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchClassData = createAsyncThunk('classes/fetchClassData', async () => {
    const testimonials = await getClassData();
    return testimonials;
});

const classSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClassData.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchClassData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.classes = action.payload;
            })
            .addCase(fetchClassData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || "An unknown error occurred";
            });
    }
});

export default classSlice.reducer;