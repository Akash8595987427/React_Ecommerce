import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar=()=>{
    
    return(
        <>
            <div className="navbar_section w-full h-[10vh] bg-sky-100 flex justify-center items-center">
                <div className="container w-[90%] h-full flex justify-between items-center">
                    <h3 className="text-xl font-bold"><NavLink to="/"> Ecomm </NavLink></h3>

                    <div className="navbar_info hidden items-center gap-8 text-sm lg:flex">
                        <li className="list-none uppercase"> <NavLink to="/"> Home </NavLink> </li>
                        <li className="list-none uppercase"> <NavLink to="/about"> About </NavLink> </li>
                        <li className="list-none uppercase"> <NavLink to="/products"> Products </NavLink> </li>
                        <li className="list-none uppercase"> <NavLink to="/contact"> Contact </NavLink> </li>
                        <li className="list-none py-1.5 px-4 bg-purple-700 text-white text-xs uppercase"> <NavLink > Log in </NavLink> </li>
                        <li className="list-none uppercase text-xl relative"> <NavLink to="/cart"> <IoCart /> 
                        <div className="cartcounter w-4 h-4 rounded-[50%] bg-purple-700 text-white absolute -top-2 -right-2 text-xs flex justify-center items-center ">0</div></NavLink> 
                        </li>
                    </div>

                    <div className="mobileResponveBtns inline-block  lg:hidden">
                       <NavLink to="/mobile_navbar"> <GiHamburgerMenu /> </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;