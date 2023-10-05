import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import fonts from "../Constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
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

const ExerciseItem = () => {
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


export default ExerciseItem