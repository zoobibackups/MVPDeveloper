import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Checkbox from "../Components/CheckBox";
import CheckboxSquare from "../Components/CheckBoxSquare";
import CustomHeader from "../Components/CustomHeader";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";

const SignUp30 = () => {
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
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
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={" WHAT DAYS DO YOU WANT TO\nWORK OUT?"}
      />

      <TouchableOpacity onPress={() => navigation.navigate("WhyScheudle2")}>
        <View
          style={{
            paddingVertical: 0,
            height: getHeight(5),
          }}
        >
          <Text
            style={{
              ...textStyles.mediumText,
              textDecorationLine: "underline",
            }}
          >
            WHY?
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          ...globalstyles.innerContainer,
          shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
          shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
          shadowOpacity: 1, // Adjust the shadow opacity as needed
          shadowRadius: 10, // Adjust the shadow radius as needed
          elevation: Platform.OS === "android" ? 0 : 5,
          justifyContent: "space-evenly",
          height: getHeight(50),
        }}
      >
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>Monday</Text>
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
            <Text style={globalstyles.selectItemText}>Tuesday</Text>
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
            <Text style={globalstyles.selectItemText}>Wednesday</Text>
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
            <Text style={globalstyles.selectItemText}>Thursday</Text>
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
            <Text style={globalstyles.selectItemText}>Friday</Text>
            <Checkbox
              isChecked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.rowView}>
          <CheckboxSquare
            isChecked={checked5}
            onPress={() => {
              setChecked5(!checked5);
            }}
          />
          <Text style={{ ...textStyles.lightText, color: "grey" }}>
            I don’t need a schedule
          </Text>
        </View>
      </View>

      <View style={globalstyles.buttonContianer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp31")}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  rowView: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(5),
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default SignUp30;
