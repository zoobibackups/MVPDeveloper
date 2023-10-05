import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { man } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../Constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import theme from "../Constants/theme";
import { RFValue } from "react-native-responsive-fontsize";

const data = [
  {
    name: "Bench press",
    weight: "80 kg",
  },
  {
    name: "Deadlift",
    weight: "100 kg",
  },
  {
    name: "Squats",
    weight: "120 kg",
  },
  {
    name: "Shoulder press",
    weight: "60 kg",
  },
];

const data2 = [
  {
    name: "Current weight",
    weight: "76 kg",
  },
  {
    name: "Target wright",
    weight: "83 kg",
  },
  {
    name: "Height",
    weight: "178 cm",
  },
  {
    name: "Completed workouts",
    weight: "26",
  },
];
const ProfileTrainingScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"PROFILE OVERVIEW"}
        subTitle={""}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: getWidth(100) }}
      >
        <View
          style={{
            borderColor: "green",
            width: getWidth(70),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileSetting6")}
            style={{
              alignItems: "center",
              borderColor: "grey",
              justifyContent: "center",
              width: getWidth(20),
            }}
          >
            <SvgXml width={getWidth(30)} height={getHeight(15)} xml={man} />
          </TouchableOpacity>
        </View>

        <Text style={textStyles.mediumText}>Muhammad</Text>

        <Text style={styles.titleText}>Personal bests</Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("HistoryAndProgress")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text style={styles.rowText}>{item.name}</Text>
                <Text style={styles.rowText}>{item.weight}</Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{ ...styles.titleText, marginTop: moderateScale(20) }}>
          Measurements
        </Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
          onPress={() => navigation.navigate("HistoryAndProgress")}
        >
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data2.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data2.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text style={styles.rowText}>{item.name}</Text>
                <Text style={styles.rowText}>{item.weight}</Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            borderColor: "green",
            width: getWidth(90),
            height: getHeight(45),
            marginTop: 20,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Upgrade my account</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangePreferenceTraining")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Change preferences</Text>
            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ChangeGoalTraining")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Change mission/goal</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdateWeightTraining")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Update my weight</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TermsAndConditions")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Change information</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
        </View>
        <Modal animationn={"fade"} transparent={true} visible={modalVisible}>
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
                    paddingVertical: 10,
                    width: getWidth(90),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: RFValue(18),
                      fontWeight: "500",
                      fontFamily: "AnekBangla-Medium",
                    }}
                  >
                    Your new changes are saved!
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "red",
                    width: getWidth(86),
                    height: getHeight(42),
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    NOTE: If you apply the changes now, your weakly meal plan
                    could be impacted. How would you like to proceed
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false), navigation.navigate("SignUp6");
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(86) }}
                  >
                    <Text style={globalstyles.buttonText}>Apply changes Now</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    Could impact the weekly schedule.
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false), navigation.navigate("SignUp6");
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(86) }}
                  >
                    <Text style={globalstyles.buttonText}>Apply changes next week</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    Changes will applied for coming weeks.
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(86) }}
                  >
                    <Text style={globalstyles.buttonText}>Go back</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    Delete changes and go back.
                  </Text>

                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileTrainingScreen;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 16,
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: moderateScale(40),
    letterSpacing: 2,
  },
  shadowContainer: {
    width: getWidth(90),
    borderRadius: 20,
    margin: moderateScale(2),
    borderColor: "grey",
    backgroundColor: "#BBC1AD",
    borderWidth: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  rowStyle: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    width: getWidth(80),
    justifyContent: "space-between",
    paddingHorizontal: 5,
    flexDirection: "row",
    paddingVertical: moderateScale(7),
  },
  rowText: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonStyle: {
    width: getWidth(90),
    borderRadius: 10,
    height: getHeight(7),
    backgroundColor: theme.blueColor,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  imgStyle: {
    resizeMode: "contain",
    width: getWidth(5),
    height: getHeight(2),
  },
  buttonText: {
    ...globalstyles.buttonText,
    fontSize: RFValue(14),
    fontWeight: "400",
  },
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
    height: getHeight(55),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  topBar: {
    borderRadius: RFValue(3),
    overflow: "hidden",
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "grey",
  },
});
