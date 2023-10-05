import React, { useState } from "react";

import { useNavigation } from "@react-navigation/core";
import {
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import Checkbox from "../Components/CheckBox";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const itemStyles = StyleSheet.create({
  itemMainView: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(8),
    shadowColor: "rgba(103, 128, 159)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  textContainer: {
    paddingLeft: moderateScale(20),
    justifyContent: "center",
    width: getWidth(70),
  },
  title: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 17 * 1.8,
    includeFontPadding: false,
  },
  subTitle: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "400",
    lineHeight: 15 * 1.4,
    fontSize: 15,
    letterSpacing: 2,
  },
});
const RenderItem = ({ checked, setChecked, title, subtitle }) => {
  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <LinearGradient
        style={itemStyles.itemMainView}
        colors={["#FDFFF4", "#BBC1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        <View style={itemStyles.textContainer}>
          <Text style={itemStyles.title}>{title}</Text>
          <Text style={itemStyles.subTitle}>{subtitle}</Text>
        </View>
        <Checkbox
          isChecked={checked}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};
const ActiveWorkOut1 = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  
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
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <HeaderMainScreen
          onPress={() => navigation.goBack()}
          title={"ACTIVE WORKOUT"}
          subTitle={""}
          subTitleStyle={{
            color: "grey",
          }}
        />

        <View style={styles.timeRowView}>
          <View style={styles.watchBg}>
            <Image
              style={{
                resizeMode: "contain",
                width: getWidth(10),
                height: getHeight(3),
              }}
              source={require("../../assets/images/clock.png")}
            />
          </View>
          <Text style={styles.timeText}>00:43</Text>
        </View>
        <View style={styles.innerView}>
          <RenderItem
            checked={checked}
            title={"Lose Weight"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked(!checked)}
          />
          <RenderItem
            checked={checked1}
            title={"Inclined dumbbells press"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked1(!checked1)}
          />
          <RenderItem
            checked={checked2}
            title={"Cable flyes"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked2(!checked2)}
          />
          <RenderItem
            checked={checked3}
            title={"Rope pushdowns"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked3(!checked3)}
          />
          <RenderItem
            checked={checked4}
            title={"Dips"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked4(!checked4)}
          />
        </View>
        <View
          style={{ ...globalstyles.buttonContianer, marginTop: getHeight(6) }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={globalstyles.buttonStyle}
          >
            <Text style={globalstyles.buttonText}>End Workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
              <View style={{ borderColor: "red", paddingTop: 5 }}>
                <View style={styles.topBar} />
              </View>
              <View
                style={{
                  borderColor: "red",
                  paddingTop: 30,
                  width: getWidth(30),
                  height: getHeight(20),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    resizeMode: "contain",
                    width: getWidth(50),
                    borderColor: "red",
                    height: getHeight(20),
                  }}
                  source={require("../../assets/images/send.png")}
                />
              </View>

              <Text style={styles.areYouSure}>
                Are you sure, you want to end your workout
              </Text>

              <View
                style={{
                  alignItems: "center",
                  borderColor: "red",
                  height: getHeight(10),
                  width: getWidth(90),
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{
                    ...globalstyles.buttonStyle,
                    width: getWidth(40),
                    backgroundColor: theme.transparentColor,
                    borderRadius: 20,
                    borderColor: "#1B1561",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "AnekBangla-Medium",
                      color: "#1B1561",
                      fontWeight: "500",
                      fontSize: 18,
                      letterSpacing: 2,
                    }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("ActiveWorkOut3");
                  }}
                  style={{ ...globalstyles.buttonStyle, width: getWidth(40) }}
                >
                  <Text style={globalstyles.buttonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  innerView: {
    height: getHeight(50),
    width: getWidth(97),
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
  timeRowView: {
    paddingVertical: 10,
    height: getHeight(10),
    width: getWidth(90),
    borderColor: "red",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 95,
  },
  watchBg: {
    width: getWidth(12),
    height: getHeight(6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
  },
  timeText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blueColor,
    fontWeight: "600",
    fontSize: 30,
    letterSpacing: 2,
  },
  topBar: {
    borderRadius: 35,
    width: getWidth(15),
    marginTop: moderateScale(10),
    height: getHeight(0.7),
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    borderColor: "grey",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    height: getHeight(45),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  areYouSure: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 18,
    marginTop: moderateScale(20),
    lineHeight: 18 * 1.5,
    textAlign: "center",
    paddingHorizontal: moderateScale(60),
  },
});
export default ActiveWorkOut1;
