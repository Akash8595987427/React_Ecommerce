import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/product_context";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import PageNavigation from "../Components/PageNavigation";


const Api = "https://api.pujakaitem.com/api/products";


const SingleProduct=(props)=>{
    const {id} = useParams();
    const {singleProduct, getSingleProductData} = useGlobalContext();

    //*  This the method to remove the dynamic image error 
    if(singleProduct.image == null){
        singleProduct.image = [{url : " "}];
    }


    useEffect(()=>{
        getSingleProductData(`${Api}?id=${id}`)
        console.log(`${Api}?id=${id}`);
    }, [])


    const [mainImage, setMainImage] = useState(singleProduct.image[0]);        //* This is use to set the big img at the right */





    


    console.log(singleProduct);
    return(
       
        <>
            <PageNavigation title={singleProduct.name}/>
            <div className="single_product_section w-full h-auto flex justify-center items-center my-[10vh] gap-12">
                <div className="container w-[80%] h-full flex justify-center items-center gap-12">

                <div className="single_product_image_section w-full h-full grid grid-cols-[1fr_5fr] gap-4 ">
                        <div className="box1 w-full h-full grid justify-center items-start grid-col-4 gap-3 ">
                            {
                                singleProduct.image.map((currElem, index)=>{
                                    return(
                                        <>
                                        <img
                                         src={currElem.url}
                                         index={currElem.id} 
                                         alt="img" 
                                         className="w-full" 
                                         onClick={()=>{setMainImage(currElem)}} /> 
                                        </>
                                    ) 
                                })
                            }
                        </div>

                        <div className="w-full h-full flex justify-center items-center">
                            <img src={mainImage.url}  alt="img" />
                        </div>
                </div>

                  
                    <div className="single_product_info_section w-full flex flex-col justify-start items-start gap-2 text-xs">
                        <h1 className="text-2xl">{singleProduct.name}</h1>
                        <p className=" font-semibold line-through">MRP : {(singleProduct.price / 100)+2500}</p>
                        <p className=" text-blue-800">Deal of the Day : {singleProduct.price /100}</p>
                        <p className=" text-gray-700">{singleProduct.description}</p>
                        <div className="grid grid-cols-4 justify-center gap-12 my-4">
                            <div className=" w-full flex flex-col justify-center items-center">
                                <TbTruckDelivery className="text-2xl flex "/>
                                <p className="text-xs">Free Delivery</p>
                            </div>
                            <div className=" w-full flex flex-col justify-center items-center">
                                <TbReplace className="text-2xl"/>
                                <p  className="text-xs">Free Delivery</p>
                            </div>
                            <div className=" w-full flex flex-col justify-center items-center">
                                <TbTruckDelivery className="text-2xl"/>
                                <p  className="text-xs">Free Delivery</p>
                            </div>
                            <div className=" w-full flex flex-col justify-center items-center">
                                <GiCheckedShield className="text-2xl"/>
                                <p  className="text-xs">Free Delivery</p>
                            </div>
                        </div>
                        <p>Available : <span className="font-semibold">{(singleProduct.stock)?"In stock":"Out of Stock"} </span></p>
                        <p>ID : <span className="font-semibold">{singleProduct.id} </span></p>
                        <p>Brand : <span className="font-semibold">{singleProduct.company}</span> </p>
                        <hr className="w-full mt-3 border-1.5 border-black" />
                        <p>Color : </p>
                        <div >
                     
                        
                        </div>
                        <button className="py-2 px-3 bg-purple-600 text-white text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
            
        </>
    )
}

export default SingleProduct;