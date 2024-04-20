import React from 'react'
import { NavLink } from 'react-router-dom'


const PageNavigation = (props) => {
  return (
    <>
        <div className="page_navigation_section w-full h-[8vh] flex flex-row justify-center items-center ">
           <div className="container w-[80%] h-full flex justify-start items-center">
              <p className='text-xl capitalize text-gray-600'><span className='text-blue-700'><NavLink to="/"> Home</NavLink></span> / {props.title}</p>
           </div>
        </div>
    </>
  )
}

export default PageNavigation
