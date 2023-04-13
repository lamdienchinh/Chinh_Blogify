import { createSlice } from "@reduxjs/toolkit";

const tutorSlice = createSlice({
    name: "tutor",
    initialState: {
        posts: {
            allPosts: null,
            isFetching: false,
            error: false
        },
        msg: "",
    },
    reducers: {
        getTutorsStart: (state) => {
            state.posts.isFetching = true;
        },
        getTutorsSuccess: (state, action) => {
            state.posts.isFetching = false;
            state.posts.allPosts = action.payload;
        },
        getTutorsFailed: (state) => {
            state.posts.isFetching = false;
            state.posts.error = true;
        },
        createTutorStart: (state) => {
            state.posts.isFetching = true;
        },
        createTutorSuccess: (state) => {
            state.posts.isFetching = false;
        },
        createTutorFailed: (state) => {
            state.posts.isFetching = false;
            state.posts.error = true;
        }
    }
})
export const {
    getTutorsStart, getTutorsSuccess, getTutorsFailed, createTutorStart, createTutorSuccess, createTutorFailed
} = tutorSlice.actions;

export default tutorSlice.reducer