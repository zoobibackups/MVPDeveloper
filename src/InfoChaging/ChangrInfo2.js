import React, { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";

import RadioForm from "react-native-simple-radio-button";

import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { hideEye } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { globalstyles } from "../styles/globalestyles";

const ChangrInfo2 = () => {
  const navigation = useNavigation();
  var radio_props = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 },
  ];

  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedIndex, setIndex] = useState(0);
  const [state, setState] = useState(false);
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [confirmPassword, setConfirmPassowrd] = useState("");
  return (
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
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <HeaderMainScreen
            onPress={() => navigation.goBack()}
            title={"CHANGE  PROFILE"}
            subTitle={"CHANGE INFORMATION"}
            subTitleStyle={{
              textAlign: "center",
              alignSelf: "center",
            }}
          />

          <View
            style={{
              paddingVertical: 10,
              width: getWidth(90),
            }}
          >
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Height:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setHeight(text)}
                value={height}
                placeholder="Your Height"
                placeholderTextColor="grey"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Weight :</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(num) => setWeight(num)}
                value={weight}
                placeholder="Your Weight"
                placeholderTextColor="grey"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Goal weight:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setAge(text)}
                value={age}
                placeholder="Your goal weight"
                placeholderTextColor="grey"
              />
            </View>
            <Text style={globalstyles.inputLabel}>Gender :</Text>
            <View
              style={{ borderColor: "red", paddingLeft: 10, paddingTop: 20 }}
            >
              <RadioForm
                radio_props={radio_props}
                initial={state}
                buttonSize={10}
                formHorizontal={true}
                labelHorizontal={true}
                style={{
                  justifyContent: "space-between",
                  fontFamily: fonts.AnekBanglaMedium,
                }}
                animation={true}
                labelStyle={{
                  marginTop: RFValue(3),
                  fontFamily: fonts.AnekBanglaMedium,
                  fontSize: RFValue(12),
                  color: theme.blueColor,
                }}
                buttonColor={"#1B1561"}
                selectedButtonColor="#1B1561"
                onPress={(value) => {
                  setState(value);
                }}
              />
            </View>

            <View
              style={{
                alignItems: "center",
                borderColor: "red",
                height: getHeight(15),
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                 onPress={() => navigation.navigate('TermsAndConditions')}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyBoardHandle>
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
    color: "grey",
  },
});
export default ChangrInfo2;
