import React, { useState } from 'react'
import axios from 'axios'

const Header = ({ props, handleSort }) => {

    const [sortChoice, setSortChoice] = useState("Most Upvotes")
    const [sortMenu, setSortMenu] = useState(false)
    const [addMenu, setAddMenu] = useState(false)
    const [menuValues, setMenuValues] = useState({
        productName: "",
        productDesc: "",
        productTags: ""
    })





    function handleChange(event) {
        setMenuValues(values => ({ ...values, [event.target.name]: event.target.value }))
        console.log(menuValues)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setAddMenu(false)
        axios.post("http://localhost:5000/addproduct", { menuValues })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        setMenuValues({
            productName: "",
            productDesc: "",
            productTags: ""
        })
    }


    return (
        <div className="w-full  mt-12 md:mt-0">
            <div className="flex h-20  px-3 w-full md:text-sm md:px-5 md:py-5 md:rounded-xl bg-slate-700 text-white justify-between items-center">
                <div className="lg:flex lg:flex-row hidden   items-center space-x-3 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span >{props.length} Suggestions</span>
                </div>
                <div
                    onClick={() => setSortMenu(!sortMenu)}
                    className="flex flex-row items-center    group cursor-pointer space-x-3">
                    <span className="hidden md:flex">Sort By:</span>
                    <select defaultValue="Newest" onChange={handleSort} className="p-2 px-3  bg-slate-800 rounded-md w-48 flex flex-col">
                        <option value="Most Upvote" className="px-9 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 border-b border-gray-300">Most Upvotes</option>
                        <option value="Newest" className="px-9 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 border-b border-gray-300">Newest</option>
                        <option value="Oldest" className="px-9 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 border-b border-gray-300">Oldest</option>
                    </select>


                </div>
                <div className="">
                    <button onClick={() => setAddMenu(!addMenu)} className="bg-pink-600 hover:bg-pink-500 px-6 py-3 flex md:px-6 md:py-3  rounded-lg text-white">+  Add Feedback</button>
                </div>
            </div>
            {addMenu &&
                <div className="text-white -mt-3 bg-slate-700">
                    <form
                        onSubmit={handleSubmit}
                        className="p-3 px-8  space-y-3 flex flex-col">
                        <label htmlFor="productName" className="text-xl">Product Name:</label>
                        <input name="productName" onChange={handleChange} value={menuValues.productName || ""} className="px-3 py-2  text-black" type="text"></input>
                        <label htmlFor="productDesc" className="text-xl">Product Desc:</label>
                        <input name="productDesc" onChange={handleChange} value={menuValues.productDesc || ""} className="px-3 py-2 h-auto text-black" type="text"></input>
                        <label htmlFor="productTags" className="text-xl">Product Tags:</label>
                        <input name="productTags" onChange={handleChange} value={menuValues.productTags || ""} className="px-3 py-2 h-auto text-black" type="text"></input>
                        <button className="bg-pink-600 hover:bg-pink-500 px-6 py-3 w-24  ml-auto text-l rounded-lg text-white">Submit</button>
                    </form>
                </div>}
        </div>
    )
}

export default Header
