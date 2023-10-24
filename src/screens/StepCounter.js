import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { brain, chart, runningMan } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import Modal from "react-native-modal"
const data = [
  {
    icon: brain,
    percentage: "50%",
    text: "Less likely to develop dementia",
  },
  {
    icon: brain,
    percentage: "300",
    text: "Calories burnt",
  },
  {
    icon: brain,
    percentage: "0.2%",
    text: "Frontal cortex growth",
  },
];

const data2 = [
  {
    icon: runningMan,
    percentage: "86",
    text: "Avgerage life span",
  },
  {
    icon: runningMan,
    percentage: "98",
    text: "Your predicted span",
  },
  {
    icon: runningMan,
    percentage: "+ 12%",
    text: "Life span expectancy %",
  },
];
const StepCounter = () => {
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
        subTitle={"Step Counter"}
        subTitleStyle={{
          textAlign: "center",
          alignSelf: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.stepsRow}
          onPress={() => navigation.navigate("StepCounter")}
        >
          <View
            style={{
              width: getWidth(40),
              height: getHeight(20),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgXml width={getWidth(30)} height={getHeight(20)} xml={chart} />
            <Text
              style={{
                position: "absolute",
                fontSize: RFValue(25),
                fontFamily: fonts.AnekBanglaMedium,
              }}
            >
              85%
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10,
              width: getWidth(50),
              height: getHeight(20),
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <SvgXml width={getWidth(30)} xml={runningMan} />

            <Text
              style={{
                fontFamily: fonts.AnekBanglaSemiBold,
                color: "black",
                fontWeight: "500",
                fontSize: 15,
                letterSpacing: 2,
              }}
            >
              Steps
            </Text>
            <View
              style={{
                borderColor: "grey",
                paddingLeft: 20,
                width: getWidth(50),
                height: getHeight(7),
                borderRadius: 20,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  borderColor: "grey",
                  width: getWidth(30),
                  height: getHeight(7),
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "AnekBangla-Medium",
                    color: "#282B2A",
                    fontWeight: "600",
                    fontSize: 40,
                    letterSpacing: 2,
                  }}
                >
                  6,566
                </Text>
              </View>
              <View
                style={{
                  borderColor: "grey",
                  width: getWidth(20),
                  height: getHeight(7),
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.stepsText}>Steps</Text>
              </View>
            </View>
            <View
              style={{
                borderColor: "grey",
                paddingLeft: 10,
                marginTop: 6,
                width: getWidth(50),
                height: getHeight(3),
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "AnekBangla-Medium",
                  color: "#9EA6A4",
                  fontWeight: "400",
                  fontSize: 12,
                  letterSpacing: 2,
                }}
              >
                of 10,000 steps
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",

            height: getHeight(50),
            width: getWidth(95),
            marginTop: 20,
          }}
        >
          <View style={styles.row}>
            {data.map((item, index) => {
              return (
                <LinearGradient
                  style={styles.boxStyle}
                  colors={["#FDFFF4", "#BBC1AD"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.8, y: 0 }}
                >
                  <View style={styles.xmlBg}>
                    <SvgXml
                      width={getWidth(6)}
                      height={getHeight(4)}
                      xml={item.icon}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: "AnekBangla-Medium",
                      color: "black",
                      fontWeight: "500",
                      fontSize: 16,
                      letterSpacing: 2,
                    }}
                  >
                    {item.percentage}
                  </Text>

                  <Text
                    style={{
                      fontFamily: "AnekBangla-Medium",
                      color: "grey",
                      fontWeight: "400",
                      fontSize: 12,
                      letterSpacing: 2,
                      lineHeight: 12 * 1.4,
                    }}
                  >
                    {item.text}
                  </Text>
                </LinearGradient>
              );
            })}
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderColor: "green",
              width: getWidth(90),
              marginTop: 15,
              justifyContent: "space-between",
              //   alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: "AnekBangla-Medium",
                color: "#1B1561",
                fontWeight: "700",
                fontSize: 18,
                letterSpacing: 2,
              }}
            >
              OTHER BENEFITS
            </Text>
          </View>
          <View
            style={{
              // alignItems: 'center',
              borderColor: "green",
              height: getHeight(22),
              marginTop: 15,
              width: getWidth(95),
              justifyContent: "space-evenly",
              //   borderWidth: 1,
              flexDirection: "row",
            }}
          >
            {data2.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <LinearGradient
                    style={{
                      width: getWidth(29),
                      borderRadius: 20,
                      padding: getWidth(3),
                      height: getHeight(18),
                      borderColor: "#F5F5F5",
                      backgroundColor: "white",
                      borderWidth: 0.7,
                      borderColor: "rgba(0,0,0,.2)",
                      shadowColor: "rgba(103, 128, 159)",

                      elevation: 10,
                    }}
                    colors={["#FDFFF4", "#BBC1AD"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.8, y: 0 }}
                  >
                    <SvgXml
                      width={getWidth(8)}
                      height={getHeight(4)}
                      xml={item.icon}
                    />

                    <Text
                      style={{
                        fontFamily: "AnekBangla-Medium",
                        color: "black",
                        fontWeight: "500",
                        fontSize: 16,
                        letterSpacing: 2,
                      }}
                    >
                      {item.percentage}
                    </Text>

                    <Text
                      style={{
                        fontFamily: "AnekBangla-Medium",
                        color: "grey",
                        fontWeight: "400",
                        fontSize: 12,
                        letterSpacing: 2,
                        lineHeight: 12 * 1.4,
                      }}
                    >
                      {item.text}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
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
                  Dementia:
                </Text>
              </View>
              <View
                style={{
                  borderColor: "red",
                  width: getWidth(79),
                  height: getHeight(19),
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
                  According to an article in Cnn Health, People between the ages
                  of 40 and 79 who took 9,826 steps per day were 50% less likely
                  to develop dementia within seven years, the study found.
                  Furthermore, people who walked with “purpose” – at a pace over
                  40 steps a minute – were able to cut their risk of dementia by
                  57% with just 6,315 steps a day.
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  borderColor: "red",

                  marginBottom: getHeight(8),
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
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
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  stepsRow: {
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.2)",
    marginTop: 20,
    margin: 10,
    width: getWidth(90),
    height: getHeight(21),
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,.01)",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    flexDirection: "row",
  },
  boxStyle: {
    width: getWidth(29),
    borderRadius: 20,
    padding: getWidth(3),
    height: getHeight(18),
    borderColor: "#F5F5F5",
    backgroundColor: "white",
    borderWidth: 0.7,
    borderColor: "rgba(0,0,0,.2)",
    shadowColor: "rgba(103, 128, 159)",
    elevation: 10,
  },
  row: {
    height: getHeight(22),
    width: getWidth(95),
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  xmlBg: {
    width: getWidth(8),
    justifyContent: "center",
    backgroundColor: "rgba(27, 21, 97, 0.1)",
    alignItems: "center",
    height: getHeight(4),
    borderRadius: 7,
  },
  topBar: {
    borderRadius: 35,
    width: getWidth(15),
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
    height: getHeight(40),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
