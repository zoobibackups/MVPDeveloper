import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import CustomHeader from "../Components/CustomHeader";
import theme from "../Constants/theme";
import { globalstyles } from "../styles/globalestyles";
const Sport1 = () => {
  const navigation = useNavigation();
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
          onPress={() => navigation.navigate("SignUp22")}
          style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
        >
          <Text style={globalstyles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp26")}
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
