import React from "react";
import { NavLink } from "react-router-dom";


const Product=(props)=>{
    // let name = currElem.name;

//!     (  This is the function ( Internation Number format constructor) which convert price into INR Rupees  )
    const formatPrice=(price)=>{
        const number = price/100;
        return ( new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number,));
        
    }

    return(
        <>
        <NavLink to={`/singleproduct/${props.element.id}`}>
            <div className="product_container container w-[80%] h-full flex flex-col justify-center items-start">
                <img src={props.element.image} alt="img" className="w-full h-auto" />
                {console.log(props.element.image)}
                <div className="w-full flex justify-between items-center text-sm ">
                <h1 className="capitalize">{props.element.name}</h1> 
                <h1 className="text-gray-500">{formatPrice(props.element.price)}</h1>
                </div>
                
            </div>
            </NavLink>
        </>
    )
}

export default Product