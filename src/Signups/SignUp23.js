import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import Checkbox from "../Components/CheckBox";
import CustomHeader from "../Components/CustomHeader";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";

const SignUp23 = () => {
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: 30,
        borderColor: "red",
        height: "100%",
        // backgroundColor: 'white',
        // borderWidth:10
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={"HOW OFTEN DO YOU PRACTICE THIS SPORT?"}
      />

      <View style={styles.innerContainer}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp25')}> */}

        <LinearGradient
          style={styles.selectItem}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <Text style={styles.selectItemText}>More than 5 hours a week</Text>
          <Checkbox
            isChecked={checked}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.selectItem}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <Text style={styles.selectItemText}>3 to 5 hours a week</Text>
          <Checkbox
            isChecked={checked1}
            onPress={() => {
              setChecked1(!checked1);
            }}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.selectItem}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <Text style={styles.selectItemText}>1 to 3 hours a week</Text>
          <Checkbox
            isChecked={checked2}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
        </LinearGradient>
        {/* </TouchableOpacity> */}
        <LinearGradient
          style={styles.selectItem}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <Text style={styles.selectItemText}>Less than 1 hour a week</Text>
          <Checkbox
            isChecked={checked3}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
        </LinearGradient>
      </View>

      <View style={globalstyles.buttonContianer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp24")}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  innerContainer: {
    paddingVertical: 10,
    height: getHeight(50),
    width: getWidth(97),
    borderColor: "red",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
  optionsContainer: {
    paddingVertical: 10,
    height: getHeight(50),
    width: getWidth(97),
    borderColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
  selectItem: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(7),
    borderColor: "#F5F5F5",
    shadowColor: "rgba(103, 128, 159)",
    elevation: 32,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  selectItemText: {
    ...textStyles.lightText,
    fontWeight: "400",
    fontSize: RFValue(12),
    paddingLeft: RFValue(10),
  },
  buttonContianer: {
    alignItems: "center",
    borderColor: "red",
    height: getHeight(10),
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    width: getWidth(99),
  },
});
export default SignUp23;
