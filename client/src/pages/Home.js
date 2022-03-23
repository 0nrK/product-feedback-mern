import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import axios from "axios"

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [sortBy, setSortBy] = useState("Most Upvotes")
    const [filterBy, setFilterBy] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:5000');
                setData(res.data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchData();
    }, [])

    const handleSort = (e) => {
        console.log(e.target.value);
        setSortBy(e.target.value)
        if (sortBy === "Newest") {
            const sortedPosts = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            setData(sortedPosts)
        } else if (sortBy === "Oldest") {
            const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            setData(sortedPosts)
        } else if (sortBy === "Most Upvote") {
            const sortedPosts = data.sort((a, b) => (a.upVote < b.upVote) ? 1 : -1)
            setData(sortedPosts)
            console.log(sortedPosts);
        }
    }

    const handleFilter = (event) => {
        setFilterBy(event)
        if (filterBy === "UI") {
            const filteredData = data.filter(post => post.productTags === "UI")
            setData(filteredData)
        } else if (filterBy === "Bug") {
            const filteredData = data.filter(post => post.productTags === "Bug")
            setData(filteredData)
        } else if (filterBy === "Feature") {
            const filteredData = data.filter(post => post.productTags === "Feature")
            setData(filteredData)
        }
    }


    return (
        <>
            {loading ?
                <h1 className="text-center text-4xl">Loading...</h1>
                :
                <div className="flex flex-col w-full   md:flex-row h-screen pt-8 max-w-screen-xl mx-auto ">
                    <div className="w-1/3 flex-1">
                        <Sidebar handleFilter={handleFilter} />
                    </div>
                    <div className="md:w-2/3 flex flex-col md:ml-3 ">
                        <Header props={data} handleSort={handleSort} />
                        <Products props={data} />
                    </div>
                </div>
            }
        </>
    )
}

export default Home
