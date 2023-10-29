import {
  SET_STACK,
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

const initialState = {
  accounttype: null,
  user: null,
  accessToken: null,
  foodMetaData: {
    age: null,
    height: null,
    weight: null,
    gender: null,
    workout: null,
    finalGoal: null,
    goalWeight: null,
    goalAchieveTime: null,
    isFollowDiet: null,
    dietPrefrence: null,
    favoriteCuisines: null,
    isWantToAvoid: null,
    avoidIngredients: null,
    avoidMeals: null,
    isWantToSeeMore: null,
    seeMoreIngredients: null,
    seeMoreMeals: null,
    carbohydrates: null,
    protein: null,
    fats: null,
    isNeedSchedule: null,
    breakfast: null,
    lunch: null,
    snack: null,
    dinner: null,
    timeInKitchen: null,
    budget: null,
  },
  whichStack: "LandingStack",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STACK: {
      return {
        ...state,
        whichStack: action.payload,
      };
    }
    case SET_AGE_HEIGHT_WEIGHT: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_WORKOUT_TIME: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          workout: action.payload.value
        },
      };
      
    }
    case SET_GOAL: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case DIETRY_PREFERENCES: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_GOAL_WEIGHT_TIME: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_FAVORITE_CUISINES: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_THINGS_TO_AVOID: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_MORE_THINGS_TO_AVOID: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_MICRO_NUTRIENTS: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_SCHEDULE: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_TIME_IN_KITCHEN: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    case SET_BUDGET: {
      return {
        ...state,
        foodMetaData: {
          ...foodMetaData,
          age: action.payload.age,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
        },
      };
    }
    default:
      return state;
  }
};
export default userReducer;
