import React, { useState, useEffect } from 'react'
import { BsFillChatQuoteFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Product = ({ props }) => {

    const [voted, setVoted] = useState(false)


    function upVote() {
        setVoted(() => !voted)

        if (voted) {
            props.upVote -= 1
        } else {
            props.upVote += 1
        }
    }

    return (
        <div className="flex w-full   mx-auto space-x-5 shadow-lg rounded-lg mt-4  p-6 flex-row bg-red-50 justify-between ">
            <div className=" flex flex-col w-auto  justify-between">
                <div onClick={upVote} className={`${voted && "outline outline-2 outline-blue-600"} flex flex-row  items-center p-2 justify-center h-max space-x-1  hover:bg-blue-200 cursor-pointer   rounded-lg     bg-blue-100 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-blue-800 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
                    <span className="text-gray-700 text-sm  font-bold">{props.upVote}</span>
                </div>
                <div className="flex flex-row justify-center  items-center space-x-1">
                    <BsFillChatQuoteFill />
                    <span className="text-l font-bold text-gray-700">{props.comments.length}</span>
                </div>
            </div>

            <div className="w-full">
                <Link to={`/product/${props._id}`} >
                    <div>
                        <h1 className="font-bold text-xl">{props.productName}</h1>
                        <p className="text-gray-400 my-5 break-all text-base">{props.productDesc}</p>

                    </div>
                </Link>
                <span className="bg-blue-100 text-xs w-min hover:bg-blue-200 cursor-pointer text-blue-700 font-bold rounded-md py-3 px-5 ">{props.productTags}</span>
            </div>


        </div>

    )
}

export default Product
