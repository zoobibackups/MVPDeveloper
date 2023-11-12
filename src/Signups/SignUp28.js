import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { useDispatch } from "react-redux";
import { setTrainEquipments } from "../store/actions/userActions";

const SignUp28 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [equipments, setEquipments] = useState("");
  const validateData = () => {
    if ((equipments == "")) {
      Alert.alert("ERROR", "Pleasse enter equipments");
      return;
    }

    dispatch(setTrainEquipments({ value: equipments })).then(() => {
      navigation.navigate("SignUp29");
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
            subTitle={" TELL US WHAT EQUIPMENT YOU\nPOSSES"}
          />
          <View style={globalstyles.innerContainer}>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Equipment:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setEquipments(text)}
                value={equipments}
                placeholder="Dumbells, Kettelbells......."
                placeholderTextColor="grey"
              />
            </View>

            <View
              style={{ paddingTop: 25, width: getWidth(90), marginLeft: 5 }}
            >
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

export default SignUp28;
