import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../redux/userSlice';

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const user = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function handleChange(e) {
        setFormData((values) => ({ ...values, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(login(formData))
    }

    useEffect(() => {

        if (user) {
            navigate("/")
        }
    }, [user])
    return (
        <div className="w-full h-full">
            <form onChange={handleChange} onSubmit={handleSubmit} className="rounded-lg mx-auto mt-48  bg-red-200 flex flex-col  justify-center w-1/4 h-5/6 p-12 " >
                <h1 className="text-4xl text-blue-500 mb-4 text-center ">Sign In</h1>
                <input className="p-3 focus:outline-blue-400 mt-4 rounded-lg" name="username" type="text" placeholder="Username" />
                <input className="p-3 focus:outline-blue-400 mt-4 rounded-lg" name="password" type="password" placeholder="Password" />
                <button className="p-3 text-white bg-blue-500 w-24 rounded-sm mt-5 ml-auto" type="submit">Sign Up</button>
            </form>
        </div>)
}

export default Login