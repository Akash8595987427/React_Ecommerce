import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    isLoading : true,
    isError : false,
    products : [],
    featureProduct : [],
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

    useEffect(()=>{
        getApiData();
    }, [])

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}