import React, { useState } from "react";

import { useNavigation } from "@react-navigation/core";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Checkbox from "../Components/CheckBox";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";

const ChangePreference2 = () => {
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
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

      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              Where you want to work out
            </Text>
            <Checkbox
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChecked1(!checked1)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>Dietary preferences</Text>
            <Checkbox
              isChecked={checked1}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChecked2(!checked2)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>Cuisines</Text>
            <Checkbox
              isChecked={checked2}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChecked3(!checked3)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              Ingredients to avoid
            </Text>
            <Checkbox
              isChecked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
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
              Ingredients you prefer
            </Text>
            <Checkbox
              isChecked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ChangeGoal")}
          style={globalstyles.buttonStyle}
        >
          <Text
            style={{
              fontFamily: "AnekBangla-Medium",
              color: "white",
              fontWeight: "500",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    height: getHeight(70),
    width: getWidth(97),
   
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
});
export default ChangePreference2;
