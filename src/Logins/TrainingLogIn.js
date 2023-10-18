import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { preformly } from "../../assets/svg";
import theme from "../Constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles from "../styles/globalestyles";

const TrainingLogIn = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 30,
          borderColor: "green",
          height: getHeight(85),
        }}
      >
        <Image
          source={require("../../assets/images/fruitBG2.png")}
          style={styles.backgroundImage}
        />
        <View
          style={{
            alignItems: "center",
            width: getWidth(90),
            height: getHeight(28),
          }}
        >
          <SvgXml
            width={getWidth(45)}
            height={getHeight(8)}
            xml={preformly}
            style={{ marginTop: Platform.OS === "ios" ? RFValue(20) : 0 }}
          />

          <Text style={textStyles.mediumText}>HOME</Text>
        </View>
        <View
          style={{
            width: getWidth(90),
            paddingVertical: moderateScale(40),
            alignItems: "center",
            height: getHeight(40),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LogIn3")}
            style={styles.buttonStyle}
          >
            <Text style={{ ...textStyles.lightText, color: theme.whiteColor }}>
              LOGIN NOW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Error1")}
            style={styles.buttonStyle}
          >
            <Text style={{ ...textStyles.lightText, color: theme.whiteColor }}>
              BUSINESS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp18")}
            style={{
              ...styles.buttonStyle,
              backgroundColor: theme.transparentColor,
            }}
          >
            <Text
              style={{
                color: "#1B1561",
                fontSize: 17,
                fontFamily: "AnekBangla-Light",
                fontWeight: "500",
              }}
            >
              REGISTER NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 2,
          // borderWidth: 1,
          borderColor: "red",
          height: getHeight(7),
        }}
      >
        <Text
          style={{...textStyles.lightText,fontWeight:"400", fontSize:RFValue(10), color:theme.blueColor}}
        >
          TERMS AND CONDIDTIONS
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "160%",
    marginTop: 0,
    height: getHeight(100),
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: theme.blueColor,
    borderRadius: 20,
    width: getWidth(60),
    height: getHeight(7),
    backgroundColor: theme.blueColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(8),
  },
});

export default TrainingLogIn;
