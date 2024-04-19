import React from "react";



const Hero_section=(props)=>{

    return(
        <>
           <div className="hero_section w-full h-[90vh] flex justify-center items-center ">
                <div className="container w-[90%] h-full grid grid-cols-1 py-6 px-12 xl:grid-cols-2">
                    <div className="box1 w-full h-full flex flex-col justify-center items-start pl-32 pr-8 gap-0.5">
                        <p className="uppercase text-xs">Welcome to </p>
                        <h1 className="text-3xl font-semibold"> {props.heading}</h1>
                        <p className="mt-4 text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint, voluptates et dolor alias nihil quisquam libero mollitia nostrum ducimus?</p>
                        <button className="py-3 px-4 bg-purple-700 text-white mt-4 text-xs uppercase">Shop Now</button>
                    </div>
                    <div className="box2 w-full h-full flex justify-center items-center pl-10">
 
                            <img src="../public/img/hero.jpg" alt="" className="w-[70%] h-auto " />
                           
                        
                    </div>
                </div>
           </div>
        </>
    )
}

export default Hero_section;