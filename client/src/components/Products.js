import React, { useState, useEffect } from 'react'
import Product from './Product'
import { Link } from "react-router-dom"
import axios from 'axios'

const Products = ({ props }) => {

    console.log(props);

    return (
        <div className="flex flex-col w-full px-8 md:px-0 items-center  space-y-5 pb-5">
            {props.map((item) => (

                <div className="w-full" key={item._id}>
                    <Link to={`/product/${item._id}`} >
                        <Product props={item} />
                    </Link>
                </div>

            ))}
        </div >
    )
}

export default Products
