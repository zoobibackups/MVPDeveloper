import {DELETE_WEIGHT, ADD_WEIGHT } from "../types";

const initialState = {
    userWeight:[],
    userWeightObj:{
        weight:null,
        image:null
    } 
     
}

const userWeightReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_WEIGHT:
            return{
                ...state,
                userWeight:state.userWeight.splice(action.payload,1)
            }
        case ADD_WEIGHT:
            return{
                ...state,
                userWeight:[...state.userWeight , action.payload]
            }
        default:
            return state
            
    }
}

export default userWeightReducer