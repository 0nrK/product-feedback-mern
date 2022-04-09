import React from 'react'
import Reply from './Reply'
import axios from 'axios'

const Comment = ({ postID, props }) => {
    console.log("props:", props)
    const { id } = props

    async function deleteComment() {
        console.log(postID, id)
        return await axios.delete(`http://localhost:5000/post/${postID}/comment/${id}`)
            .then(err => console.log(err))
            .catch((err) => console.log(err))
    }
    return (
        <div className="space-y-3  pt-8">
            <div className="flex flex-col mb-8">
                <div className="flex flex-row justify-between items-center px-5 space-x-12">
                    <div className="flex flex-row space-x-5 ">
                        <img
                            className="rounded-full  object-cover h-12   w-12"
                            src={props.profilePhoto} alt="" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-xl">John Doe</h4>
                            <span className="text-gray-400 text-sm">@{props.username}</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={deleteComment} className="cursor-pointer text-red-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                <div className="px-7 pt-2">
                    <p className="ml-14 break-words text-gray-400">{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
