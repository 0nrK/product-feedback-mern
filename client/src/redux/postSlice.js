import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
}

const baseURL = "http://localhost:5000"


export const getPosts = createAsyncThunk("post/getAll", async (thunkAPI) => {
    try {
        const res = await axios.get(baseURL + "/post")
        return res.data
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message
            || err.toString()

        return thunkAPI.rejectWithValue(message)
    }
})


export const getPostById = createAsyncThunk("post/getById", async (id, thunkAPI) => {
    try {
        const res = await axios.get(baseURL + `/post/${id}`)
        return res.data
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message
            || err.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const createPost = createAsyncThunk("post/add", async (postData, thunkAPI) => {

    try {
        await axios.post(baseURL + "/post", postData)
            .then((res) => { return res.data })

    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message
            || err.toString()

        return thunkAPI.rejectWithValue(message)
    }

})

export const addComment = createAsyncThunk("post/comment/add", async (commentData, thunkAPI) => {
    try {
        const res = await axios.post(baseURL + `/post/${commentData.postID}/comment`, { commentData })
        return res.data
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message
            || err.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteComment = createAsyncThunk("post/comment/delete", async (commentData, thunkAPI) => {

    try {
        const res = await axios.delete(baseURL + `/post/${commentData.postID}/comment/${commentData.commentID}`)
        return res.data
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message
            || err.toString()

        return thunkAPI.rejectWithValue(message)
    }
})




const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data.push(action.payload)
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPostById.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addComment.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload

            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteComment.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.data = action.payload
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.data = action.payload
            })
    }
})


export default postSlice.reducer