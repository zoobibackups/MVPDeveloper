import React from "react";
import { View, ActivityIndicator } from "react-native";
import theme from "../constants/theme";
import { hp, wp } from "../constants/scaling";
import { Text } from "react-native";
import textStyles from "../styles/globalestyles";

const Loading = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: hp(10),
        bottom: 0,
        width:wp(100),
        height:hp(100),
        borderRadius:10,
        left: 0,
        right: 0, backgroundColor:"#0002",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator color={theme.blueColor} />
      <Text style={{...textStyles.mediumText, color:theme.blueColor}}>Processing</Text>
    </View>
  );
};

export default Loading;
