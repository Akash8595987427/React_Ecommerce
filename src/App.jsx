import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Category from "./Pages/Category";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";
import Mobile_navbar from "./Pages/Mobile_navbar";
import Footer from "./Pages/Footer";



const App=()=>{

  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Product/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/category" element={<Category/>}></Route>
          <Route path="/singleproduct" element={<SingleProduct/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          <Route path="/mobile_navbar" element={<Mobile_navbar/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;