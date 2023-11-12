import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import Checkbox from "../Components/CheckBox";
import CustomHeader from "../Components/CustomHeader";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
const elevationValue = Platform.OS === "android" ? 0 : 5;
import { setGoal } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const SignUp13 = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const navigation = useNavigation();

  const validateData = () => {
    if (checked || checked1 || checked2 || checked3 || checked4) {
      if (checked) {
        dispatch(setGoal({ value: "Lose Weight", goalWeight: true })).then(
          () => {
            navigation.navigate("SignUp14");
          }
        );
      }
      if (checked1) {
        dispatch(setGoal({ value: "Gain Weight", goalWeight: true })).then(
          () => {
            navigation.navigate("SignUp14");
          }
        );
      }
      if (checked2) {
        dispatch(setGoal({ value: "Maintain Weight", goalWeight: true })).then(
          () => {
            navigation.navigate("SignUp14");
          }
        );
      }
      if (checked3) {
        dispatch(setGoal({ value: "Live healthier", goalWeight: true })).then(
          () => {
            navigation.navigate("SignUp14");
          }
        );
      }
      if (checked4) {
        dispatch(
          setGoal({ value: "Use the app without goal", goalWeight: false })
        ).then(() => {
          navigation.navigate("SignUp14");
        });
      }
    } else {
      Alert.alert("NO OPTION SELECTED", "Please select an option");
    }
  };
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
        subTitle={"TELL US ABOUT YOUR GOALS:"}
      />

      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Lose Weight</Text>
            <Checkbox
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
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
            <Text style={styles.selectItemText}>Gain Weight</Text>
            <Checkbox
              isChecked={checked2}
              onPress={() => {
                setChecked2(!checked2);
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
            <Text style={styles.selectItemText}>Maintain Weight</Text>
            <Checkbox
              isChecked={checked1}
              onPress={() => {
                setChecked1(!checked1);
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
            <Text style={styles.selectItemText}>Live healthier</Text>
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
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Use the app without goal</Text>
            <Checkbox
              isChecked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContianer}>
        <TouchableOpacity
          onPress={() => validateData()}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: "#1B1561",
  },
  checkbox: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  innerContainer: {
    paddingVertical: 10,
    height: getHeight(50),
    width: getWidth(97),
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: elevationValue,
  },
  selectItemText: {
    ...textStyles.lightText,
    fontWeight: "400",
    fontSize: RFValue(12),
    paddingLeft: RFValue(10),
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
  buttonContianer: {
    alignItems: "center",
    borderColor: "red",
    height: getHeight(10),
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    width: getWidth(99),
  },
});

export default SignUp13;
