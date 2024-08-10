// src/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

// Create an async thunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    return data.map(post => ({ ...post, reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 }}));
});

// Create the slice
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                const loadedPosts = action.payload.map(post => {
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    }
                    return post;
                })

                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
