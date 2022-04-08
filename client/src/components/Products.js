import React, { useState, useEffect } from 'react'
import Product from './Product'
import { useContext } from 'react'
import { FilterContext } from "../context/FilterContext"
import { useSelector } from 'react-redux'

const Products = ({ props }) => {

    const [data, setData] = useState(props)


    const { state } = useContext(FilterContext)
    const postsData = useSelector(state => state.posts)

    useEffect(() => {
        const handleFilter = async () => {
            if (state === "All") {
                setData(() => postsData.data)
            } else if (state === "UI") {
                const filteredData = await postsData.data.filter(post => post.productTags === "UI")
                setData(() => filteredData)
            } else if (state === "Bug") {
                const filteredData = await postsData.data.filter(post => post.productTags === "Bug")
                setData(() => filteredData)
            } else if (state === "Feature") {
                const filteredData = await postsData.data.filter(post => post.productTags === "Feature")
                setData(() => filteredData)
            }
        }

        handleFilter()
    }, [state])

    return (
        <div className="flex flex-col w-full px-8 md:px-0 items-center  space-y-5 pb-5">
            {data.map((item) => (

                <div className="w-full" key={item._id}>
                    <Product props={item} />
                </div>

            ))}
        </div >
    )
}

export default Products
