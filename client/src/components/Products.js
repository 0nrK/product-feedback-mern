import React, { useState, useEffect } from 'react'
import Product from './Product'
import { useContext } from 'react'
import { FilterContext } from "../context/FilterContext"
import { useSelector } from 'react-redux'

const Products = ({ props }) => {

    const [data, setData] = useState([props])


    const { state } = useContext(FilterContext)

    const posts = useSelector(state => state.posts)

    useEffect(() => {

        if (state === "All") {
            setData(() => posts.data)
        } else {
            const filteredData = props.filter((el) => el.productTags === state)
            setData(() => filteredData)
        }
    }, [state])


    return (
        <div className="flex flex-col w-full px-8 md:px-0 items-center  space-y-5 pb-5">
            {posts.isLoading ? <span>Loading...</span> :

                data?.map((item) => (

                    <div className="w-full" key={item._id}>
                        <Product props={item} />
                    </div>

                ))

            }
        </div >
    )
}

export default Products
