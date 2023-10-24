import { SET_STACK } from "../types";

const initialState = {
  accounttype:null,
  user:null,
  whichStack:"LandingStack"
};
const userReducer = (state = initialState, action) => {
  switch (action.type) { 
    case SET_STACK:{
      return{
        ...state,
        whichStack:action.payload
      }
    }   
    default:
      return state;
  }
};
export default userReducer;