import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Easing } from "react-native";
import TrainingLogIn from "../Logins/TrainingLogIn";
import LogIn3 from "../Logins/LogIn3";
import Error1 from "../screens/Error1";
import SignUp18 from "../Signups/SignUp18";
import Connectwatch from "../screens/Connectwatch";
import SignUp19 from "../Signups/SignUp19";
import SignUp20 from "../Signups/SignUp20";
import SignUp21 from "../Signups/SignUp21";
import SignUp17 from "../Signups/SignUp17";
import SignUp18T from "../Signups/SignUp18T";
import Sport1 from "../screens/Sport1";
import SignUp22 from "../Signups/SignUp22";
import SignUp23 from "../Signups/SignUp23";
import SignUp24 from "../Signups/SignUp24";
import SignUp25 from "../Signups/SignUp25";
import SignUp26 from "../Signups/SignUp26";
import SignUp27 from "../Signups/SignUp27";
import SignUp28 from "../Signups/SignUp28";
import SignUp29 from "../Signups/SignUp29";
import SignUp30 from "../Signups/SignUp30";
import SignUp31 from "../Signups/SignUp31";
import SignUp33 from "../Signups/SignUp33";
import TrainingHome1 from "../screens/TrainingHome1";
import fonts from "../constants/fonts";
import { moderateScale } from "../constants/scaling";
import colors from "../constants/theme";
import WhySchedule from "../screens/WhySchedule";
const Stack = createNativeStackNavigator();
function TrainingAuthStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitleAlign: "center",
        headerTintColor: colors.textColor,
        headerTitleStyle: {
          color: colors.textColor,
          fontFamily: fonts.Bold,
          fontSize: moderateScale(14),
        },
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerShown: true,
        headerMode: "float",
        transitionSpec: {
          open: {
            animation: "timing",
            config: { duration: 500, easing: Easing.inOut(Easing.ease) },
          },
          close: {
            animation: "timing",
            config: { duration: 500, easing: Easing.inOut(Easing.ease) },
          },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      })}
      independent={true}
    >
      <Stack.Screen
        name="TrainingLogIn"
        component={TrainingLogIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Error1"
        component={Error1}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="LogIn3"
        component={LogIn3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp18"
        component={SignUp18}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Connectwatch"
        component={Connectwatch}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp19"
        component={SignUp19}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp20"
        component={SignUp20}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp21"
        component={SignUp21}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp17"
        component={SignUp17}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp18T"
        component={SignUp18T}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Sport1"
        component={Sport1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp22"
        component={SignUp22}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp23"
        component={SignUp23}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp24"
        component={SignUp24}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp25"
        component={SignUp25}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp26"
        component={SignUp26}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp27"
        component={SignUp27}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp28"
        component={SignUp28}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp29"
        component={SignUp29}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp30"
        component={SignUp30}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WhySchedule"
        component={WhySchedule}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp31"
        component={SignUp31}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp33"
        component={SignUp33}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TrainingHome1"
        component={TrainingHome1}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default TrainingAuthStackNavigation;
