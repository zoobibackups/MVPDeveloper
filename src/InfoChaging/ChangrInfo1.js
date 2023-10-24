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
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { globalstyles } from "../styles/globalestyles";

const ChangrInfo1 = () => {
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
            <View
              style={{
                ...globalstyles.inputVerticalContainer,
                borderColor: theme.blueColor,
                height: RFValue(45),
                marginBottom: moderateScale(16),
              }}
            >
              <TextInput
                style={{
                  ...globalstyles.textInputWithOutIcon,
                  borderColor: theme.blueColor,
                  height: RFValue(45),
                }}
                placeholder="Full Name"
                placeholderTextColor="grey"
              />
            </View>
            <View
              style={{
                ...globalstyles.inputVerticalContainer,
                borderColor: theme.blueColor,
                height: RFValue(45),
                marginBottom: moderateScale(11),
              }}
            >
              <TextInput
                style={{
                  ...globalstyles.textInputWithOutIcon,
                  borderColor: theme.blueColor,
                  height: RFValue(45),
                }}
                placeholder="Email Address"
                placeholderTextColor="grey"
              />
            </View>
            <View
              style={{ ...globalstyles.inputContainer, height: RFValue(45) }}
            >
              <TextInput
                style={{ ...globalstyles.textInputStyle, height: RFValue(45) }}
                placeholderTextColor="grey"
                placeholder="Password"
                secureTextEntry={show}
              />
              <TouchableOpacity onPress={() => setShow(!show)}>
                <SvgXml xml={hideEye} />
              </TouchableOpacity>
            </View>
            <View
              style={{ ...globalstyles.inputContainer, height: RFValue(45) }}
            >
              <TextInput
                style={{ ...globalstyles.textInputStyle, height: RFValue(45) }}
                onChangeText={(text) => setConfirmPassowrd(text)}
                value={confirmPassword}
                placeholder="Confirm Password"
                secureTextEntry={show1}
                placeholderTextColor="grey"
              />
              <TouchableOpacity onPress={() => setShow1(!show1)}>
                <SvgXml xml={hideEye} />
              </TouchableOpacity>
            </View>
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
                 onPress={() => navigation.navigate('ChangrInfo2')}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Next</Text>
              </TouchableOpacity>
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
export default ChangrInfo1;
