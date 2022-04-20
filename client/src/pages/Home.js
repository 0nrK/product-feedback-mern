import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import axios from "axios"
import { getPosts } from '../redux/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Home = () => {

    const [data, setData] = useState([])

    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts)

    useEffect(() => {

        dispatch(getPosts())
    }, [])


    return (
        <>
            {posts.isLoading ?
                <h1 className="text-center text-4xl">Loading...</h1>
                :
                <div className="flex flex-col w-full   md:flex-row h-screen pt-8 max-w-screen-xl mx-auto ">
                    <div className="w-1/3 flex-1">
                        <Sidebar />
                    </div>
                    <div className="md:w-2/3 flex flex-col md:ml-3 ">
                        <Header props={posts.data} />
                        <Products props={posts.data} />
                    </div>
                </div>
            }
        </>
    )
}

export default Home
