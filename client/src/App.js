import React, { useEffect } from 'react'
import Home from './pages/Home'
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import ProductPage from './pages/ProductPage';
import { getPosts } from './redux/postSlice';
import axios from 'axios';
import { useState } from 'react';
import { FilterProvider } from "./context/FilterContext"
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {

  const [data, setData] = useState([])
  const posts = useSelector((state) => state.posts)
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPosts())
    setData(() => posts.data)
  }, [])



  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user.isLoggedIn ? <Home /> : <Navigate to="/register" />} />
        <Route path="/product/:id" element={user.isLoggedIn ? <ProductPage user={user} /> : <Navigate to="/register" />} />
        <Route path="/register" element={<Register user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
