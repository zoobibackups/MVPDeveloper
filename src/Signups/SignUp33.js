import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";

const SignUp33 = () => {
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
            height: "100%",
          }}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <CustomHeader
            onPress={() => navigation.goBack()}
            title={"CREATE PROFILE"}
            subTitle={"GREAT JOB, YOU ARE ALL DONE!"}
            subTitleStyle={{
              color: theme.blueColor,
              fontWeight: "800",
            }}
          />

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(6),
            }}
          >
            <Text style={textStyles.lightText}>THIS IS YOUR PROFILE</Text>
          </View>

          <View style={globalstyles.innerContainer}>
            <TouchableOpacity style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Goal/ Mission:</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp21")}
                style={globalstyles.textInputWithOutIcon}
              >
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  Goal/ Mission:
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Equipment:</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp28")}
                style={globalstyles.textInputWithOutIcon}
              >
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  Benchpress, Dumbells
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Location:</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp18")}
                style={globalstyles.textInputWithOutIcon}
              >
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  Gym
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Days:</Text>
              <TouchableOpacity style={globalstyles.textInputWithOutIcon}>
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  Monday, Wednesday, Saturday
                </Text>
              </TouchableOpacity>
            </View>

            <View style={globalstyles.buttonContianer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("TrainingHome1")}
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

export default SignUp33;
