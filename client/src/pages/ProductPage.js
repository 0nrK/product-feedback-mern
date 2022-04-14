import React, { useState, useEffect } from 'react'
import AddComment from '../components/AddComment'
import Comment from '../components/Comment'
import Header from '../components/Header'
import Product from '../components/Product'
import Sidebar from "../components/Sidebar"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getPostById } from '../redux/postSlice'

const ProductPage = () => {

    const [data, setData] = useState([])

    const { id } = useParams()
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostById(id))
            .then((res) => console.log(res))
    }, [id])


    return (
        <>
            {posts.isLoading ? <span>Loading...</span>
                :
                <div className="flex flex-col w-full px-5 pt-20 lg:w-1/2  m-auto ">
                    <div className="flex flex-row  bg-transparent border-none justify-between w-full items-center">
                        <Link to="/">
                            <div className="flex flex-row cursor-pointer space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                <button className="">Go Back</button>
                            </div>
                        </Link>
                        <div>
                            <button className="px-5 py-3 rounded-lg text-white hover:bg-blue-900 bg-blue-600">Edit Feedback</button>
                        </div>
                    </div>

                    <Product props={posts.data} />

                    {/* Comment Section */}
                    <div className="bg-red-50 mt-5 pb-8 border-b-2 rounded-lg shadow-lg space-y-5 ">
                        <h2 className="text-2xl p-5 font-bold border-b-2">{posts.data.comments?.length} Comments</h2>

                        <div>
                            {posts.data.comments?.map((com) => {
                                return <Comment key={com._id} postID={id} props={com} />
                            })}

                        </div>

                    </div>

                    {/* Add Comment */}
                    <AddComment />


                </div>
            }
        </>
    )
}

export default ProductPage
