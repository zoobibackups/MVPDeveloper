import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Easing } from 'react-native';
import fonts from '../constants/fonts';
import { moderateScale } from '../constants/scaling';
import colors from '../constants/theme';
import LandingScreen from '../screens/LandingPage';
const Stack = createNativeStackNavigator();

function LandingStack() {
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
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
}

export default LandingStack;