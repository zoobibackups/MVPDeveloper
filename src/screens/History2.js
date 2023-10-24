import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, Text, StyleSheet, TextInput, View } from "react-native";
import { Search } from "react-native-feather";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import ExerciseItem from "../Components/ExerciseItem";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import fonts from "../constants/fonts";

const History2 = () => {
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
        title={"RECENT WORKOUT"}
        subTitle={""}
      />
      <ScrollView>
        <View
          style={{
            borderColor: "green",
            marginTop: 20,
            width: getWidth(90),
            height: getHeight(15),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: getWidth(90),
              height: getHeight(6),
              borderRadius: 20,
              paddingLeft: 10,
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Search size={30} color="#808080" />
            <TextInput
              placeholder="keywords for your exercise or pass"
              style={{ borderWidth: 0, marginLeft: moderateScale(10) }}
            />
          </View>
          <View style={styles.sortRow}>
            <Text style={styles.sortText}>Sort:</Text>
            <Text style={styles.sortText}>A-Z</Text>
          </View>
        </View>
        <View
          style={{
            width: getWidth(95),
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default History2;

const styles = StyleSheet.create({
  sortRow: {
    borderColor: "grey",
    width: getWidth(80),
    height: getHeight(5),
    borderRadius: 20,
    paddingLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sortText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 2,
  },
});
