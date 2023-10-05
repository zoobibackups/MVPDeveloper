import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { StyleSheet, View } from "react-native";
import { Calendar, RotateCcw, Target } from "react-native-feather";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import History1 from "./History1";
import History2 from "./History2";
import HistoryAndProgress from "./HistoryAndProgress";
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from "react-native-linear-gradient";

const Combined = () => {
  return (
    <LinearGradient
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
      style={{ flex: 1}}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="History1"
          component={History1}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                <Calendar
                  width={RFValue(20)}
                  height={RFValue(20)}
                  color={focused ? "#1B1561" : "grey"}
                />
              </>
            ),

            tabBarLabel: ({ focused, color, size }) => (
              <View style={styles.bgContainer}>
                <View
                  style={{
                    ...styles.ActiveView,
                    backgroundColor: focused ? "#1B1561" : "transparent",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History2"
          component={History2}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color, size }) => (
              <View style={styles.bgContainer}>
                <View
                  style={{
                    ...styles.ActiveView,
                    backgroundColor: focused ? "#1B1561" : "transparent",
                  }}
                />
              </View>
            ),
            tabBarIcon: ({ focused }) => (
              <>
                <RotateCcw
                  width={RFValue(20)}
                  height={RFValue(20)}
                  color={focused ? "#1B1561" : "gray"}
                />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="HistoryAndProgress"
          component={HistoryAndProgress}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color, size }) => (
              <View style={styles.bgContainer}>
                <View
                  style={{
                    ...styles.ActiveView,
                    backgroundColor: focused ? "#1B1561" : "transparent",
                  }}
                />
              </View>
            ),
            tabBarIcon: ({ focused }) => (
              <>
                <Target
                  width={RFValue(20)}
                  height={RFValue(20)}
                  color={focused ? "#1B1561" : "gray"}
                />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </LinearGradient>
  );
};

export default Combined;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "rgba(187, 193, 173,1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0,
    shadowColor: "rgba(103, 128, 159)",
    elevation: 10,
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  bgContainer: {
    height: getHeight(0.8),
    width: getWidth(15),
    borderRadius: 20,
    alignItems: "center",
  },
  ActiveView: {
    height: getHeight(0.5),
    width: getWidth(8),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
