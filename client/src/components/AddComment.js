import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { addComment } from "../redux/postSlice"


const AddComment = () => {

    const [text, setText] = useState("")
    const [characterLeft, setCharacterLeft] = useState(200)

    let { id } = useParams()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("user"))


    async function handleAddComment(e) {
        e.preventDefault()
        const commentData = { postID: id, text, user }
        dispatch(addComment(commentData))

    }

    function handleChange(e) {
        setText(() => e.target.value)
    }


    return (
        <div className="bg-red-50 p-8  mt-5 mb-12 rounded-lg shadow-lg space-y-5 ">
            <h1 className="text-2xl font-bold">Add Comment</h1>
            <form onSubmit={handleAddComment} className="flex flex-col space-y-3">
                <textarea maxLength="200" onChange={handleChange} className="bg-blue-100 resize-none rounded-lg h-48  py-3 mb-4 px-5" placeholder="Type your comment here" />
                <div className="flex flex-row">
                    <button type="submit" className="px-5 py-3  hover:bg-blue-900 ml-auto w-24 rounded-lg text-white bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment
