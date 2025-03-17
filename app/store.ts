import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogs/blogSlice';
import testimonialReducer from './features/testimonials/testimonialSlice';
import classReducer from './features/classes/classSlice';
import brandReducer from './features/brands/brandSlice';

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        testimonial: testimonialReducer,
        class: classReducer,
        brand: brandReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
