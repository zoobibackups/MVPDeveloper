import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userReducer";
import { mapsApi } from "./services/mapsAPI.js";
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
  [mapsApi.reducerPath]: mapsApi.reducer,
  userReducer: persistReducer(persistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(mapsApi.middleware),
});
export const persistor = persistStore(store);
