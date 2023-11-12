import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { setTrainExercise } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const SignUp29 = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [exercises, setExercises] = useState("");
  
  const validateData = () => {
    if ((exercises == "")) {
      Alert.alert("ERROR", "Pleasse enter equipments");
      return;
    }

    dispatch(setTrainExercise({ value: exercises })).then(() => {
      navigation.navigate("SignUp30")
    });
  };

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
            subTitle={" TELL US WHAT EXERCISES YOU\nLIKE"}
          />
          <View style={globalstyles.innerContainer}>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Exercises</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setExercises(text)}
                value={exercises}
                placeholder="Pushups, running......"
                placeholderTextColor="grey"
              />
            </View>

            <View style={{ paddingTop: 25, width: getWidth(90), marginLeft: 5 }}>
              <Text
                style={{
                  ...textStyles.lightText,
                  color: "grey",
                  fontSize: RFValue(10),
                  lineHeight: RFValue(14),
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 14 * 1.4,
                    fontWeight: "600",
                    fontFamily: "AnekBangla-Medium",
                    color: "black",
                  }}
                >
                  BE ADVISED:
                </Text>
                to make sure that the exercises you currently posses is
                registered you have to input them correctly. Separate each one
                with a comma “,”
              </Text>
            </View>

            <View
              style={{
                ...globalstyles.buttonContianer,
                marginTop: getHeight(5),
              }}
            >
              <TouchableOpacity
                onPress={() => validateData()}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};

export default SignUp29;
