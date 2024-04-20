import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/product_context";
import { ImImage } from "react-icons/im";
import PageNavigation from "../Components/PageNavigation";


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
            <PageNavigation title={singleProduct.name}/>
            <div className="single_product_section w-full h-auto flex justify-center items-center my-[10vh]">
                <div className="container w-[90%] h-full grid grid-cols-2 gap-8 ">
                    <div className="box1 w-full flex justify-end items-start">
                      
                        {<img src={singleProduct.image} alt="" />}
                        {/* <img src={singleProduct.image[1].url} alt=""  /> */}
                        {/* <img src={singleProduct.image[2].url} alt="" /> */}
                        {/* <img src={singleProduct.image[3].url} alt="" />   */}
                    </div>
                    <div className="box2 flex flex-col justify-start items-start gap-2 text-xs">
                        <h1 className="text-2xl">{singleProduct.name}</h1>
                        <p className=" font-semibold line-through">MRP : {(singleProduct.price / 100)+2500}</p>
                        <p className=" text-blue-800">Deal of the Day : {singleProduct.price /100}</p>
                        <p className=" text-gray-700">{singleProduct.description}</p>
                        <div></div>
                        <p>Available : <span className="font-semibold">{(singleProduct.stock)?"In stock":"Out of Stock"} </span></p>
                        <p>ID : <span className="font-semibold">{singleProduct.id} </span></p>
                        <p>Brand : <span className="font-semibold">{singleProduct.company}</span> </p>
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