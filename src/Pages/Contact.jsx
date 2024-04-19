import React from "react";


const Contact=()=>{

    return(
        <>
            <h1 className="w-full h-full text-center my-20 text-xl font-semibold"> Feel Free To Contact Us</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112043.00615443141!2d77.22196463609991!3d28.649418570064746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfabbae31843d%3A0xf5857c74104528f7!2sIndirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713522287853!5m2!1sen!2sin" style={{border: 2}} height="250" className="w-full mb-20" ></iframe>

            <div className="contact_section w-full h-auto my-20 flex justify-center items-center">
                <div className="container w-[35%] h-full flex flex-col justify-center items-start gap-3">
                    <input type="text" placeholder="Username" className="w-full py-1.5 px-4 border-2 border-black rounded-md" />
                    <input type="text" placeholder="Email" className="w-full py-1.5 px-4 border-2 border-black rounded-md" />
                    <textarea name="" id="" cols="30" rows="10" className="w-full border-2 border-black rounded-md px-4 py-2" placeholder="Enter your text"></textarea>
                    <button className="py-1.5 px-4 bg-purple-700 text-white my-4 rounded-md">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Contact;