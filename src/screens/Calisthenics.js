import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { moderateScale } from "react-native-size-matters";
import fonts from "../Constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { globalstyles } from "../styles/globalestyles";
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "grey",
    width: getWidth(94),
    borderRadius: 20,
    marginTop: 10,
    padding: moderateScale(10),
  },
  headerRow: {
    flexDirection: "row",
    width: getWidth(94) - moderateScale(20),
    height: getHeight(3),
    paddingHorizontal: moderateScale(5),
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftRow: {
    flexDirection: "row",
    borderColor: "green",
    width: getWidth(55),
    height: getHeight(4),
    borderRadius: 20,
    alignItems: "center",
  },
  headerleftText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: RFValue(16),
    lineHeight: RFValue(18) * 1.7,
    letterSpacing: 2,
    includeFontPadding: false,
    marginLeft: moderateScale(10),
  },
  headerRightText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "600",
    fontSize: RFValue(16),
    letterSpacing: 1,
    includeFontPadding: false,
  },
  timeText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1.2,
    includeFontPadding: false,
  },
  boldText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 22,
    letterSpacing: 2,
  },
  normalTxt: {
    fontFamily: "AnekBangla-Medium",
    color: "grey",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 1.2,
    includeFontPadding: false,
  },
});

let data = [
  {
    left: "Pull ups x5",
    right: "Body Weight x 12 x 3",
  },
  {
    left: "Lat pull-downs",
    right: "70 kg  x 10 x 3",
  },

  {
    left: "Bent-over-row",
    right: "40 kg  x 10 x 3",
  },
  {
    left: "Preachers curl",
    right: "35 kg  x 12",
  },
  {
    left: "Hammer curls",
    right: "15kg  x 12 x 3",
  },
  {
    left: "Inclined curls",
    right: "15 kg  x 10 x 3",
  },
];

const renderitem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <View style={styles.leftRow}>
          <Image
            style={{
              resizeMode: "contain",
              width: getHeight(3),
              height: getHeight(3),
            }}
            source={require("../../assets/images/legs.png")}
          />

          <Text style={styles.headerleftText}>Pull workout</Text>
        </View>

        <Text style={styles.headerRightText}>18/5/23</Text>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.timeText}>2h 25 min</Text>
        <Text style={styles.timeText}>25 sets</Text>
      </View>
      <View style={{ ...styles.headerRow, height: getHeight(4.2) }}>
        <Text style={styles.boldText}>Exercise</Text>
        <Text style={styles.boldText}>Repetitions</Text>
      </View>
      {data.map((item, index) => (
        <View style={styles.headerRow} key={`${index}`}>
          <Text style={styles.normalTxt}>{item.left}</Text>
          <Text style={styles.normalTxt}>{item.right}</Text>
        </View>
      ))}
    </View>
  );
};
const Meditation = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: 30,
        height: "100%",
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"Workouts"}
        subTitle={"Start Pull Workout"}
        subTitleStyle={{
          color: "grey",
        }}
      />

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: fonts.AnekBanglaMedium,
            marginTop: moderateScale(20),
            textAlign: "center",
            fontSize: RFValue(20),
          }}
        >
          Exercises
        </Text>
        <View
          style={{
            width: getWidth(95),
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {renderitem()}
        </View>
        <TouchableOpacity
          style={{
            ...globalstyles.buttonStyle,
            marginTop: moderateScale(80),
            width: getWidth(90),
          }}
        >
          <Text style={globalstyles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Meditation;
