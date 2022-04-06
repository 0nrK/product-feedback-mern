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
        axios.get(baseURL + `/post/:${id}`)
            .then(res => {
                return res.data
            })
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
                console.log(state)
                state.isLoading = true
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = state.data.filter(
                    (post) => post._id !== action.payload.id
                )
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export default postSlice.reducer