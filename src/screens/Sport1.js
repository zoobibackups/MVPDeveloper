import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import CustomHeader from "../Components/CustomHeader";
import theme from "../constants/theme";
import { globalstyles } from "../styles/globalestyles";
import { useDispatch } from "react-redux";
import { setTrainIsCurrentlyDoingSports } from "../store/actions/userActions";
const Sport1 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const vaidateData = (value) => {
    if (value) {
      dispatch(setTrainIsCurrentlyDoingSports({ value: value })).then(() => {
        navigation.navigate("SignUp22");
      });
    } else {
      dispatch(setTrainIsCurrentlyDoingSports({ value: value })).then(() => {
        navigation.navigate("SignUp26");
      });
    }
  };
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: 30,
        borderColor: "red",
        height: "100%",
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={"DO YOU CURRENTLY DO ANY\n SPORTS?"}
      />

      <View
        style={{ ...globalstyles.buttonContianer, marginTop: getHeight(10) }}
      >
        <TouchableOpacity
          onPress={() => vaidateData(true)}
          style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
        >
          <Text style={globalstyles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => vaidateData(false)}
          style={{
            ...globalstyles.buttonStyle,
            width: getWidth(70),
            marginTop: getHeight(4),
            backgroundColor: theme.transparentColor,
          }}
        >
          <Text style={{ ...globalstyles.buttonText, color: theme.blueColor }}>
            No
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Sport1;
