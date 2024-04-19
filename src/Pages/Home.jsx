import React from "react";
import Hero_section from "../Components/Hero_section";
import Trusted_section from "../Components/Trusted_section";


const Home=()=>{

    return(
        <>

            {/* <h1>Hello I am the Home Page</h1> */}
            <Hero_section heading="The Ecommerce Website"/>
            <Trusted_section/>
        </>
    )
}

export default Home;