import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import Checkbox from "../Components/CheckBox";
import CustomHeader from "../Components/CustomHeader";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { useDispatch } from "react-redux";
import { setTrainSportsName } from "../store/actions/userActions";

const SignUp22 = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Soccer",
      isSelected: false,
    },
    {
      id: 1,
      name: "Baeball",
      isSelected: false,
    },
    {
      id: 1,
      name: "Hockey",
      isSelected: false,
    },
    {
      id: 1,
      name: "Climbing",
      isSelected: false,
    },
    {
      id: 1,
      name: "Tennis",
      isSelected: false,
    },
    {
      id: 1,
      name: "Cycling",
      isSelected: false,
    },
    {
      id: 1,
      name: "Suring",
      isSelected: false,
    },
    {
      id: 1,
      name: "Swimming",
      isSelected: false,
    },
    {
      id: 1,
      name: "Tennis",
      isSelected: false,
    },
    {
      id: 1,
      name: "Cycling",
      isSelected: false,
    },
    {
      id: 1,
      name: "Suring",
      isSelected: false,
    },
    {
      id: 1,
      name: "Swimming",
      isSelected: false,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelect = (index) => {
    const updatedData = data.map((item, i) => ({
      ...item,
      isSelected: i === index ? true : false,
    }));

    setData(updatedData);
  };

  const validateData = () => {
    if (selectedItem == null) {
      Alert.alert("NO OPTION SELECTED", "Select an option");
      return;
    }
    dispatch(setTrainSportsName({ value: selectedItem })).then(() => {
      navigation.navigate("SignUp23");
    });
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
        subTitle={"WHAT DO YOU DO/PRACTICE? "}
      />

      <View style={styles.innerContainer}>
        <ScrollView
          style={{
            width: getWidth(97),
          }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          {data.map((item, index) => {
            return (
              <LinearGradient
                key={`${index}`}
                style={styles.selectItem}
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
              >
                <Text style={styles.selectItemText}>{item.name}</Text>
                <Checkbox
                  isChecked={item.isSelected}
                  onPress={() => {
                    handleSelect(index);
                    setSelectedItem(item.name);
                  }}
                />
              </LinearGradient>
            );
          })}
        </ScrollView>
      </View>
      <View style={globalstyles.buttonContianer}>
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
  innerContainer: {
    paddingVertical: 10,
    height: getHeight(60),
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
    marginTop: getHeight(2),
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
export default SignUp22;
