import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import postReducer from "./postSlice"
import thunk from "redux-thunk"

const store = configureStore({
    reducer: {
        auth: userReducer,
        posts: postReducer,
    },
    middleware: [thunk]
})

export default store