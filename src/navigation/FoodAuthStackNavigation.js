import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Easing } from 'react-native';
import LogIn1 from '../Logins/LogIn1';
import LogIn2 from '../Logins/LoginIn2';
import SignUp1 from '../Signups/SignUp1';
import SignUp10 from '../Signups/SignUp10';
import SignUp11 from '../Signups/SignUp11';
import SignUp12 from '../Signups/SignUp12';
import SignUp13 from '../Signups/SignUp13';
import SignUp14 from '../Signups/SignUp14';
import SignUp2 from '../Signups/SignUp2';
import SignUp3 from '../Signups/SignUp3';
import SignUp6 from '../Signups/SignUp6';
import SignUp7 from '../Signups/SignUp7';
import SignUp8 from '../Signups/SignUp8';
import SignUp9 from '../Signups/SignUp9';
import fonts from '../constants/fonts';
import { moderateScale } from '../constants/scaling';
import colors from '../constants/theme';
import BusinessSignUp from '../screens/BusinessSignUp';
import HomeScreen from '../screens/Home';
import MicroNutrientsScreen from '../screens/MicroNutrientsScreen';
import TimeInKitchen from '../screens/TimeInKitchen';
import WhySchedule from '../screens/WhySchedule';
const Stack = createNativeStackNavigator();
function FoodAuthStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitleAlign: 'center',
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
        headerMode: 'float',
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {duration: 500, easing: Easing.inOut(Easing.ease)},
          },
          close: {
            animation: 'timing',
            config: {duration: 500, easing: Easing.inOut(Easing.ease)},
          },
        },
        cardStyleInterpolator: ({current: {progress}}) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      })}
      independent={true}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusinessSignUp"
        component={BusinessSignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogIn1"
        component={LogIn1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogIn2"
        component={LogIn2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp1"
        component={SignUp1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp2"
        component={SignUp2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp3"
        component={SignUp3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp13"
        component={SignUp13}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp14"
        component={SignUp14}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp6"
        component={SignUp6}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp7"
        component={SignUp7}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp8"
        component={SignUp8}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp9"
        component={SignUp9}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MicroNutrientsScreen"
        component={MicroNutrientsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp10"
        component={SignUp10}
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
        name="TimeInKitchen"
        component={TimeInKitchen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp11"
        component={SignUp11}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp12"
        component={SignUp12}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
}

export default FoodAuthStackNavigation;

