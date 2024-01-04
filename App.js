import React from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainApp from "./src/navigation";
import { persistor, store } from "./src/store/index";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Config from "./env";
import { GestureHandlerRootView } from "react-native-gesture-handler";

GoogleSignin.configure({
  scopes: [],
  webClientId: Config.WEB_CLIENT_ID,
  offlineAccess: true,
  hostedDomain: "",
  loginHint: "",
  forceCodeForRefreshToken: true,
  accountName: "",
  iosClientId: Config.IOS_CLIENT_ID,
});
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={() => {
            SplashScreen.hide();
          }}
        >
          <MainApp />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
