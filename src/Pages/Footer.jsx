import React from "react"
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



const Footer=()=>{

    return(
        <>
          <div className="footer_section w-full h-[40vh] bg-blue-950 text-white flex flex-col justify-center items-center relative">
            <div className="footer_section2 absolute w-[60%] h-[20vh] bg-slate-100 text-black -top-14 flex justify-around items-center rounded-md">
                <div className="heading text-sm">
                    <h1>Ready to get started ?</h1>
                    <h1>Talk to us today </h1>
                </div>
                <button className="text-sm py-1.5 px-3 bg-purple-700 text-white">Get Started</button>
            </div>
            <div className="container w-[70%] h-full grid grid-cols-4 gap-12 place-items-center my-12 ">
                <div className="panel_1 w-full h-20 flex flex-col gap-2 justify-start items-start ">
                    <p className="text-sm uppercase"> Ecomm Website </p>
                    <p className="text-xs"> Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div className="panel_2  w-full h-20 flex flex-col gap-2 justify-start items-start ">
                    <p className="text-sm">Subscriber to get important updates</p>
                    <input type="text" placeholder="Email" className="px-4 w-[95%] py-1 rounded-md" />
                    <button className="py-1 px-3 bg-purple-700 text-white mt-2">Subscribe</button>
                </div>
                <div className="panel_3  w-full h-20 flex flex-col gap-2 justify-start items-start ">
                    <p className="text-sm uppercase"> Follow Us</p>
                    <div className="social w-full flex justify-start items-center gap-4 ">
                        <FaDiscord className="text-2xl" />
                        <FaInstagram className="text-2xl" />
                        <FaYoutube className="text-2xl" />
                    </div>
                </div>
                <div className="panel_4 w-full h-20 flex flex-col gap-2 justify-start items-start ">
                    <p className="text-sm uppercase">Call us</p> 
                    <p className="text-sm">+91 1234567890</p> 
                </div>
            </div>
              
          </div>
        </>
    )
}

export default Footer