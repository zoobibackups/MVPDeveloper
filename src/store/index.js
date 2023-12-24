import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userReducer";
import { userApi } from "./services/userApi";
import { scheduleApi } from "./services/scheduleApi";
import { workOutApi } from "./services/workOutApi";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "accounttype",
    "user",
    "accessToken",
    "isLoggedIn",
    "refreshToken",
    "foodMetaData",
  ],
};

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [scheduleApi.reducerPath]:scheduleApi.reducer,
  [workOutApi.reducerPath]:workOutApi.reducer,
  userReducer: persistReducer(persistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(userApi.middleware).concat(workOutApi.middleware).concat(scheduleApi.middleware),
});
export const persistor = persistStore(store);
