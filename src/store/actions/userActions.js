import { LOGGED_IN, SET_STACK } from "../types";

export const setUserLoggedIn = () => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: LOGGED_IN,
        payload: true,
      });
      resolve();
    });
  };
};

export const setStack = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_STACK,
        payload: stack,
      });
      resolve();
    });
  };
};
