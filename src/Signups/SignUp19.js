import React, { useState } from "react";

import { useNavigation } from "@react-navigation/core";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import RadioForm from "react-native-simple-radio-button";

import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
import { useDispatch } from "react-redux";
import { setTrainAgeHeightWeight } from "../store/actions/userActions";
const SignUp19 = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  var radio_props = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
    { label: "Other", value: 3 },
  ];

  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [state, setState] = useState(false);

  const validateData = () => {
    if(age == ""){
      Alert.alert("INVALID AGE", "Please enter a valid age")
      return
    }
    if(height == ''){
      Alert.alert("INVALID HEIGHT", "Please enter valid height")
      return
    }
    if(weight == ""){
      Alert.alert("INVALID WEIGHT", "Please enter valid weight")
      return
    }

    if(!state){
      Alert.alert("INVALID GENDER", "Please select gender")
      return
    }
    let data = {
      age:age,
      height:height,
      weight:weight,
      gender:radio_props[state-1].label
    }
    dispatch(setTrainAgeHeightWeight(data)).then((data) => {
      navigation.navigate("SignUp20")
    })
  }
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
        <CustomHeader
          onPress={() => navigation.goBack()}
          title={"CREATE PROFILE"}
          subTitle={"TELL US ABOUT YOU"}
        />

        <View
          style={{
            paddingVertical: 10,
            height: getHeight(65),
            width: getWidth(90),
          }}
        >
          <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Age:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(text) => setAge(text)}
              value={age}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="grey"
              keyboardType="numeric"
            />
          </View>
          <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Height:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(text) => setHeight(text)}
              value={height}
              placeholder="Your height"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />
          </View>
          <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Weight:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(num) => setWeight(num)}
              value={weight}
              placeholder="Your weight"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />
          </View>
          <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Gender:</Text>
            <View style={{ paddingLeft: 10, paddingTop: 20 }}>
              <RadioForm
                radio_props={radio_props}
                initial={state}
                buttonSize={10}
                formHorizontal={true}
                labelHorizontal={true}
                buttonStyle={{
                  color: "red",
                  marginLeft: 10,
                  fontFamily: fonts.AnekBanglaMedium,
                }}
                style={{
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  fontSize: RFValue(1),
                  fontFamily: fonts.AnekBanglaMedium,
                }}
                labelStyle={{
                  marginTop: RFValue(3),
                  fontFamily: fonts.AnekBanglaMedium,
                  fontSize: RFValue(12),
                  color: theme.blueColor,
                }}
                animation={true}
                buttonColor={"#1B1561"}
                selectedButtonColor="#1B1561"
                onPress={(value) => {
                  setState(value);
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => validateData()}
            style={globalstyles.buttonStyle}
          >
            <Text style={globalstyles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyBoardHandle>
  );
};

export default SignUp19;
