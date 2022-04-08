import React, { useEffect } from 'react'
import Home from './pages/Home'
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductPage from './pages/ProductPage';
import { getPosts } from './redux/postSlice';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { FilterProvider } from "./context/FilterContext"
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {

  const [data, setData] = useState([])
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPosts())
    setData(() => posts.data)
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
