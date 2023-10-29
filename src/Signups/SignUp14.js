import React, { useState } from "react";

import {
  StyleSheet,
  Text,Alert,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../Components/CustomHeader";
import textStyles, { globalstyles } from "../styles/globalestyles";
import Modal from "react-native-modal"
import { setGoalWeightTime } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const SignUp14 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [time, setTime] = useState("");
  const [weight, setWeight] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const validateData = () => {
    if(time.trim() == ""){
      Alert.alert("INVALID TIME","Please enter valid time")
      return
     }
     if(weight.trim() == ""){
      Alert.alert("INVALID WEIGHT","Please enter valid weight")
      return
     }

     dispatch(setGoalWeightTime({time:time,weight:weight}))
  }
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
            subTitle={"GOAL WEIGHT"}
          />

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(65),
              width: getWidth(90),
              borderColor: "red",
              //   borderWidth: 1,
            }}
          >
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Goal Weight:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setWeight(text)}
                value={weight}
                placeholder="Enter your goal weight"
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>T i m e :</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setTime(text)}
                value={time}
                placeholder="I want to reach my goal in..."
                placeholderTextColor="grey"
              />
            </View>
            <View style={{ paddingTop: 25 }}>
              <Text
                style={{
                  ...textStyles.lightText,
                  fontSize: RFValue(10),
                  lineHeight: RFValue(14),
                  textAlign: "justify",
                  fontWeight: "300",
                  letterSpacing: RFValue(1),
                }}
              >
                To lose weight in a healthy and sustainable way, it is
                recommended that you try to lose 0.5-1 kg per week through a
                combination of healthy diet and exercise. This means that you
                need to create a caloric deficit of around 500-1000 calories per
                day by eating a healthy and balanced low-calorie diet and
                increasing your physical activity.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ ...globalstyles.buttonStyle, marginTop: getHeight(5) }}
            >
              <Text style={globalstyles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>

          <Modal animationn={"fade"} style={{margin:0}} transparent={true} isVisible={modalVisible}>
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}
            >
              <View style={styles.centeredView}>
                <LinearGradient
                  style={styles.modalView}
                  colors={["#FDFFF4", "#BBC1AD"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.8, y: 0 }}
                >
                  <View style={{ borderColor: "red", paddingTop: RFValue(10) }}>
                    <Text style={styles.topBar} />
                  </View>
                  <View
                    style={{
                      borderColor: "red",
                      paddingTop: 15,
                      // borderWidth: 1,
                      width: getWidth(90),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#1B1561",
                        fontSize: 25,
                        fontWeight: "700",
                        fontFamily: "AnekBangla-Medium",
                      }}
                    >
                      DISCLAIMER:
                    </Text>
                  </View>
                  <View
                    style={{
                      borderColor: "red",

                      width: getWidth(79),

                      height: getHeight(42),

                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...textStyles.lightText,
                        fontSize: RFValue(10),
                        lineHeight: RFValue(14),
                        textAlign: "justify",
                        fontWeight: "300",
                        letterSpacing: RFValue(1),
                      }}
                    >
                      The following information is provided for general purposes
                      only and should not be considered a substitute for
                      professional medical advice or guidance. Extreme weight
                      loss goals can be dangerous and may pose serious health
                      risks. It is important to approach weight loss with
                      realistic expectations and consult with a healthcare
                      professional or registered dietitian before embarking on
                      any weight loss program. We do not endorse or take
                      responsibility for any extreme weight loss goals or the
                      potential adverse effects that may arise from pursuing
                      such goals. Individual results may vary, and it is crucial
                      to prioritize overall health and well-being when
                      considering weight loss. Please seek qualified medical
                      advice to determine the most appropriate approach for your
                      specific circumstances.
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      borderColor: "red",
                      height: getHeight(11),
                      marginBottom: getHeight(8),
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(false), navigation.navigate("SignUp6");
                      }}
                      style={globalstyles.buttonStyle}
                    >
                      <Text style={globalstyles.buttonText}>Ok</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  modalView: {
    borderColor: "grey",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    height: getHeight(65),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "900",
  },
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: "#1B1561",
    color: "grey",
  },
  modal: {
    justifyContent: "flex-end",
    marginLeft: 0,
    bottom: 0,
    top: 10,
  },
  topBar: {
    borderRadius: RFValue(3),
    overflow: "hidden",
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "grey",
  },
});
export default SignUp14;
