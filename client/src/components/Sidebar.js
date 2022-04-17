import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { filterShowAll, filterBug, filterFeature, filterUI } from "../context/FilterActions"
import { FilterContext } from '../context/FilterContext'

const Sidebar = () => {




    const { state, dispatch } = useContext(FilterContext)

    return (
        <nav className="w-full">
            <div className=" md:h-80 md:space-y-5">
                <div className="h-20 flex w-full rounded-lg  flex-row items-center px-5 justify-between md:static absolute top-0 
                md:h-40
                 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <span className="text-2xl font-bold">0nrk</span>
                    <span className="relative top-0 right-0 cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                </div>
                <div className="hidden md:space-y-3 md:block">
                    <div className="  shadow-xl h-50 p-7 space-x-5  bg-red-50 rounded-lg">
                        <ul className="flex flex-row flex-wrap">
                            <li onClick={() => dispatch(filterShowAll())} className={`${state === "All" ? "bg-blue-800" : "bg-blue-300"} cursor-pointer font-bold  text-white m-3 rounded-md py-3 px-5`}>All</li>
                            <li onClick={() => dispatch(filterUI())} className={`${state === "UI" ? "bg-blue-800" : "bg-blue-300"} cursor-pointer font-bold  text-white m-3 rounded-md py-3 px-5`}>UI</li>
                            <li onClick={() => dispatch(filterBug())} className={`${state === "Bug" ? "bg-blue-800" : "bg-blue-300"} cursor-pointer font-bold  text-white m-3 rounded-md py-3 px-5`}>Bug</li>
                            <li onClick={() => dispatch(filterFeature())} className={`${state === "Feature" ? "bg-blue-800" : "bg-blue-300"} cursor-pointer font-bold  text-white m-3 rounded-md py-3 px-5`}>Feature</li>
                        </ul>
                    </div>
                    <div className=" bg-red-50 shadow-xl rounded-lg py-8 px-6">
                        <div className="flex flex-row  items-center justify-between">
                            <h2 className="text-2xl font-bold">Roadmap</h2>
                            <a href="#" className="cursor-pointer text-blue-600 underline ">View</a>
                        </div>
                        <div className="mt-3 space-y-1">
                            <div className="flex flex-row justify-between">
                                <div className="flex space-x-2 flex-row items-center">
                                    <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
                                    <span className="text-gray-500">Planned</span>
                                </div>
                                <span className="text-xl text-gray-400 font-bold">2</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex space-x-2 flex-row items-center">
                                    <div className="w-2 h-2 rounded-full bg-purple-700"></div>
                                    <span className="text-gray-500">In Progress</span>
                                </div>
                                <span className="text-xl text-gray-400 font-bold">2</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex space-x-2 flex-row items-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-800"></div>
                                    <span className="text-gray-500">Live</span>
                                </div>
                                <span className="text-xl text-gray-400 font-bold">2</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav >
    )
}

export default Sidebar
