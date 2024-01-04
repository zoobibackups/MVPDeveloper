import {DELETE_WEIGHT, ADD_WEIGHT } from "../types";


export const addUserWeight = (data) => {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
          dispatch({
            type: ADD_WEIGHT,
            payload: data,
          });
          resolve();
        });
      };
}


export const deleteUserWeight = (index) => {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
          dispatch({
            type:DELETE_WEIGHT,
            payload: index,
          });
          resolve();
        });
      };
}