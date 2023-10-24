import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { verticalScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { apple, preformly, training } from "../../assets/svg";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";

const LandingPage = () => {
  const [focus, setFocus] = useState(true);
  const [focus2, setFocus2] = useState(false);
  const customstyle = focus ? styles.change : styles.noChange;
  const customstyle2 = focus2 ? styles.change : styles.noChange;

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
      <View style={{ alignItems: "center" }}>
        <SvgXml
          width={getWidth(45)}
          height={getHeight(10)}
          xml={preformly}
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
        />

        <Text style={styles.welcomeText}>WELCOME</Text>
      </View>
      <View
        style={{ alignItems: "center", paddingVertical: verticalScale(30) }}
      >
        <Text style={styles.subText}>HOW WOULD YOU LIKE TO PROCEED?</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          height: "50%",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // if account naivgate to Home5 else SignUp1
            // if account naivgate to Home5 else SignUp1
            setFocus2(false), setFocus(true), navigation.navigate("SignUp1");
          }}
          style={customstyle}
        >
          <SvgXml width={getWidth(15)} height={getHeight(12)} xml={apple} />

          <Text style={styles.buttonText}>Food</Text>
        </TouchableOpacity>

          <View style={{height:getHeight(2)}} />
       

        <TouchableOpacity
          onPress={() => {
            setFocus2(true),
              setFocus(false),
              navigation.navigate("TrainingLogIn");
          }}
        >
          <LinearGradient
            style={customstyle2}
            colors={["#BBC1AD", "#FDFFF4"]}
            start={{ x: 0, y: .5 }}
            end={{ x: 1, y: .5 }}
          >
            <SvgXml
              width={getWidth(15)}
              height={getHeight(12)}
              xml={training}
            />

            <Text style={styles.buttonText}>Training</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: "500",
    fontSize: RFValue(15),
    letterSpacing: RFValue(3),
  },
  subText: {
    fontFamily: "AnekBangla-Medium",
    color: theme.blueColor,
    fontWeight: "600",
    fontSize: RFValue(13),
    textAlign: "center",
    letterSpacing: RFValue(1.4),
  },
  buttonText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: "400",
    fontSize: RFValue(20),
    letterSpacing: RFValue(1.4),
    includeFontPadding: false,
  },
  change: {
    width: getWidth(58),
    borderWidth: 2,
    borderColor: "#1B1561",
    height: getHeight(20),
    borderRadius: 20,
    backgroundColor: "#0000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  noChange: {
    width: getWidth(58),
    borderWidth: 0,
    margin: 10,
    borderColor: "rgba(0,0,0,.1)",
    height: getHeight(20),
    borderRadius: RFValue(20),
    backgroundColor: "#",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default LandingPage;
