import React, { useState, useEffect } from 'react'
import Product from './Product'
import axios from 'axios'
import { useContext } from 'react'
import { FilterContext } from "../context/FilterContext"

const Products = ({ props }) => {

    const [data, setData] = useState(props)


    const { state } = useContext(FilterContext)

    useEffect(() => {

        console.log(state)
        const handleFilter = () => {
            if (state === "All") {
                setData(() => props)
            } else if (state === "UI") {
                setData(() => props)
                const filteredData = data.filter(post => post.productTags === "UI")
                setData(() => filteredData)
            } else if (state === "Bug") {
                setData(() => props)
                const filteredData = data.filter(post => post.productTags === "Bug")
                setData(() => filteredData)
            } else if (state === "Feature") {
                setData(() => props)
                const filteredData = data.filter(post => post.productTags === "Feature")
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
