import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import {
  arms,
  chest,
  legs,
  pullBig,
  push
} from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { back } from "../Components/Index";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const data = [
  {
    xml: pullBig,
    name: "Pull",
    route: "StartWorkOut",
  },
  {
    xml: push,
    name: "Push",
    route: "StartWorkOutPush",
  },
  {
    xml: legs,
    name: "Legs",
    route: "StartWorkOutLegs",
  },
  {
    xml: arms,
    name: "Arms",
    route: "StartWorkOutArms",
  },
  {
    xml: chest,
    name: "Chest",
    route: "StartWorkOutChest",
  },
  {
    xml: back,
    name: "Back",
    route: "StartWorkOutBack",
  },
];
const WeightLiftingBox1 = () => {
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
        subTitle={"Weight Lifting"}
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
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
              >
                <SvgXml width={getWidth(20)} xml={item.xml} />
                <Text style={styles.boxStyleText}>{item.name}</Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("AllWorkOuts")}
        style={{ ...globalstyles.buttonStyle, width: getWidth(90) }}
      >
        <Text style={globalstyles.buttonText}>All workouts</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default WeightLiftingBox1;

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
