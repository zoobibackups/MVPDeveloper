import {
  SET_STACK,
  LOGGED_IN,
  SET_AGE_HEIGHT_WEIGHT,
  SET_WORKOUT_TIME,
  SET_GOAL,
  DIETRY_PREFERENCES,
  SET_GOAL_WEIGHT_TIME,
  SET_FAVORITE_CUISINES,
  SET_THINGS_TO_AVOID,
  SET_MORE_THINGS_TO_AVOID,
  SET_MICRO_NUTRIENTS,
  SET_SCHEDULE,
  SET_TIME_IN_KITCHEN,
  SET_BUDGET,
} from "../types";


export const setAgeHeightWeight = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_AGE_HEIGHT_WEIGHT,
        payload: data,
      });
      resolve();
    });
  };
};
export const setWorkOutTime = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_WORKOUT_TIME,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setGoal = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_GOAL,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setGoalWeightTime = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type:   SET_GOAL_WEIGHT_TIME,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setDietryPreferences = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: DIETRY_PREFERENCES,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setFavoriteCuisines = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_FAVORITE_CUISINES,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setThingsToAvoid = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_THINGS_TO_AVOID,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setMoreThingsToAvoid = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_MORE_THINGS_TO_AVOID,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setMicroNutrients = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_MICRO_NUTRIENTS,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setSchedule = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_SCHEDULE,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setTimeInKitchen = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TIME_IN_KITCHEN,
        payload: stack,
      });
      resolve();
    });
  };
};
export const setBudget = (stack) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_BUDGET,
        payload: stack,
      });
      resolve();
    });
  };
};
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
