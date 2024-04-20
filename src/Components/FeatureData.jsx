import React from "react";
import { useGlobalContext } from "../Context/product_context";
import Product from "../Pages/Product";


const FeatureData=()=>{
    const {isLoading, featureProduct} = useGlobalContext();

    if(isLoading){
        return <div className="w-full text-center"> ......Loading </div>
    }

    return(
        <>

           <div className="feature_section w-full h-[89vh] flex justify-center items-center bg-slate-200 py-8">
            <div className="container w-[80%] h-full flex flex-col justify-start items-start">
                <p className="uppercase text-xs text-gray-400">Check Now</p>
                <h1 className="uppercase text-2xl">Our Feature Services</h1>
                
                <div className="feature_container w-full h-full flex flex-row justify-center items-center gap-3 bg-purple-700">
                    {
                        featureProduct.map((currElem)=>{
                            return(
                                <Product key={currElem.id} index={currElem.id} element = {currElem}/>
                                
                            )
                        })
                  
                    }
                </div>
            </div>
           </div>


        </>
    )
}

export default FeatureData;