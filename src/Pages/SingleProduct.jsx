import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/product_context";
import { ImImage } from "react-icons/im";


const Api = "https://api.pujakaitem.com/api/products";

const SingleProduct=(props)=>{
    const {id} = useParams();
    const {singleProduct, getSingleProductData} = useGlobalContext();
    
    useEffect(()=>{
        getSingleProductData(`${Api}?id=${id}`)
        console.log(`${Api}?id=${id}`);
    }, [])



    console.log(singleProduct);
    return(
        <>
            <div className="single_product_section w-full h-[100vh] flex justify-center items-center">
                <div className="container w-[90%] h-full grid grid-cols-2 gap-8 ">
                    <div className="box1 flex justify-end items-center">
                      
                        {/* <img src={singleProduct.image[0].url} alt="" /> */}
                        {/* <img src={singleProduct.image[1].url} alt="" /> */}
                        {/* <img src={singleProduct.image[2].url} alt="" /> */}
                        {/* <img src={singleProduct.image[3].url} alt="" />   */}
                    </div>
                    <div className="box2 flex flex-col justify-center items-start">
                        <h1>{singleProduct.name}</h1>
                        <p>MRP : {singleProduct.price}</p>
                        <p>Deal of the Day : {singleProduct.price}</p>
                        <p>{singleProduct.description}</p>
                        <div></div>
                        <p>Available : {(singleProduct.stock)?"In stock":"Out of Stock"} </p>
                        <p>ID : {singleProduct.id}</p>
                        <p>Brand : {singleProduct.company}</p>
                        <hr className="w-full mt-3 border-1.5 border-black" />
                        <p>Color : </p>
                        <div></div>
                        <button className="py-2 px-3 bg-purple-600 text-white text-sm">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;