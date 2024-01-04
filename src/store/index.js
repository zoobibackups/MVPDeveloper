import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userReducer";
import { userApi } from "./services/userApi";
import { scheduleApi } from "./services/scheduleApi";
import { workOutApi } from "./services/workOutApi";
import { categoryApi } from "./services/categoryApi";
import { dietScheduleApi } from "./services/dietScheduleApi";
import { recipesApi } from "./services/recipesApi";
import { subCategoryApi } from "./services/subCategoryApi";
import { userExercise } from "./services/userExercise";
import { userExerciseLogs } from "./services/userExerciseLogs";
import { userSetsApi } from "./services/userSetsApi";
import { userWorkOut } from "./services/userWorkOut";
import { userWorkOutLogs } from "./services/userWorkOutLogs";
import chatgptReducers from "./reducers/chatgptReducers";
import userWeightReducer from "./reducers/userWeightReducer";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "accounttype",
    "whichStack",
    "user",
    "accessToken",
    "isLoggedIn",
    "refreshToken",
    "foodMetaData",
  ],
};

const chatPresist = {
  key:"chatgpt",
  storage:AsyncStorage,
  whitelist:[
    "weeklySchedule"
  ]
}


const userWeightReducerPersist = {
  key:"userWeightReducerPer",
  storage:AsyncStorage,
  whitelist:["userWeight"]
}
const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [scheduleApi.reducerPath]: scheduleApi.reducer,
  [workOutApi.reducerPath]: workOutApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [dietScheduleApi.reducerPath]: dietScheduleApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
  [subCategoryApi.reducerPath]: subCategoryApi.reducer,
  [userExercise.reducerPath]: userExercise.reducer,
  [userExerciseLogs.reducerPath]: userExerciseLogs.reducer,
  [userSetsApi.reducerPath]: userSetsApi.reducer,
  [userWorkOut.reducerPath]: userWorkOut.reducer,
  [userWorkOutLogs.reducerPath]: userWorkOutLogs.reducer,
  userReducer: persistReducer(persistConfig, userReducer),
  chatgptReducer:persistReducer(chatPresist, chatgptReducers),
  userWeightReducer:persistReducer(userWeightReducerPersist,userWeightReducer)
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(userApi.middleware)
      .concat(workOutApi.middleware)
      .concat(scheduleApi.middleware)
      .concat(categoryApi.middleware)
      .concat(dietScheduleApi.middleware)
      .concat(recipesApi.middleware)
      .concat(subCategoryApi.middleware)
      .concat(userExercise.middleware)
      .concat(userExerciseLogs.middleware)
      .concat(userSetsApi.middleware)
      .concat(userWorkOut.middleware)
      .concat(userWorkOutLogs.middleware),
});
export const persistor = persistStore(store);
