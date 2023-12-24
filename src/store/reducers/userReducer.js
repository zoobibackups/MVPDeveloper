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
  SET_USER_SIGNED_IN,
  SET_USER_LOGGED_IN,
  SET_ACCOUNT_TYPE,
  SET_TRAIN_USER_SIGNED_IN,
  SET_TRAIN_AGE_HEIGHT_WEIGHT,
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

const initialState = {
  accounttype: null,
  user: null,
  accessToken: null,
  isLoggedIn: false,
  refreshToken: null,
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
  trainingMetaData: {
    age: null,
    height:null,
    weight: null,
    gender:null,
    workout: null,
    finalGoal: null,
    estimatedTargetDate:null,
    weightPerWeek: null,
    timeSpendExercising: null,
    workoutPlace: null,
    isCurrentlyDoSport: true,
    sportsName:null,
    sportsPracticeTime:null,
    isTrustus: true,
    preferedWorkout:null,
    avoidWorkout:null,
    equipments:null,
    exercises: null,
    isNeedSchedule: false,
    workourdays:null
  },
  whichStack: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRAIN_COMPLETE_DATA":{
      return{
        ...state,
        trainingMetaData: action.payload
      }
    }
    case SET_TRAIN_WORK_OUT:{
      return{
        ...state,
        trainingMetaData: {
          ...state.trainingMetaData,
          workout:action.payload.value
        }
      }
    }
    case SET_TRAIN_FINAL_GOAL:{
      return{
        ...state,
        trainingMetaData: {
          ...state.trainingMetaData,
          finalGoal:action.payload.value
        }
      }
    }
    case SET_TRAIN_ESTIMATED_TARGET_DATE:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          estimatedTargetDate:action.payload.estimatedTargetDate,
          weightPerWeek:action.payload.weightPerWeek,
        }
      }
    }
    case SET_TRAIN_TIME_SPENT_EXERCISING:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          timeSpendExercising:action.payload.value
        }
      }
    }
    case SET_TRAIN_WORKOUT_PLACE:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          workoutPlace:action.payload.value
        }
      }
    }
    case SET_TRAIN_IS_CURRENTLY_DOING_SPORTS:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          isCurrentlyDoSport:action.payload.value
        }
      }
    }
    case SET_TRAIN_SPORTS_NAME:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          sportsName:action.payload.value
        }
      }
    }
    case SET_TRAIN_SPORTS_TIME:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          sportsPracticeTime:action.payload.value
        }
      }
    }
    case SET_TRAIN_IS_TRUSTS:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          isTrustus:action.payload.value
        }
      }
    }
    case SET_TRAIN_PREFERRED_WORKOUT:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          preferedWorkout:action.payload.value
        }
      }
    }
    case SET_TRAIN_PREFERRED_WORKOUT_AVOID:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          avoidWorkout:action.payload.value
        }
      }
    }
    case SET_TRAIN_EQUIPMENTS:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          equipments:action.payload.value
        }
      }
    }
    case SET_TRAIN_EXERCISE:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          exercises:action.payload.value
        }
      }
    }
    case SET_TRAIN_WORKOUT_DAYS:{
      return{
        ...state,
        trainingMetaData:{
          ...state.trainingMetaData,
          isNeedSchedule:action.payload.isNeedSchedule,
          workourdays:action.payload.workourdays
        }
      }
    }  
    case SET_STACK: {
      return {
        ...state,
        whichStack: action.payload.whichStack,
        accounttype: action.payload.accounttype,
      };
    }
    case SET_ACCOUNT_TYPE: {
      return {
        ...state,
        accounttype: action.payload,
      };
    }
    case SET_USER_LOGGED_IN: {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: true,
      };
    }
    case SET_USER_SIGNED_IN: {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: true,
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
          workout: action.payload.value,
        },
      };
    }
    case SET_GOAL: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          finalGoal: action.payload.value,
        },
      };
    }
    case SET_GOAL_WEIGHT_TIME: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          goalWeight: action.payload.weight,
          goalAchieveTime: action.payload.time,
        },
      };
    }
    case DIETRY_PREFERENCES: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          dietPrefrence: action.payload.value,
          isFollowDiet: action.payload.isNeedSchedule,
        },
      };
    }
    case SET_FAVORITE_CUISINES: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          favoriteCuisines: action.payload.value,
        },
      };
    }
    case SET_THINGS_TO_AVOID: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          isWantToAvoid: action.payload.checked,
          avoidIngredients: action.payload.ingredients,
          avoidMeals: action.payload.meal,
        },
      };
    }
    case SET_MORE_THINGS_TO_AVOID: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          isWantToSeeMore: action.payload.checked,
          seeMoreIngredients: action.payload.ingredients,
          seeMoreMeals: action.payload.meal,
        },
      };
    }
    case SET_MICRO_NUTRIENTS: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          carbohydrates: action.payload.carbohydrates,
          protein: action.payload.protine,
          fats: action.payload.fats,
        },
      };
    }
    case SET_SCHEDULE: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          lunch: action.payload.lunch,
          snack: action.payload.snack,
          breakfast: action.payload.breakfast,
          dinner: action.payload.dinner,
          isNeedSchedule: action.payload.isNeedSchedule,
        },
      };
    }
    case SET_TIME_IN_KITCHEN: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          timeInKitchen: action.payload.value,
        },
      };
    }
    case SET_BUDGET: {
      return {
        ...state,
        foodMetaData: {
          ...state.foodMetaData,
          budget: action.payload.value,
        },
      };
    }
    case SET_TRAIN_USER_LOGGED_IN: {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: true,
      };
    }
    case SET_TRAIN_USER_SIGNED_IN: {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: true,
      };
    }
    case SET_TRAIN_AGE_HEIGHT_WEIGHT: {
      return {
        ...state,
        trainingMetaData: {
          ...state.trainingMetaData,
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
