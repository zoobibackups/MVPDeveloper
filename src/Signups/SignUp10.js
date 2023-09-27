import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CheckboxSquare from "../Components/CheckBoxSquare";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";

const SignUp10 = () => {
  const navigation = useNavigation();

  const [ingredients, setIngredients] = useState("");
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState("");
  const [meal, setMeal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <KeyBoardHandle>
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
            subTitle={"TELL US ABOUT YOUR SCHEDULE:"}
          />

          <TouchableOpacity onPress={() => navigation.navigate("WhySchedule")}>
            <Text
              style={{
                ...textStyles.boldText,
                textDecorationLine: "underline",
              }}
            >
              Why?
            </Text>
          </TouchableOpacity>

          <View
            style={{
              paddingVertical: 15,
              height: getHeight(63),
              width: getWidth(90),
            }}
          >
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>
                When do you have breakfast?
              </Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Input here........"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>
                When do you have lunch?
              </Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setMeal(text)}
                value={meal}
                placeholder="Input here........"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>

            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>
                When do you need a snack?
              </Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Input here........"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>
                When do you have dinner?
              </Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Input here........"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={styles.rowCheckBox}>
              <CheckboxSquare
                // text="Blue"
                isChecked={checked}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={globalstyles.inputLabel}>
                I don’t have anything to avoid
              </Text>
            </View>
            <View
              style={{
                paddingTop: 5,
                width: getWidth(90),
                height: getHeight(10),
                paddingLeft: 5,
              }}
            >
              <Text
                style={{
                  ...textStyles.lightText,
                  fontSize: RFValue(10),
                  lineHeight: RFValue(14),
                  fontWeight: "300",
                }}
              >
                You will get a reminder from us when it is time to eat, and what
                you should eat to be able to achive your goals.
              </Text>
            </View>
          </View>
          <View style={globalstyles.buttonContianer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TimeInKitchen")}
              style={globalstyles.buttonStyle}
            >
              <Text style={globalstyles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};
const styles = StyleSheet.create({
  rowCheckBox: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(4),
    flexDirection: "row",
    alignItems: "center",
  },
});
export default SignUp10;