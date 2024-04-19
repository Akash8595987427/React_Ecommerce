import React, { useContext, useEffect, useState } from "react"

const AppContext = React.createContext();


const AppProvider=({children})=>{
    // const [data, setData] = useState([]);

    const getApiData=async()=>{
        const api_data = await fetch("https://api.pujakaitem.com/api/products");
        const data = await api_data.json();
        console.log(data);
    }

    useEffect(()=>{
        getApiData();
    }, [])

    return(
        <AppContext.Provider value={{name : "Akash Singh Bhandari"}}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}