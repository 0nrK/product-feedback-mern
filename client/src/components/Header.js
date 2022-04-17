import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/userSlice"
import axios from 'axios'

const Header = ({ props, handleSort }) => {

    const [sortChoice, setSortChoice] = useState("Most Upvotes")
    const [sortMenu, setSortMenu] = useState(false)
    const [isAdmin, setIsAdmin] = useState(true)
    const [inProcess, setInProcess] = useState(false)
    const [addMenu, setAddMenu] = useState(false)
    const [menuValues, setMenuValues] = useState({
        productName: "",
        productDesc: "",
        productTags: ""
    })

    const dispatch = useDispatch()

    const token = JSON.parse(localStorage.getItem("user"))

    function handleChange(event) {
        setMenuValues(values => ({ ...values, [event.target.name]: event.target.value }))
        console.log(menuValues)
    }


    async function handleSubmit(event) {
        event.preventDefault()
        setAddMenu(false)
        axios.post("http://localhost:5000/post", { menuValues })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        setMenuValues({
            productName: "",
            productDesc: "",
            productTags: ""
        })
    }

    function handleLogout(e) {
        setInProcess(() => true)
        console.log(e.currentTarget);
        dispatch(logout())
        setInProcess(() => false)

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
                {/* <div
                    onClick={() => setSortMenu(!sortMenu)}
                    className="flex flex-row items-center    group cursor-pointer space-x-3">
                    <span className="hidden md:flex">Sort By:</span>
                    <select defaultValue="Newest" onChange={handleSort} className="p-2 px-3  bg-slate-800 rounded-md w-48 flex flex-col">
                        <option value="Most Upvote" className="px-9 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 border-b border-gray-300">Most Upvotes</option>
                        <option value="Newest" className="px-9 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 border-b border-gray-300">Newest</option>
                        <option value="Oldest" className="px-9 py-3 bg-slate-800 hover:bg-slate-700 text-gray-200 border-b border-gray-300">Oldest</option>
                    </select>

                </div> */}
                {isAdmin &&
                    <div className="">
                        <button onClick={() => setAddMenu(!addMenu)} className="bg-blue-600 hover:bg-blue-500 px-6 py-3 flex md:px-6 md:py-3  rounded-lg text-white">+  Add Feedback</button>
                    </div>}
                <div>
                    <button onClick={(e) => handleLogout(e)} className="bg-pink-600 hover:bg-pink-500 px-6 py-3 flex md:px-6 md:py-3  cursor-pointer rounded-lg text-white">
                        {inProcess ?
                            <svg role="status" class="mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            : "Log out"}
                    </button>
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
