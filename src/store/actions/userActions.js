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
  SET_USER_SIGNED_IN,
  SET_USER_LOGGED_IN,
  SET_ACCOUNT_TYPE,
  SET_TRAIN_AGE_HEIGHT_WEIGHT,
  SET_TRAIN_USER_SIGNED_IN,
  SET_TRAIN_USER_LOGGED_IN,
  SET_TRAIN_WORK_OUT,
  SET_TRAIN_FINAL_GOAL,
  SET_TRAIN_ESTIMATED_TARGET_DATE,
  SET_TRAIN_TIME_SPENT_EXERCISING,
  SET_TRAIN_WORKOUT_PLACE,
  SET_TRAIN_IS_CURRENTLY_DOING_SPORTS,
  SET_TRAIN_SPORTS_NAME,
  SET_TRAIN_SPORTS_TIME,
  SET_TRAIN_IS_TRUSTS,
  SET_TRAIN_PREFERRED_WORKOUT,
  SET_TRAIN_PREFERRED_WORKOUT_AVOID,
  SET_TRAIN_EQUIPMENTS,
  SET_TRAIN_EXERCISE,
  SET_TRAIN_WORKOUT_DAYS
} from "../types";

export const  setAccountType = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_ACCOUNT_TYPE,
        payload: data,
      });
      resolve();
    });
  };
}
export const  setUserSignUp = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_USER_SIGNED_IN,
        payload: data,
      });
      resolve();
    });
  };
}
export const setUserLogin =  (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_USER_LOGGED_IN,
        payload: data,
      });
      resolve();
    });
  };
}
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
export const setStack = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_STACK,
        payload: data,
      });
      resolve();
    });
  };
};


// Training User functions 

export const  setTrainUserSignUp = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_USER_SIGNED_IN,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainUserLoggedIn = () => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_USER_LOGGED_IN,
        payload: true,
      });
      resolve();
    });
  };
};

export const setTrainAgeHeightWeight = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_AGE_HEIGHT_WEIGHT,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainUserWorkOut = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_WORK_OUT,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainFinalGoal = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_FINAL_GOAL,
        payload: data,
      });
      resolve();
    });
  };
  
}

export const setTrainEstimatedTargetDate = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_ESTIMATED_TARGET_DATE,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainTimeSpentInExercise = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_TIME_SPENT_EXERCISING,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainWorkOutPlace = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_WORKOUT_PLACE,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainIsCurrentlyDoingSports = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_IS_CURRENTLY_DOING_SPORTS,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainSportsName = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_SPORTS_NAME,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainSportsTime = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_SPORTS_TIME,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainIsTrusts = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_IS_TRUSTS,
        payload: data,
      });
      resolve();
    });
  };
}


export const setTrainPreferredWorkOut = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_PREFERRED_WORKOUT,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainPreferredWorkOutAvoid = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_PREFERRED_WORKOUT_AVOID,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainEquipments = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_EQUIPMENTS,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainExercise = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_EXERCISE,
        payload: data,
      });
      resolve();
    });
  };
}

export const setTrainWorkOutDays = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: SET_TRAIN_WORKOUT_DAYS,
        payload: data,
      });
      resolve();
    });
  };
}


export const setTrainingData = (data) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: "SET_TRAIN_COMPLETE_DATA",
        payload: data,
      });
      resolve();
    });
  };
}