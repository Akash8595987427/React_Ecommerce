import React from "react";


const reducer=(state, action)=>{


    switch(action.type){

        case "SET_LOADING" :
            return{
                ...state,
                isLoading : false,
            }

        case "API_Error" : 
            return{
                ...state,
                isError : true,
            }
        
        case "SET_API_DATA" :
            const featureData = action.payload.filter((curElem)=>{
                return curElem.featured === true;
            })
            return{
                ...state,
                isLoading : false,
                products : action.payload,
                featureProduct : featureData,
            }

        case "SET_SINGLE_PRODUCT" :
            return{
                ...state,
                singleProduct : action.payload,
    
            }


        default :
        return state;
    }
    
  

    
}

export default reducer;