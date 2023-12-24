import {SET_PER_MADE_WORKOUT, EDIT_WORKOUT, GET_WORKOUT} from "../workOutTypes"

export const setPreMadeWorkOut =() => {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
          dispatch({
            type: SET_PER_MADE_WORKOUT,
            payload: data,
          });
          resolve();
        });
    };  
}