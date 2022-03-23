import React, { useState, useEffect } from 'react'
import AddComment from '../components/AddComment'
import Comment from '../components/Comment'
import Header from '../components/Header'
import Product from '../components/Product'
import Sidebar from "../components/Sidebar"
import { Link, useParams } from "react-router-dom"
import axios from "axios"


const ProductPage = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const { id } = useParams()

    useEffect(() => {
        async function getData() {
            const res = await axios.get("http://localhost:5000/product/" + id)
            setData(res.data)
            console.log(data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <>
            {loading ? <span>Loading...</span>
                :
                <div className="flex flex-col w-full px-5 pt-20 md:w-1/2 m-auto ">
                    <div className="flex flex-row  bg-transparent border-none justify-between w-full items-center">
                        <div className="flex flex-row cursor-pointer space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            <Link to="/">
                                <span className="">Go Back</span>
                            </Link>
                        </div>
                        <div>
                            <button className="px-5 py-3 rounded-lg text-white hover:bg-blue-900 bg-blue-600">Edit Feedback</button>
                        </div>
                    </div>

                    <Product props={data} />

                    {/* Comment Section */}
                    <div className="bg-red-50 mt-5 pb-8 border-b-2 rounded-lg shadow-lg space-y-5 ">
                        <h2 className="text-2xl p-5 font-bold border-b-2">2 Comments</h2>

                        <div>
                            <Comment props={data} />

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
