import React from 'react'
import Reply from './Reply'
import { useDispatch } from "react-redux"
import { deleteComment } from "../redux/postSlice"
import { useState } from 'react'
import Modal from './Modal'


const Comment = ({ postID, props }) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    const dispatch = useDispatch()


    const user = JSON.parse(localStorage.getItem("user"))

    console.log(user);

    async function handleDeleteComment() {
        const commentData = { postID, commentID: props._id }
        dispatch(deleteComment(commentData))

    }
    return (
        <div className="space-y-3  pt-8 ">
            <div className="flex flex-col mb-8">
                <div className="flex flex-row justify-between items-center px-5 space-x-12">
                    <div className="flex flex-row space-x-5 ">
                        <img
                            className="rounded-full  object-cover h-12   w-12"
                            src={props.user_id?.profilePhoto} alt="" />
                        <div className="flex flex-col">
                            <h4 className="font-bold mt-2 text-xl">{props.user_id?.username}</h4>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsModalOpened(true)} className="cursor-pointer text-red-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-3xl p-3">Are you sure?</h1>
                            <div className="space-x-3 mt-3 ml-auto">
                                <button onClick={() => setIsModalOpened(false)} className="p-3 my-auto bg-gray-900 text-white ">Cancel</button>

                                <button onClick={handleDeleteComment} className="p-3 my-auto bg-red-900 text-white ">Delete</button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="px-7 pt-2">
                    <p className="ml-14 break-words text-gray-400">{props?.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
