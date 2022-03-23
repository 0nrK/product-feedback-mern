import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductPage from './pages/ProductPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
