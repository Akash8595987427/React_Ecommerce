import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    isLoading : true,
    isError : false,
    products : [],
    featureProduct : [],
    singleProduct : {},
}


const AppProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const getApiData=async()=>{
        dispatch({type : "SET_LOADING"});
        try{
            const api_data = await fetch("https://api.pujakaitem.com/api/products");
            const data = await api_data.json();
            dispatch({type : "SET_API_DATA", payload : data});
            console.log(data);
        }
        catch(err){
            console.log(err);
            dispatch({type : "API_Error"})
        }
    }

    const getSingleProductData=async(url)=>{
        try{
            const api_data = await fetch(url);
            const singleProduct_Data = await api_data.json();
            dispatch({type: "SET_SINGLE_PRODUCT", payload : singleProduct_Data})
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getApiData();
    }, [])

    return(
        <AppContext.Provider value={{...state, getSingleProductData}}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}