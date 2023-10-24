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
    challenge: "Number of meals ",
    difficulty: "235",
    status: "35",
  },
  {
    challenge: "Carbs",
    difficulty: "554",
    status: "12 g",
  },
  {
    challenge: "Protein",
    difficulty: "430",
    status: "13 g",
  },
  {
    challenge: "Calories",
    difficulty: "642",
    status: "15 g",
  },
];

const PersonalTrainerOverView = () => {
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
        title={"CLIENT OVERVIEW"}
        subTitle={""}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: getWidth(100) }}
      >        
        <Text style={styles.titleText}>GENERATE CUSTOM MEAL PLANS FOR YOUR CLIENTS</Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("TrainingDiary1")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(60),
              borderRadius: 20,
              height:"100%",
              justifyContent:"center",
              alignItems:"center",
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
           <Text style={styles.titleText2} >Training Diary</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.shadowContainer, marginTop:getHeight(4) }}
          onPress={() => navigation.navigate("Profile8")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(60),
              borderRadius: 20,
              height:"100%",
              justifyContent:"center",
              alignItems:"center",
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
           <Text style={styles.titleText2} >Client overview</Text>
          </LinearGradient>
        </TouchableOpacity>

       
      </ScrollView>
    </LinearGradient>
  );
};

export default PersonalTrainerOverView;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#000000",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 2,
    textAlign:"center",
    paddingHorizontal:getWidth(25),
    marginVertical:getHeight(6)
  },
  titleText2: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#000000",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 2,
    textAlign:"center",
  },
  shadowContainer: {
    width: getWidth(60),
    borderRadius: RFValue(15),
    margin: moderateScale(2),
    height:getHeight(16),
    justifyContent:"center",
    alignItems:"center",
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
    paddingVertical: moderateScale(13),
  },
  rowText: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: RFValue(12),
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
