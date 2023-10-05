import React, { useState } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { backward, preformly } from "../../assets/svg";
import Checkbox from "../Components/CheckBox";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { globalstyles } from "../styles/globalestyles";

const ChangePreferenceTraining = () => {
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
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
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"CHANGE  PROFILE"}
        subTitle={"What would you like to change?"}
        subTitleStyle={{
          textAlign: "center",
          alignSelf: "center",
        }}
      />

      <View
        style={styles.itemContainer}
      >
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              How often you work out
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChecked1(!checked1)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              Where you want to work out
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChecked2(!checked2)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              For how long do you work out
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChecked3(!checked3)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>Preferred workouts</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChecked4(!checked4)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              Workouts you want to avoid
            </Text>
           
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          borderColor: "red",
          height: getHeight(15),
          justifyContent: "flex-end",
          width: getWidth(99),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangeGoal")}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  itemContainer:{
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
  }
});
export default ChangePreferenceTraining;
