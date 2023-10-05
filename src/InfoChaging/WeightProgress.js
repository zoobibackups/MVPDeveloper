import React from "react";

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import HeaderMainScreen from "../Components/HeaderMainScreen";

const data = ["67 Kg", "66 Kg", "64 Kg", "60 Kg", "59 Kg", "58 Kg"];
const WeightProgress = () => {
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
        title={"PROGRESS"}
        subTitle={"Your progress pictures"}
        subTitleStyle={{
          textAlign: "center",
          alignSelf: "center",
        }}
      />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item}</Text>
              <Image
                style={{
                  width: getWidth(25),
                  height: getHeight(15),
                }}
                source={require("../../assets/images/weights.png")}
              />
            </View>
          );
        }}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: getWidth(35),
    height: getHeight(20),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 2,
  },
});
export default WeightProgress;
