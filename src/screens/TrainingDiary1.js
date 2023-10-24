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
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { man } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import theme from "../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";

const data = [
  {
    challenge: "",
    difficulty: "KCAL",
    status: "PROT",
  },
  {
    challenge: "Breakfast",
    difficulty: "235",
    status: "10 g",
  },
  {
    challenge: "Lunch",
    difficulty: "554",
    status: "32 g",
  },
  {
    challenge: "Snack 1",
    difficulty: "430",
    status: "24 g",
  },
  {
    challenge: "Dinner",
    difficulty: "642",
    status: "36 g",
  },
  {
    challenge: "Total",
    difficulty: "1861",
    status: "102 g",
  },
];

const data1 = [
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
const TrainingDiary1 = () => {
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

        <Text style={styles.titleText}>Meals consumed today</Text>
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
        <Text style={{ ...styles.titleText, marginTop: moderateScale(20) }}>
          Latest workout
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
            {data1.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data1.length - 1 ? 0 : 1,
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

export default TrainingDiary1;

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
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: moderateScale(7),
  },
  rowText: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize:  RFValue(9),
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
