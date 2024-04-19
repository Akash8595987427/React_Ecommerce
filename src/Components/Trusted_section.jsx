import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiCheckedShield } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCube } from "react-icons/fa6";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { TbHexagonLetterZ } from "react-icons/tb";
import { BiLogoDigitalocean } from "react-icons/bi";
import { IoLogoVimeo } from "react-icons/io";

const Trusted_section=()=>{
    return(
        <>
          <div className="trusted_section w-full h-[89vh] flex flex-col justify-center items-center my-16 md:h-auto">
            <div className="feature_container container w-[80%] h-full grid grid-cols-1 place-items-center gap-8 px-12 lg:grid-cols-3 md:w-[100%]">
                <div className="box1 w-full h-48 bg-sky-100 flex flex-col justify-center items-center">
                    <TbTruckDelivery className="text-3xl text-purple-700"/> 
                    Super Fast and Free Delivery
                </div>
                <div className="box2 w-full h-48 grid grid-rows-2 gap-8 place-items-center">
                    <div className="container1 w-full h-full flex justify-center items-center gap-4 bg-sky-100">      <GiCheckedShield className="text-3xl text-purple-700" />  
                    Non-contact Shipping
                    </div>
                    <div className="container2 w-full h-full flex justify-center items-center gap-4 bg-sky-100">  <GiReceiveMoney className="text-3xl text-purple-700" />
                    Money-back Guaranteed
                      </div>
                </div>
                <div className="box3 w-full h-48 bg-sky-100 flex flex-col justify-center items-center">
                    <RiSecurePaymentFill className="text-3xl text-purple-700"/>
                    Super Secure Payment System
                </div>
            </div>

            <div className="trusted_container container w-[80%] h-52 flex flex-col justify-center items-center bg-sky-100 my-20 py-20 gap-8">
                <h1 className="w-full h-full flex justify-center items-center text-sm font-semibold">Trusted By 1000+ Companies</h1>
                <div className="trusted_container w-full h-full grid grid-cols-5 place-items-center gap-4 px-20">
                    <div className="trusted_box1 w-full text-3xl"> <TbHexagonLetterZ /> </div>
                    <div className="trusted_box2 w-full text-3xl"><BiLogoDigitalocean /></div>
                    <div className="trusted_box3 w-full text-lg flex"> <FaCube/> </div>
                    <div className="trusted_box4 w-full text-3xl"><IoLogoVimeo /></div>
                    <div className="trusted_box5 w-full text-3xl"><HiOutlineChartSquareBar /></div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Trusted_section;