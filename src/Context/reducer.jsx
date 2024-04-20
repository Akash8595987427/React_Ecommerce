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
                return curElem.feature === true;
            })
            return{
                ...state,
                isLoading : false,
                products : action.payload,
                featureProduct : featureData,
            }


        default :
        return state;
    }
    
  

    
}

export default reducer;