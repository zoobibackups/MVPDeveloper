import React from 'react';
// import FullfillmentScreen from '../home/FullfillmentScreen';
// import Manifest from '../home/Manifest';
import {useNavigation} from '@react-navigation/native';

import {StackActions} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from '@iconify/react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  Alert,
  Image,
  stylesSheet,
} from 'react-native';
import {
  Search,
  ArrowUpCircle,
  ArrowDownCircle,
  Calendar,
  RotateCcw,
  Target,
} from 'react-native-feather';
// import {Circle} from 'react-native-svg';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import History1 from './History1';
import History2 from './History2';
import HistoryAndProgress from './HistoryAndProgress';

const Combined = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
        
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'rgba(187, 193, 173,1)',
            borderTopLeftRadius: 20,
            // colors:{['#FDFFF4','#BBC1AD']},
            // start:{{x: 0, y: 0}},
            // end:{{x: 0.8, y: 0}},
            borderTopRightRadius: 20,
            borderWidth: 0.5,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 1,
            borderColor: 'grey',
          },
        }}>
        <Tab.Screen
          name="History1"
          component={History1}
          options={{
            headerShown: false,

            tabBarIcon: ({focused}) => (
              <>
                <Calendar size={2} color={focused ? '#1B1561' : 'grey'} />
              </>
            ),

            tabBarLabel: ({focused, color, size}) => (
              <View
                style={{
                  height: getHeight(2),
                  width: getWidth(15),
                  borderRadius: 20,
                  // backgroundColor: 'black',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  // borderWidth:1
                }}>
                <View
                  style={{
                    height: getHeight(2),
                    // marginTop:10,
                    width: getWidth(15),
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    // borderRadius:20,
                    backgroundColor: focused ? '#1B1561' : 'transparent',
                    // borderWidth:1
                  }}></View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History2"
          component={History2}
          options={{
            headerShown: false,

            tabBarLabel: ({focused, color, size}) => (
              <View
                style={{
                  height: getHeight(2),
                  width: getWidth(15),
                  borderRadius: 20,
                  // backgroundColor: 'white',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  // borderWidth:1
                }}>
                <View
                  style={{
                    height: getHeight(2),
                    width: getWidth(15),
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: focused ? '#1B1561' : 'transparent',
                    // borderWidth:1
                  }}></View>
              </View>
            ),
            tabBarIcon: ({focused}) => (
              <>
                <RotateCcw size={2} color={focused ? '#1B1561' : 'gray'} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="HistoryAndProgress"
          component={HistoryAndProgress}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color, size}) => (
              <View
                style={{
                  height: getHeight(2),
                  width: getWidth(10),
                  borderRadius: 20,
                  // backgroundColor: 'white',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  // borderWidth:1
                }}>
                <View
                  style={{
                    height: getHeight(2),
                    width: getWidth(15),
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: focused ? '#1B1561' : 'transparent',
                    // borderWidth:1
                  }}></View>
              </View>
            ),
            tabBarIcon: ({focused}) => (
              <>
                <Target size={24} color={focused ? '#1B1561' : 'gray'} />
                {/* <Icon icon="icon-park-outline:target" /> */}
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Combined;
