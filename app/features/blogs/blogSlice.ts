import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogData } from "./fetchData";

type Blog = {
    title: string;
    img: string;
    date: string;
    href: string;
};

const initialState: {
    blogs: Blog[];
    isLoading: boolean;
    isError: boolean;
    error: string | null;
} = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchBlogData = createAsyncThunk('blogs/fetchBlogData', async () => {
    const blogs = await getBlogData();
    return blogs;
});

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogData.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlogData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || "An unknown error occurred";
            });
    }
});

export default blogSlice.reducer;
