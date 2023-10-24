import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { man } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import textStyles, { globalstyles } from "../styles/globalestyles";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { moderateScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
const itemstyles = StyleSheet.create({
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

let item_data = [
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

const Renderitem = () => {
  return (
    <View style={styles.shadowContainer}>
      <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              padding: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
      <View style={itemstyles.headerRow}>
        <View style={itemstyles.leftRow}>
          <Image
            style={{
              resizeMode: "contain",
              width: getHeight(3),
              height: getHeight(3),
            }}
            source={require("../../assets/images/legs.png")}
          />

          <Text style={itemstyles.headerleftText}>Pull workout</Text>
        </View>

        <Text style={itemstyles.headerRightText}>18/5/23</Text>
      </View>
      <View style={itemstyles.headerRow}>
        <Text style={itemstyles.timeText}>2h 25 min</Text>
        <Text style={itemstyles.timeText}>25 sets</Text>
      </View>
      <View style={{ ...itemstyles.headerRow, height: getHeight(4.2) }}>
        <Text style={itemstyles.boldText}>Exercise</Text>
        <Text style={itemstyles.boldText}>Repetitions</Text>
      </View>
      {item_data.map((item, index) => (
        <View style={itemstyles.headerRow} key={`${index}`}>
          <Text style={itemstyles.normalTxt}>{item.left}</Text>
          <Text style={itemstyles.normalTxt}>{item.right}</Text>
        </View>
      ))}
      </LinearGradient>
    </View>
  );
};

const data = [
  {
    challenge: "Challenge",
    difficulty: "Difficulty",
    status: "Status",
  },
  {
    challenge: "Run 10km",
    difficulty: "Hard",
    status: "Done",
  },
  {
    challenge: "Run 50km",
    difficulty: "Extreme",
    status: "Done",
  },
  {
    challenge: "200 push ups/1h",
    difficulty: "Hard",
    status: "Not done",
  },
  {
    challenge: "100 sit ups/30 min",
    difficulty: "Medium",
    status: "Not done",
  },
  {
    challenge: "2L water /7 days",
    difficulty: "Easy",
    status: "Done",
  },
];

const data2 = [
  {
    challenge: "",
    difficulty: "REPS",
    status: "WEIGHT",
  },
  {
    challenge: "Bench press",
    difficulty: "1x",
    status: "95Kg",
  },
  {
    challenge: "Dumbell press",
    difficulty: "5x",
    status: "35Kg",
  },
  {
    challenge: "Deadlift",
    difficulty: "1x",
    status: "110kg",
  },
  {
    challenge: "Squat",
    difficulty: "1x",
    status: "120kg",
  },
];
const data3 = [
  {
    challenge: "Current weight",
    status: "70kg",
  },
  {
    challenge: "Weight goal",
    status: "68kg",
  },
];

const data4 = [
  {
    challenge: "Body weight",
    status: "70kg",
  },
  {
    challenge: "Height",
    status: "175cm",
  },
  {
    challenge: "Age",
    status: "21",
  },
  {
    challenge: "Gender",
    status: "Male",
  },
];
const TrainingDiary2 = () => {
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
        title={"PROFILE OVERVIEW"}
        subTitle={""}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: getWidth(100) }}
      >
        <View
          style={{
            borderColor: "green",
            width: getWidth(70),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileSetting6")}
            style={{
              alignItems: "center",
              borderColor: "grey",
              justifyContent: "center",
              width: getWidth(20),
            }}
          >
            <SvgXml width={getWidth(30)} height={getHeight(15)} xml={man} />
          </TouchableOpacity>
        </View>

        <Text style={textStyles.mediumText}>Muhammad</Text>

        <Text style={styles.titleText}>Challenges </Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("HistoryAndProgress")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text
                  style={{
                    ...styles.rowText,
                    width: getWidth(40),
                    color: index == 0 ? "#000" : "rgba(0,0,0,.6)",
                    fontSize: index == 0 ? RFValue(11) : RFValue(9),
                  }}
                >
                  {item.challenge}
                </Text>
                <Text
                  style={{
                    ...styles.rowText,
                    width: getWidth(20),

                    color: index == 0 ? "#000" : "rgba(0,0,0,.6)",
                    fontSize: index == 0 ? RFValue(11) : RFValue(10),
                  }}
                >
                  {item.difficulty}
                </Text>
                <Text
                  style={{
                    ...styles.rowText,
                    width: getWidth(20),
                    color: index == 0 ? "#000" : "rgba(0,0,0,.6)",
                    fontSize: index == 0 ? RFValue(11) : RFValue(10),
                  }}
                >
                  {item.status}
                </Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ ...styles.titleText, marginTop: RFValue(10) }}>
          Challenges{" "}
        </Text>
        <Renderitem />
        <Text style={{ ...styles.titleText, marginTop: moderateScale(20) }}>
          Personal bests
        </Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("HistoryAndProgress")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data2.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text
                  style={{
                    ...styles.rowText,
                    width: getWidth(40),

                    color: index == 0 ? "#000" : "rgba(0,0,0,.6)",
                    fontSize: index == 0 ? RFValue(11) : RFValue(9),
                  }}
                >
                  {item.challenge}
                </Text>
                <Text
                  style={{
                    ...styles.rowText,
                    width: getWidth(20),

                    color: index == 0 ? "#000" : "rgba(0,0,0,.6)",
                    fontSize: index == 0 ? RFValue(11) : RFValue(10),
                  }}
                >
                  {item.difficulty}
                </Text>
                <Text
                  style={{
                    ...styles.rowText,
                    width: getWidth(20),
                    color: index == 0 ? "#000" : "rgba(0,0,0,.6)",
                    fontSize: index == 0 ? RFValue(11) : RFValue(10),
                  }}
                >
                  {item.status}
                </Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ ...styles.titleText, marginTop: moderateScale(20) }}>
          Weight
        </Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("HistoryAndProgress")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data3.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text
                  style={{
                    ...styles.rowText,

                    color: "rgba(0,0,0,.6)",
                  }}
                >
                  {item.challenge}
                </Text>

                <Text
                  style={{
                    ...styles.rowText,

                    color: "#000",
                  }}
                >
                  {item.status}
                </Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{ ...styles.titleText, marginTop: moderateScale(20) }}>
          Current statistics
        </Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("HistoryAndProgress")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data4.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text
                  style={{
                    ...styles.rowText,

                    color: "rgba(0,0,0,.6)",
                  }}
                >
                  {item.challenge}
                </Text>

                <Text
                  style={{
                    ...styles.rowText,

                    color: "#000",
                  }}
                >
                  {item.status}
                </Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>
        <View style={{ height: getHeight(10) }} />
      </ScrollView>
    </LinearGradient>
  );
};

export default TrainingDiary2;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#000000",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 2,
  },
  shadowContainer: {
    width: getWidth(90),
    borderRadius: RFValue(15),
    margin: moderateScale(2),
    borderColor: "grey",
    backgroundColor: "#BBC1AD",
    borderWidth: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,.6)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  rowStyle: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    width: getWidth(80),
    justifyContent: "space-between",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignSelf:"center",
    paddingVertical: moderateScale(7),
  },
  rowText: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonStyle: {
    width: getWidth(90),
    borderRadius: 10,
    height: getHeight(7),
    backgroundColor: theme.blueColor,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  imgStyle: {
    resizeMode: "contain",
    width: getWidth(5),
    height: getHeight(2),
  },
  buttonText: {
    ...globalstyles.buttonText,
    fontSize: RFValue(14),
    fontWeight: "400",
  },
});
