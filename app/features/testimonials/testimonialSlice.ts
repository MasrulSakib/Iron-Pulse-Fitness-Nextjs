import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTestimonialData } from "./fetchData";

type Testimonial = {
    img: string;
    message: string;
    name: string;
};

const initialState: {
    testimonials: Testimonial[];
    isLoading: boolean;
    isError: boolean;
    error: string | null;
} = {
    testimonials: [],
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchtestimonialData = createAsyncThunk('testimonials/fetchTestimonialData', async () => {
    const testimonials = await getTestimonialData();
    return testimonials;
});

const testimonialSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchtestimonialData.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchtestimonialData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.testimonials = action.payload;
            })
            .addCase(fetchtestimonialData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || "An unknown error occurred";
            });
    }
});

export default testimonialSlice.reducer;
