import React from "react";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";


const Mobile_navbar=()=>{
    return(
        <>
          <div className="sectionn w-full h-[100vh] bg-purple-700 text-white flex  justify-center items-center  lg:hidden">
            <div className="container w-[90%] h-full flex flex-col gap-8 justify-center items-center  ">
                <li className="list-none text-5xl"><NavLink to="/"> Home </NavLink></li>
                <li className="list-none text-5xl"><NavLink to="/about"> About </NavLink></li>
                <li className="list-none text-5xl"><NavLink to="/products"> Product </NavLink></li>
                <li className="list-none text-5xl"><NavLink to="/contact"> Contact </NavLink></li>
                <li className="list-none uppercase text-5xl relative">
                    <NavLink to="/cart"> <IoCart /> 
                        <div className="cartcounter w-6 h-6 rounded-[50%] bg-blue-700 text-white absolute top-0 -right-2 text-xl flex justify-center items-center ">0</div></NavLink> 
                </li>
            </div>
          </div>  
        </>
    )
}

export default Mobile_navbar;