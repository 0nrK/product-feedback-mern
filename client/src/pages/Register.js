import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from "../redux/userSlice"
const Register = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const user = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function handleChange(e) {
        setFormData((values) => ({ ...values, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (formData.password === formData.password2) {
            dispatch(register(formData))
                .then((res) => console.log(res))
        }
    }

    useEffect(() => {

        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="w-full h-full">
            <form onChange={handleChange} className="rounded-lg mx-auto mt-48  bg-red-200 flex flex-col  justify-center w-1/4 h-5/6 p-12 " >
                <h1 className="text-4xl text-center  mb-4 text-blue-500 ">Sign Up</h1>
                <input className="p-3 mt-4 focus:outline-blue-400 rounded-lg" name="username" type="text" placeholder="Username" />
                <input className="p-3 mt-4 focus:outline-blue-400 rounded-lg" name="password" type="password" placeholder="Password" />
                <input className="p-3 mt-4 focus:outline-blue-400 rounded-lg" name="password2" type="password" placeholder="Password Confirmation" />
                <button onClick={handleSubmit} className="p-3 text-white bg-blue-500 w-24 rounded-sm mt-5 ml-auto" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register