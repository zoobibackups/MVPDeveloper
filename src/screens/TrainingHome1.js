import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import Modal from "react-native-modal"
import {
  bicep,
  chart,
  community,
  custom,
  diary,
  dumble,
  fire,
  flag,
  history,
  man,
  preformly,
  runningMan,
  sleep,
  spark,
} from "../../assets/svg";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../Constants/fonts";
import { globalstyles } from "../styles/globalestyles";
import { moderateScale } from "react-native-size-matters";

const TrainingHome1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
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
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <SvgXml
            width={getWidth(45)}
            height={getHeight(5)}
            xml={preformly}
            style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
          />

          <View style={styles.topRow}>
            <View
              style={{
                width: getWidth(70),
                justifyContent: "center",
              }}
            >
              <Text style={styles.morningmsgText}>Good Morning,</Text>
              <Text
                style={{
                  fontFamily: "AnekBangla-Medium",
                  color: "black",
                  fontWeight: "500",
                  fontSize: 26,
                  letterSpacing: 2,
                  includeFontPadding: false,
                }}
              >
                Alex
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileTrainingScreen")}
              style={{
                borderColor: "grey",
                justifyContent: "center",
                width: getWidth(15),
              }}
            >
              <SvgXml width={getWidth(15)} xml={man} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("StepCounter")}>
            <View style={styles.stepsRow}>
              <View
                style={{
                  width: getWidth(40),
                  height: getHeight(20),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgXml
                  width={getWidth(30)}
                  height={getHeight(20)}
                  xml={chart}
                />
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...globalstyles.buttonStyle,
              width: getWidth(90),
              marginVertical: moderateScale(10),
            }}
          >
            <Text style={globalstyles.buttonText}>TO SCHEDULE</Text>
          </TouchableOpacity>

          <View style={styles.boxesContainer}>
            <View style={styles.boxesRow}>
              <View style={styles.boxStyle}>
                <View style={styles.iconTextRow}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={fire}
                  />
                  <Text style={styles.iconText}>Calories</Text>
                </View>
                <Text style={styles.numberText}>
                  618
                  <Text style={styles.unitText}>kcal</Text>
                </Text>
              </View>
              <View style={{ ...styles.boxStyle, backgroundColor: "#bfbfbc" }}>
                <View style={styles.iconTextRow}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={spark}
                  />
                  <Text style={{ ...styles.iconText, color: "#7042C9" }}>
                    Exercise
                  </Text>
                </View>
                <Text style={{ ...styles.numberText, color: "#7042C9" }}>
                  24
                  <Text style={{ ...styles.unitText, color: "#7042C9" }}>
                    min
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.boxesRow}>
              <View style={{ ...styles.boxStyle, backgroundColor: "#d6e9dd" }}>
                <View style={styles.iconTextRow}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={flag}
                  />
                  <Text style={{ ...styles.iconText, color: "#0DB1AD" }}>
                    Walking
                  </Text>
                </View>
                <Text style={{ ...styles.numberText, color: "#0DB1AD" }}>
                  10
                  <Text style={{ ...styles.unitText, color: "#0DB1AD" }}>
                    km
                  </Text>
                </Text>
              </View>

              <View style={{ ...styles.boxStyle, backgroundColor: "#b5c4bc" }}>
                <View style={styles.iconTextRow}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={sleep}
                  />
                  <Text style={{ ...styles.iconText, color: "#197BD2" }}>
                    Sleep
                  </Text>
                </View>
                <Text style={{ ...styles.numberText, color: "#197BD2" }}>
                  8
                  <Text style={{ ...styles.unitText, color: "#197BD2" }}>
                    hrs
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              borderColor: "red",
              height: getHeight(45),
              width: getWidth(90),
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "AnekBangla-Medium",
                color: "black",
                fontWeight: "500",
                alignSelf: "flex-start",
                fontSize: 18,
                letterSpacing: 2,
              }}
            >
              How would you like to proceed:
            </Text>

            <View style={styles.boxesContainer}>
              <View style={styles.boxesRow}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <LinearGradient
                    style={{
                      ...styles.boxStyle,
                      borderWidth: 1,
                      borderColor: "rgba(0,0,0,.3)",
                      alignItems: "center",
                    }}
                    colors={["#FDFFF4", "#BBC1AD"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.8, y: 0 }}
                  >
                    <SvgXml
                      width={getWidth(30)}
                      xml={dumble}
                      style={{
                        marginTop: getHeight(3),
                      }}
                    />

                    <Text style={styles.iconBoxText}>Workout</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Combined")}
                >
                  <LinearGradient
                    style={{
                      ...styles.boxStyle,
                      borderWidth: 1,
                      borderColor: "rgba(0,0,0,.3)",
                      alignItems: "center",
                    }}
                    colors={["#FDFFF4", "#BBC1AD"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.8, y: 0 }}
                  >
                    <SvgXml
                      width={getWidth(30)}
                      style={{
                        marginTop: getHeight(3),
                      }}
                      xml={history}
                    />

                    <Text
                      style={{ ...styles.iconBoxText, marginTop: getHeight(1) }}
                    >
                      Training history
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.boxesRow}>
                <TouchableOpacity>
                  <LinearGradient
                    style={{
                      ...styles.boxStyle,
                      borderWidth: 1,
                      borderColor: "rgba(0,0,0,.3)",
                      alignItems: "center",
                    }}
                    colors={["#FDFFF4", "#BBC1AD"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.8, y: 0 }}
                  >
                    <SvgXml
                      width={getWidth(30)}
                      xml={community}
                      style={{
                        marginTop: getHeight(3),
                      }}
                    />

                    <Text
                      style={{ ...styles.iconBoxText, marginTop: getHeight(2) }}
                    >
                      Community
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("TrainingDiary2")}
                >
                  <LinearGradient
                    style={{
                      ...styles.boxStyle,
                      borderWidth: 1,
                      borderColor: "rgba(0,0,0,.3)",
                      alignItems: "center",
                    }}
                    colors={["#FDFFF4", "#BBC1AD"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.8, y: 0 }}
                  >
                    <SvgXml
                      width={getWidth(30)}
                      style={{
                        marginTop: getHeight(3),
                      }}
                      xml={diary}
                    />
                    <Text
                      style={{ ...styles.iconBoxText, marginTop: getHeight(2) }}
                    >
                      Training diary
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
      <Modal animationType="slide" style={{margin:0}} transparent={true} isVisible={modalVisible}>
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

              <Text
                style={{
                  fontFamily: fonts.AnekBanglaMedium,
                  color: "black",
                  fontWeight: "400",
                  fontSize: 17,
                  textAlign: "center",
                  paddingVertical: 10,
                  letterSpacing: 2,
                }}
              >
                Choose your workout
              </Text>

              <View style={styles.boxesRow}>
                <View
                  style={{
                    width: getWidth(47),
                    height: getHeight(20),
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        height: getHeight(14),
                        width: getWidth(31),
                        borderRadius: 20,
                        backgroundColor: "#1B1561",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <SvgXml width={getWidth(20)} xml={custom} />
                    </View>
                  </TouchableOpacity>
                  <Text style={{ ...styles.iconBoxText, marginTop: 0 }}>
                    Custom workout
                  </Text>
                </View>

                <View
                  style={{
                    width: getWidth(47),
                    height: getHeight(20),
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>  {setModalVisible(false), navigation.navigate("TrainingBox1")}}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        height: getHeight(14),
                        width: getWidth(31),
                        borderRadius: 20,
                        backgroundColor: "#1B1561",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <SvgXml width={getWidth(20)} xml={bicep} />
                    </View>
                  </TouchableOpacity>
                  <Text style={{ ...styles.iconBoxText, marginTop: 0 }}>
                    Pre-made workout
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  borderColor: "red",
                  height: getHeight(10),
                }}
              >
                <TouchableOpacity
                  onPress={() => {setModalVisible(false), navigation.navigate("CreateWorkOut1")}}
                  style={{
                    ...globalstyles.buttonStyle,
                    width: getWidth(80),
                    marginVertical: moderateScale(10),
                  }}
                >
                  <Text style={globalstyles.buttonText}>
                    Create a new workout
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
  morningmsgText: {
    fontFamily: "AnekBangla-Light",
    color: "black",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 2,
    includeFontPadding: false,
  },
  topRow: {
    flexDirection: "row",
    borderColor: "red",
    width: getWidth(90),
    height: getHeight(7),
    justifyContent: "space-between",
  },
  stepsRow: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    marginTop: 20,
    width: getWidth(90),
    height: getHeight(21),
    borderRadius: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  boxesContainer: {
    alignItems: "center",
    //borderColor: "red",
    height: getHeight(37.5),
    width: getWidth(90),
    marginTop: 10,
    //  borderWidth: 1,
  },
  boxesRow: {
    borderColor: "green",
    height: getHeight(20),
    width: getWidth(90),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  boxStyle: {
    alignItems: "center",
    borderColor: "blue",
    borderRadius: 20,
    height: getHeight(17),
    backgroundColor: "#ebdfd7",
    width: getWidth(40),
  },
  iconTextRow: {
    alignItems: "center",
    borderColor: "blue",
    borderRadius: 20,
    height: getHeight(8),
    width: getWidth(40),
    paddingLeft: 5,
    flexDirection: "row",
  },
  iconText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#D2416E",
    fontWeight: "500",
    fontSize: 20,
    letterSpacing: 2,
    includeFontPadding: false,
  },
  numberText: {
    fontFamily: fonts.AnekBanglaBold,
    color: "#D2416E",
    fontWeight: "700",
    fontSize: 40,
    letterSpacing: 2,
    includeFontPadding: false,
  },
  unitText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#D2416E",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 2,
    includeFontPadding: false,
  },
  stepsText: {
    fontFamily: "AnekBangla-Medium",
    color: "#282B2A",
    fontWeight: "500",
    fontSize: 12,
    letterSpacing: 2,
    includeFontPadding: false,
  },
  iconBoxText: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 2,
    marginTop: getHeight(3),
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
export default TrainingHome1;
