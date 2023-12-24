import {SET_PER_MADE_WORKOUT, EDIT_WORKOUT, GET_WORKOUT} from "../workOutTypes"
const initialState = {
    preMadeWorkOut:[],
    customMadeWorkOut:[]
}

const scheduleReducers = (state = initialState, action) => {
    switch(action.type){
        case SET_PER_MADE_WORKOUT:
            return{
                ...state,
                preMadeWorkOut:action.payload

            }
        default:
            return state
            
    }
}

export default scheduleReducers