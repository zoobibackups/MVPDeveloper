import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import Checkbox from "../Components/CheckBox";
import CheckboxSquare from "../Components/CheckBoxSquare";
import CustomHeader from "../Components/CustomHeader";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { setDietryPreferences } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const SignUp6 = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const navigation = useNavigation();
  const validateData = () => {
    if(checked || checked1 || checked2 || checked3 || checked4){
      if(checked){
        dispatch(setDietryPreferences({value:"Lazy Keto"})) // 
      }
      if(checked1){
        dispatch(setDietryPreferences({value:"Gluten Free"}))
      }
      if(checked2){
        dispatch(setDietryPreferences({value:"Pescatarian"}))
      }
      if(checked3){
        dispatch(setDietryPreferences({value:"Vegan"}))
      }
      if(checked4){
        dispatch(setDietryPreferences({value:"Use the app without goal"}))
      }
    }else{
      Alert.alert("NO OPTION SELECTED", "Please select an option")
    }
  }
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
        subTitle={"DIETRY PREFERENCES"}
      />

      <View
        style={styles.optionsContainer}
      >
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Lazy Keto</Text>
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
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Gluten Free</Text>
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
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Pescatarian</Text>
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
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Vegan</Text>
            <Checkbox
              isChecked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            width: getWidth(90),
            borderRadius: 20,
            height: getHeight(5),
            flexDirection: "row",
            paddingLeft: 10,
            alignItems: "center",
          }}
        >
          <CheckboxSquare
            isChecked={checked4}
            onPress={() => {
              setChecked4(!checked4);
            }}
          />
          <Text
            style={styles.selectItemText}
          >
            I don’t want follow a diet.
          </Text>
        </View>
      </View>

      <View
        style={styles.buttonContianer}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp7")}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  optionsContainer:{
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
  buttonContianer:{
    alignItems: "center",
    borderColor: "red",
    height: getHeight(10),
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    width: getWidth(99),
  }
});
export default SignUp6;
