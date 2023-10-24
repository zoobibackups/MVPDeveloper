import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { arrowForward } from "../../assets/svg";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import Modal from "react-native-modal"
const SignUp12 = () => {
  const navigation = useNavigation();
  const [ingredients, setIngredients] = useState("");
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState("");
  const [meal, setMeal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [focus, setFocus] = useState(false);
  const customstyle = focus ? styles.change : styles.noChange;

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
            subTitle={" GREAT JOB, YOU ARE ALL DONE!\n THIS IS YOUR PROFILE"}
          />

          <View
            style={{
              paddingVertical: 15,
              height: getHeight(55),
              width: getWidth(90),
              borderColor: "red",
            }}
          >
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Goal / Mission:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Live healthier"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Avoid:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setMeal(text)}
                value={meal}
                placeholder="Fish, Beans"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Diet:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Vegetarian"
                placeholderTextColor="grey"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Schedule:</Text>
              <View style={styles.dropDownContainer}>
                <Text
                  style={{
                    ...globalstyles.inputLabel,
                    color: "grey",
                    textAlign: "left",
                  }}
                >
                  View Schedule
                </Text>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <SvgXml
                    height={getHeight(3)}
                    width={getWidth(5)}
                    xml={arrowForward}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={globalstyles.buttonContianer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home2")}
              style={globalstyles.buttonStyle}
            >
              <Text style={globalstyles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyBoardHandle>
      <Modal style={{margin:0}} transparent={true} isVisible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        
            <View style={styles.centeredView}>
              <LinearGradient
                style={styles.modalView}
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
              >
                <View style={{ borderColor: "red", paddingTop: 5 }}>
                  <View style={styles.topBar} />
                </View>
                <View style={styles.rowStyleWithTextAndInput}>
                  <Text
                    style={{
                      ...textStyles.simpleText,
                      lineHeight: RFValue(13) * 1.8,
                      fontSize: RFValue(13),
                      color: "grey",
                      fontWeight: "500",
                    }}
                  >
                    Breakfast
                  </Text>

                  <TouchableOpacity style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={styles.inputStyle}
                      placeholder="08:00"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowStyleWithTextAndInput}>
                  <Text
                    style={{
                      ...textStyles.simpleText,
                      lineHeight: RFValue(13) * 1.8,
                      fontSize: RFValue(13),
                      color: "grey",
                      fontWeight: "500",
                    }}
                  >
                    Lunch
                  </Text>

                  <TouchableOpacity style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={styles.inputStyle}
                      placeholder="12:30"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowStyleWithTextAndInput}>
                  <Text
                    style={{
                      ...textStyles.simpleText,
                      lineHeight: RFValue(13) * 1.8,
                      fontSize: RFValue(13),
                      color: "grey",
                      fontWeight: "500",
                    }}
                  >
                    Snack
                  </Text>
                  <TouchableOpacity style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={styles.inputStyle}
                      placeholder="15:20"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowStyleWithTextAndInput}>
                  <Text
                    style={{
                      ...textStyles.simpleText,
                      lineHeight: RFValue(13) * 1.8,
                      fontSize: RFValue(13),
                      color: "grey",
                      fontWeight: "500",
                    }}
                  >
                    Dinner
                  </Text>

                  <TouchableOpacity style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={styles.inputStyle}
                      placeholder="19:00"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...globalstyles.buttonContianer,
                    marginTop: RFValue(20),
                    flexDirection: focus ? "row" : "column",
                    justifyContent: "space-between",
                  }}
                >
                  {focus && (
                    <TouchableOpacity
                      onPress={() => {
                        setFocus(false), setModalVisible(false);
                      }}
                      style={{
                        ...globalstyles.buttonStyle,
                        width: getWidth(40),
                        backgroundColor: theme.transparentColor,
                      }}
                    >
                      <Text
                        style={{
                          ...globalstyles.buttonText,
                          color: theme.blueColor,
                        }}
                      >
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      setFocus(false), setModalVisible(false);
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(40) }}
                  >
                    <Text style={globalstyles.buttonText}>
                      {focus ? "Save" : "Edit"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
         
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  dropDownContainer: {
    height: RFValue(45),
    margin: 8,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: RFValue(20),
    borderColor: "#1B1561",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rowStyleWithTextAndInput: {
    borderColor: "grey",
    paddingTop: 5,
    width: getWidth(85),
    height: getHeight(6),
    justifyContent: "space-between",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    width: getWidth(18),
    height: getHeight(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 14,
    fontSize: 16,
    color: "black",
    fontFamily: fonts.AnekBanglaLight,
    fontWeight: "400",
    includeFontPadding: false,
  },
  centeredView: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    backgroundColor: "rgba(0,0,0,.1)",
    height: getHeight(100),
  },
  modalView: {
    borderTopColor: "grey",
    borderTopWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    height: getHeight(40),
    width: getWidth(100),
    marginBottom:0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  topBar: {
    borderRadius: 65,
    borderColor: "#D3D3D3",
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "grey",
  },
  change: {
    width: getWidth(19),
    height: getHeight(4),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  noChange: {
    width: getWidth(19),
    height: getHeight(4),
    borderColor: "rgba(0,0,0,0)",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignUp12;
