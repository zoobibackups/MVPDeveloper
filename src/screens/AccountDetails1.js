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
import { useSelector } from "react-redux";

const AccountDetails1 = () => {
  const {user,trainingMetaData} = useSelector(state => state.userReducer )
  const gender = trainingMetaData.gender.toLowerCase()
  const navigation = useNavigation();
  var radio_props = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 },
  ];
  const [name, setName] =  useState(user.name)
  const [email,setEmail] = useState(user.email)
  const [height, setHeight] = useState(`${trainingMetaData.height}`);
  const [age, setAge] = useState(`${trainingMetaData.age}`);
  const [weight, setWeight] = useState(`${trainingMetaData.weight}`);
 
  const [state, setState] = useState(gender == "male" ? 0 : gender == "female" ? 1:2);
  
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
                value={name}
                onChangeText={(text) => setName(name)}
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
              value={email}
              onChangeText={(value) => setEmail(value)}
                style={{
                  ...globalstyles.textInputWithOutIcon,
                  borderColor: theme.blueColor,
                  height: RFValue(45),
                }}
                placeholder="Email Address"
                placeholderTextColor="grey"
              />
            </View>
            
          </View>

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
                 onPress={() => navigation.navigate('TrainingHome1')}
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
export default AccountDetails1;
