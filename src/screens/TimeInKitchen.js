import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
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
import { setTimeInKitchen } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const TimeInKitchen = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const navigation = useNavigation();
  const validateData = () => {
    if (checked) {
      dispatch(setTimeInKitchen({ value: "Over 2 Hours" })).then(() => {
        navigation.navigate("SignUp11");
      });
      return;
    }
    if (checked1) {
      dispatch(setTimeInKitchen({ value: "1-2 Hours" })).then(() => {
        navigation.navigate("SignUp11");
      });
      return;
    }
    if (checked2) {
      dispatch(setTimeInKitchen({ value: "30 Min -  1 Hour" })).then(() => {
        navigation.navigate("SignUp11");
      });
      return;
    }
    if (checked3) {
      dispatch(setTimeInKitchen({ value: "Less than 30 min" })).then(() => {
        navigation.navigate("SignUp11");
      });
      return;
    }
    Alert.alert("NO OPTION SELECTED","Please selete an option")
  };
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
        subTitle={"TIME SPENT IN THE KITCHEN"}
      />

      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.selectItem}
          >
            <Text style={styles.selectItemText}>Over 2 Hours</Text>
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
            <Text style={styles.selectItemText}>1-2 Hours</Text>
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
            <Text style={styles.selectItemText}>30 Min - 1 Hour</Text>
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
            <Text style={styles.selectItemText}>Less than 30 min</Text>
            <Checkbox
              isChecked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={globalstyles.buttonContianer}>
        <TouchableOpacity
          onPress={() => validateData()}
          style={globalstyles.buttonStyle}
        >
          <Text style={globalstyles.buttonText}>N e x t</Text>
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
export default TimeInKitchen;
