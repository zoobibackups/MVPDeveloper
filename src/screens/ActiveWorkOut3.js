import React, { useState } from "react";

import {
  Image,
  Platform,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import Checkbox from "../Components/CheckBox";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { moderateScale } from "react-native-size-matters";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal"
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

const ActiveWorkOut3 = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
 
 
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [addWeight, setAddWeight] = useState("");

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
      <ScrollView>
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

          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              shadowColor: "rgba(103, 128, 159)",
              elevation: 10,
              paddingVertical: moderateScale(10),
              paddingHorizontal: moderateScale(15),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <View style={styles.row}>
              <View style={{ ...itemStyles.textContainer, paddingLeft: 0 }}>
                <Text style={itemStyles.title}>Inclined dumbbells press</Text>
                <Text style={itemStyles.subTitle}>3 x 8-12 repetitions</Text>
              </View>
              <Checkbox
                isChecked={checked1}
                onPress={() => {
                  setChecked1(!checked1);
                }}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Set 1: 12 rep 30 kg</Text>
              <Checkbox
                isChecked={checked1}
                onPress={() => {
                  setChecked1(!checked1);
                }}
                checkboxStyle={{
                  width: 10,
                  height: 10,
                }}
                imageStyle={{
                  width: 8,
                  height: 8,
                }}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Set 2: 10 rep 35 kg</Text>
              <Checkbox
                isChecked={checked1}
                onPress={() => {
                  setChecked1(!checked1);
                }}
                checkboxStyle={{
                  width: 10,
                  height: 10,
                }}
                imageStyle={{
                  width: 8,
                  height: 8,
                }}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Set 3: xx rep xx kg</Text>
              <Checkbox
                isChecked={checked1}
                onPress={() => {
                  setChecked1(!checked1);
                }}
                checkboxStyle={{
                  width: 10,
                  height: 10,
                }}
                imageStyle={{
                  width: 8,
                  height: 8,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.row}
            >
              <Text style={itemStyles.title}>Add Additional Sets</Text>
            </TouchableOpacity>
          </LinearGradient>
          <RenderItem
            checked={checked}
            title={"Rope pushdowns"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked(!checked)}
          />
          <RenderItem
            checked={checked}
            title={"Dips"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked(!checked)}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={globalstyles.buttonStyle}
          >
            <Text style={globalstyles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" style={{margin:0}} transparent={true} isVisible={modalVisible}>
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

                <Text style={styles.modalHeading}>Add additional sets</Text>

                <View style={styles.inputRow}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Rep:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => setAddWeight(text)}
                      value={addWeight}
                      placeholder="00"
                      placeholderTextColor="grey"
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Kg:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => setAddWeight(text)}
                      value={addWeight}
                      placeholder="00"
                      placeholderTextColor="grey"
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false)
                    setTimeout(() => {
                      setModalVisible2(true);
                    }, 2000);
                  }}
                  style={{
                    ...globalstyles.buttonStyle,
                    marginTop: moderateScale(30),
                  }}
                >
                  <Text style={globalstyles.buttonText}>Save</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal animationType="slide" style={{margin:0}} transparent={true} isVisible={modalVisible2}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible2(!modalVisible2)}
          >
            <View style={styles.centeredView}>
              <LinearGradient
                style={{ ...styles.modalView, height: getHeight(43) }}
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
                    // borderWidth: 1,
                    width: getWidth(70),
                    height: getHeight(18),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: getWidth(50),
                      // borderWidth: 1,
                      borderColor: "red",
                      height: getHeight(16),
                    }}
                    source={require("../../assets/images/tickGroup.png")}
                  />
                </View>

                <Text
                  style={{
                    ...styles.modalHeading,
                    paddingHorizontal: moderateScale(50),
                  }}
                >
                  Great work, you have completed your workout
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible2(false)
                    setTimeout(() => {
                      setModalVisible3(true);
                    }, 2000);
                  }}
                  style={globalstyles.buttonStyle}
                >
                  <Text style={globalstyles.buttonText}>Save Session</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal animationType="slide" style={{margin:0}} transparent={true} isVisible={modalVisible3}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible3(!modalVisible3)}
          >
            <View style={styles.centeredView}>
              <LinearGradient
                style={{ ...styles.modalView, height: getHeight(43) }}
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
                    // borderWidth: 1,
                    width: getWidth(70),
                    height: getHeight(18),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: getWidth(50),
                      // borderWidth: 1,
                      borderColor: "red",
                      height: getHeight(16),
                    }}
                    source={require("../../assets/images/tickGroup.png")}
                  />
                </View>

                <Text style={styles.modalHeading}>Session saved!</Text>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible3(false);
                    navigation.navigate("TrainingHome1");
                  }}
                  style={{
                    ...globalstyles.buttonStyle,
                    marginTop: moderateScale(20),
                  }}
                >
                  <Text style={globalstyles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  innerView: {
    height: getHeight(65),
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
    height: getHeight(35),
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
  row: {
    borderRadius: 20,
    width: "100%",
    borderColor: "#F5F5F5",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: getWidth(85),
  },
  title: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12 * 1.8,
    includeFontPadding: false,
  },
  input: {
    height: 50,
    marginBottom: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 10,
    fontSize: RFValue(18),
    width: getWidth(40),
    fontFamily: fonts.AnekBanglaMedium,
    borderColor: "rgba(0,0,0,.2)",
  },
  modalHeading: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    marginVertical: moderateScale(10),
    textAlign: "center",
  },
  inputRow: {
    paddingTop: 9,
    width: getWidth(90),
    height: getHeight(10),
    flexDirection: "row",
  },
  inputContainer: {
    borderColor: "green",
    width: getWidth(45),
    height: getHeight(10),
  },
  inputLabel: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#000000",
    fontWeight: "400",
    fontSize: 16,
    includeFontPadding: false,
  },
});
export default ActiveWorkOut3;
