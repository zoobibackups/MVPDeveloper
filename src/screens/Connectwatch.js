import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import {
  appleBlack,
  fitbit,
  garmin,
  garminText,
  preformly,
} from "../../assets/svg";
import CustomHeader from "../Components/CustomHeader";
import theme from "../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { globalstyles } from "../styles/globalestyles";
const Connectwatch = () => {
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
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={"Integrate with Preformly"}
        subTitleStyle={{
          color: theme.blueColor,
          fontWeight: "600",
        }}
      />

      <View style={styles.textContainer}>
        <Text style={styles.txtStyle}>
          Connect the Preformly app to one of your existing health apps to make
          the results more detailed and precise{" "}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.loginButtonContainer}>
          <View style={styles.buttoniconView}>
            <SvgXml xml={garmin} width={getWidth(5)} height={getHeight(5)} />
            <SvgXml
              xml={garminText}
              width={getWidth(7)}
              height={getHeight(5)}
            />
          </View>
          <Text style={styles.buttonText}>Connect with Garmin</Text>
        </View>
        <View
          style={{
            ...styles.loginButtonContainer,
            backgroundColor: "#000000",
            borderColor: "#000000",
          }}
        >
          <View style={styles.buttoniconView}>
            <SvgXml
              xml={appleBlack}
              width={getWidth(8)}
              height={getHeight(5)}
              style={{ borderRadius: 20 }}
            />
          </View>

          <Text style={styles.buttonText}>Connect with Apple</Text>
        </View>
        <View
          style={{
            ...styles.loginButtonContainer,
            borderColor: "#00A9B9",
            backgroundColor: "#00A9B9",
          }}
        >
          <View style={styles.buttoniconView}>
            <SvgXml xml={fitbit} width={getWidth(8)} height={getHeight(5)} />
          </View>

          <Text style={styles.buttonText}>Connect with Fitbit</Text>
        </View>
      </View>
      <View style={{...globalstyles.buttonContianer, marginTop:getHeight(7)}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp19")}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Connectwatch;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    borderColor: "red",
    height: getHeight(15),
    width: getWidth(80),
    marginTop: 10,
  },
  txtStyle: {
    fontFamily: "AnekBangla-Medium",
    color: "#0008",
    fontWeight: "400",
    fontSize: RFValue(13),
    textAlign: "center",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "red",
    height: getHeight(35),
    width: getWidth(90),
  },
  loginButtonContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
    flexDirection: "row",
    borderColor: "#1469A5",
    height: getHeight(7),
    borderRadius: 10,
    backgroundColor: "#1469A5",
    width: getWidth(80),
    borderWidth: 2,
  },
  buttonText: {
    fontFamily: "AnekBangla-Medium",
    color: "white",
    fontWeight: "400",
    paddingLeft: 10,
    fontSize: 17,
    letterSpacing: 2,
  },
  buttoniconView: {
    height: getHeight(4),
    width: getHeight(4),
    marginLeft: 2,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    alignItems: "center",
  },
});
