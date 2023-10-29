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
import { setAgeHeightWeight } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
const SignUp2 = () => {
  const dispatch = useDispatch()
  const {foodMetaData} = useSelector(state => state.userReducer)
  const navigation = useNavigation();
  var radio_props = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
    { label: "Other", value: 3},
  ];
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [state, setState] = useState(false);

  const validateData = () => {
   if(age.trim() == ""){
    Alert.alert("INVALID AGE","Please enter valid age")
    return
   }
   if(height.trim() == ""){
    Alert.alert("INVALID HEIGHT","Please enter valid height")
    return
   }
   if(weight.trim() == ""){
    Alert.alert("INVALID WEIGTH","Please enter valid weight")
    return
   }
   if(state== false){
    Alert.alert("INVALID GENDER","Please select Gender")
    return
   }
   let data = {
    age:age,
    weight:weight,
    height:height,
    gender:state
   }
   dispatch(setAgeHeightWeight(data)).then(() => {
    navigation.navigate("SignUp3")
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
              placeholder="30"
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
              placeholder="Your height in cm"
              placeholderTextColor="grey"
              keyboardType="numeric"
            />
          </View>
          <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Weight:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(num) => setWeight(num)}
              value={weight}
              placeholder="Your weight kg"
              placeholderTextColor="grey"
               keyboardType="numeric"
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
            onPress={() => validateData("SignUp3")}
            style={globalstyles.buttonStyle}
          >
            <Text style={globalstyles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyBoardHandle>
  );
};

export default SignUp2;
