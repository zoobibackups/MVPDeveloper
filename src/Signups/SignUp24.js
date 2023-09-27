import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import CustomHeader from "../Components/CustomHeader";
import theme from "../Constants/theme";
import { globalstyles } from "../styles/globalestyles";

const SignUp24 = () => {
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
        subTitle={"GREAT! YOU ARE ALMOST DONE."}
      />

      <View
        style={{
          paddingVertical: 10,
          height: getHeight(20),
          width: getWidth(80),
          marginTop: 10,
        }}
      >
        <Text style={styles.paragraphText}>
          DO YOU CHOOSE TO TRUST THAT WE WILL CREATE AN ASTONISHING SCHEDULE FOR
          YOU OR WOULD YOU RATHER DIVE INTO DETAILS AND CONTINUE CUSTOMIZING?
          (AROUND 5 MORE MINUTES)
        </Text>
      </View>

      <View
        style={{ ...globalstyles.buttonContianer, marginTop: getHeight(5) }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp22")}
          style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
        >
          <Text style={globalstyles.buttonText}>Trust us</Text>
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
            Continue 5 more mins
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  paragraphText: {
    fontFamily: "AnekBangla-Medium",
    color: "grey",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 2,
  },
});
export default SignUp24;
