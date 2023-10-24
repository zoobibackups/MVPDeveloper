import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { tickGroup } from "../../assets/svg";
import MainCustomHeader from "../Components/MainCustomHeader";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
import Modal from "react-native-modal"
const Home2 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [focused, setfocused] = useState(false);
  return (
    <>
      <View style={styles.mainInput}>
        <Image
          source={require("../../assets/images/fruitBG2.png")}
          style={styles.backgroundImage}
        />
        <MainCustomHeader
          title={"Diet and exercise schedules"}
          titleStyle={styles.headerTitle}
          subTitle={
            "Get a individual and customized diet and training scheduels based on your unique profile in a matter of seconds."
          }
          subTitleStyle={styles.headerSubTitle}
        />

        <View style={styles.centerViewheading}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textinput}
              onChangeText={() => setfocused(true)}
              placeholderTextColor="grey"
              placeholder="Type Prompt..."
            />
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => {
                  setfocused(false), setModalVisible(true);
                }}
                style={
                  focused ? styles.generateButton : styles.generateButtonDull
                }
              >
                <Text
                  style={{ ...globalstyles.buttonText, fontSize: RFValue(12) }}
                >
                  Generate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textparagraph}>
              Would you like to get a customized meal plan for the entire week?
              Just click the button below.
            </Text>
          </View>
          <View style={globalstyles.buttonContianer}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.button}
            >
              <Text
                style={{ ...globalstyles.buttonText, fontSize: RFValue(12) }}
              >
                Create schedule
              </Text>
            </TouchableOpacity>
            <Text style={styles.howItWorkText}>How it works</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.termAndCOnditionText}>TERMS AND CONDITIONS</Text>
        <Modal
          animationType="slide"
          style={{ justifyContent: "flex-end", margin:0 }}
          transparent={true}
          isVisible={modalVisible}
        >
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.centeredView}>
              <LinearGradient
                style={styles.lineargradientModal}
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
              >
                <View style={{ paddingTop: 5 }}>
                  <View style={styles.topBar} />
                </View>
                <View style={styles.checkSvgView}>
                  <SvgXml width={getWidth(35)} xml={tickGroup} />

                  <Text style={styles.modalText}>
                    Great! We have successfully created a customized meal plan
                    to fit your needs.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {setModalVisible(false), navigation.navigate("Home4")}}
                    style={styles.button}
                  >
                    <Text style={globalstyles.buttonText}>Check it out</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainInput: {
    alignItems: "center",
    borderColor: "green",
    height: getHeight(85),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "170%",
    marginTop: 0,
    height: getHeight(110),
  },
  headerTitle: {
    fontFamily: fonts.AnekBanglaSemiBold,
    color: "black",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 2,
    includeFontPadding: false,
    textAlign: "center",
  },
  headerSubTitle: {
    fontFamily: fonts.AnekBanglaRegular,
    color: "black",
    fontWeight: "300",
    fontSize: 14,
    paddingHorizontal: getWidth(8),
    textAlign: "center",
    paddingVertical: 10,
    includeFontPadding: false,
  },
  centerViewheading: {
    width: getWidth(90),
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingRight: 27,
    height: getHeight(37),
  },
  textInputView: {
    borderWidth: 1,
    borderRadius: 30,
    width: getWidth(76),
    height: getHeight(6),
    borderColor: theme.blueColor,
    justifyContent: "space-between",
    paddingHorizontal: 13,
    flexDirection: "row",
  },
  textinput: {
    height: getHeight(6),
    fontFamily: fonts.AnekBanglaMedium,
    borderRadius: 30,
    width: getWidth(45),
    borderColor: "#1B1561",
    color: "grey",
    paddingLeft: 8,
  },
  buttonView: {
    alignItems: "center",
    borderColor: "red",
    height: getHeight(6),
    width: getWidth(25),
    borderRadius: 30,
  },
  textView: {
    borderRadius: 20,
    width: getWidth(70),
    height: getHeight(11),
    justifyContent: "center",
    paddingTop: 10,
    alignItems: "center",
  },
  textparagraph: {
    fontFamily: fonts.AnekBanglaRegular,
    color: "grey",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 1,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1B1561",
    width: getWidth(45),
    height: getHeight(6),
    backgroundColor: "#1B1561",
    justifyContent: "center",
    alignItems: "center",
  },
  howItWorkText: {
    fontFamily: fonts.AnekBanglaRegular,
    color: "black",
    fontWeight: "400",
    fontSize: 13,
    textDecorationLine: "underline",
    textAlign: "center",
    paddingVertical: 25,
  },
  termAndCOnditionText: {
    color: theme.blueColor,
    fontSize: 14,
    fontFamily: fonts.AnekBanglaRegular,
    fontWeight: "400",
    letterSpacing: 2,
    textAlign: "center",
    includeFontPadding: false,
    height: getHeight(7),
  },
  topBar: {
    borderRadius: 35,
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  lineargradientModal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    height: getHeight(45),
    width: getWidth(100),
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    backgroundColor: "rgba(0,0,0,0)",
    height: getHeight(100),
  },
  modalView: {
    marginBottom: moderateScale(100),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    height: getHeight(55),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  generateButton: {
    height: getHeight(6) - 2,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: theme.blueColor,
    backgroundColor: theme.blueColor,
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(29),
  },
  generateButtonDull: {
    height: getHeight(6) - 2,
    borderRadius: 30,
    borderColor: theme.blueColor,
    opacity: 1,
    backgroundColor: theme.blueColor,
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(29),
  },
  checkSvgView: {
    borderColor: "grey",
    paddingTop: 13,
    width: getWidth(81),
    height: getHeight(42),
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: moderateScale(30),
  },
  modalText: {
    fontFamily: fonts.AnekBanglaRegular,
    color: "rgba(0,0,0,.8)",
    fontWeight: "400",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Home2;
