import React from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { getWidth, getHeight } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import {
  backward,
  body,
  boxing,
  calesthenics,
  cardio,
  meditation,
  preformly,
  yoga,
} from "../../assets/svg";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import theme from "../Constants/theme";
import HeaderMainScreen from "../Components/HeaderMainScreen";

const data = [
  {
    xml: require("../../assets/images/lifting.png"),
    name: "Weight lifting",
    route: "WeightLiftingBox1",
  },
  {
    xml: yoga,
    name: "Yoga",
    route: "Yoga",
  },
  {
    xml: cardio,
    name: "Cardio",
    route: "Cardio",
  },
  {
    xml: boxing,
    name: "Boxing",
    route: "Boxing",
  },
  {
    xml: meditation,
    name: "Meditation",
    route: "Meditation",
  },
  {
    xml: calesthenics,
    name: "Calisthenics",
    route: "Calisthenics",
  },
  {
    xml: body,
    name: "Body Control",
    route: "BodyControl",
  },
];
const TrainingBox1 = () => {
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
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"PLANS"}
        subTitle={"Choose Plan"}
      />
      <FlatList
        numColumns={2}
        bounces={false}
        data={data}
        style={{ flex: 1, width: getWidth(96) }}
        columnWrapperStyle={{
          margin: moderateScale(5),
          alignItems: "flex-start",
          flexGrow: 1,
          justifyContent: "flex-start",
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
              <LinearGradient
                style={{ ...styles.boxStyle }}
                colors={
                  index == 0
                    ? [theme.blueColor, theme.blueColor]
                    : ["#FDFFF4", "#BBC1AD"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
              >
                {index == 0 ? (
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: getWidth(30),
                    }}
                    source={require("../../assets/images/lifting.png")}
                  />
                ) : (
                  <SvgXml width={getWidth(20)} xml={item.xml} />
                )}
                <Text
                  style={{
                    ...styles.boxStyleText,
                    color: index == 0 ? theme.whiteColor : theme.blackColor,
                  }}
                >
                  {item.name}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
      />
    </LinearGradient>
  );
};

export default TrainingBox1;

const styles = StyleSheet.create({
  boxStyle: {
    alignItems: "center",
    borderRadius: 20,
    height: getHeight(16),
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "#1B1561",
    shadowColor: "rgba(103, 128, 159)",
    width: getHeight(17),
    justifyContent: "space-between",
    paddingVertical: 10,
    marginHorizontal: moderateScale(16),
  },
  boxStyleText: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 2,
  },
});
