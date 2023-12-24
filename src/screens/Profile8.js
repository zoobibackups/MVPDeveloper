import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { man } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import theme from "../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal"
import { useSelector } from "react-redux";
const data = [
  {
    challenge: "Number of meals ",
    difficulty: "235",
    status: "35",
  },
  {
    challenge: "Carbs",
    difficulty: "554",
    status: "12 g",
  },
  {
    challenge: "Protein",
    difficulty: "430",
    status: "13 g",
  },
  {
    challenge: "Calories",
    difficulty: "642",
    status: "15 g",
  },
];

const Profile8 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible3, setModalVisible3] = useState(false);
  const {user} = useSelector(state => state.userReducer)
  
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
              width: getWidth(30),
              height:getWidth(30)
            }}
          >
            <Image source={{uri:user.profilePhoto}} />
          </TouchableOpacity>
        </View>

        <Text style={textStyles.mediumText}>{user.name}</Text>
        <TouchableOpacity
          style={{ ...styles.shadowContainer }}
         
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
                <Text style={styles.rowText}>{item.challenge}</Text>
                <Text style={styles.rowText}>{item.status}</Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>

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
                    width: getWidth(86),
                    height: getHeight(30),
                    marginTop: getHeight(3),
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
                    Choose Client
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: getWidth(90),
                      alignSelf: "center",

                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {["John", "Muhammad", "Rager"].map((item, index) => {
                      return (
                        <View
                          key={`${index}`}
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("ProfileSetting6")
                            }
                            style={{
                              borderColor: "grey",
                              shadowColor: "#000",
                              shadowOffset: {
                                width: 0,
                                height: 5,
                              },
                              shadowOpacity: 0.34,
                              shadowRadius: 6.27,
                              elevation: 10,
                              width: index == 1 ? getWidth(30) : getWidth(20),
                            }}
                          >
                            <SvgXml
                              width={index == 1 ? getWidth(30) : getWidth(20)}
                              height={index == 1 ? getWidth(30) : getWidth(20)}
                              xml={man}
                            />
                          </TouchableOpacity>

                          <Text
                            style={{
                              ...textStyles.mediumText,
                              fontSize: index == 1 ? RFValue(14) : RFValue(12),
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      setTimeout(() => {
                        setModalVisible3(true);
                      }, 2000);
                    }}
                    style={globalstyles.buttonStyle}
                  >
                    <Text style={globalstyles.buttonText}>Select</Text>
                  </TouchableOpacity>
                </View>
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
                      borderColor: "red",
                      height: getHeight(16),
                    }}
                    source={require("../../assets/images/tickGroup.png")}
                  />
                </View>

                <Text style={styles.modalHeading}>
                  Great! We have successfully generated a customized meal plan
                  to fit your client’s needs.
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible3(false);
                    navigation.navigate("Combined");
                  }}
                  style={{
                    ...globalstyles.buttonStyle,
                    marginTop: moderateScale(20),
                  }}
                >
                  <Text style={globalstyles.buttonText}>Send to client</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

export default Profile8;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#000000",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 2,
  },
  shadowContainer: {
    width: getWidth(90),
    borderRadius: RFValue(15),
    margin: moderateScale(2),
    borderColor: "grey",
    backgroundColor: "#BBC1AD",
    borderWidth: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,.6)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  rowStyle: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    width: getWidth(80),
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: moderateScale(13),
  },
  rowText: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: RFValue(12),
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
    height: getHeight(40),
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
  modalHeading: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#0008",
    paddingHorizontal: getWidth(11),
    fontWeight: "500",
    fontSize: 16,
    marginVertical: moderateScale(5),
    textAlign: "center",
  },
});
