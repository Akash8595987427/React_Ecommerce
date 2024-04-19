import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context/product_context'


const ErrorPage = () => {
  const {name} = useGlobalContext();
  return (
    <div className='w-full h-[60vh] flex flex-col justify-center items-center gap-3 my-8'>
        <h1 className='text-5xl font-semibold'>404</h1>
        <p className='uppercase text-xl'> Uh Oh ! You're lost </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, et. {name} </p>
        <button className='py-1.5 px-3 bg-purple-700 text-white'>  <NavLink to="/"> Home  </NavLink>  </button>
        
    </div>
  )
}

export default ErrorPage
