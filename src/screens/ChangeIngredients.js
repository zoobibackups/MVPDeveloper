import { useNavigation } from "@react-navigation/core";
import { Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { preformly } from "../../assets/svg";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { moderateScale } from "react-native-size-matters";
import { globalstyles } from "../styles/globalestyles";
import theme from "../Constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../Constants/fonts";
const data = [
  {
    name: "Olive oil",
  },
  {
    name: "Black pepper",
  },
  {
    name: "Spaghetti",
  },
  {
    name: "Butter",
  },
  {
    name: "Pecorino Romano",
  },
  {
    name: "Heavy Cream",
  },
];

const itemStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 5,
    height: getHeight(6),
    width: getWidth(80),
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,.2)",

    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headingText: {
    fontFamily: "AnekBangla-Regular",
    color: "grey",
    fontWeight: "400",
    fontSize: 16,
    includeFontPadding: false,
  },
  changeButton: {
    width: getWidth(24),
    height: getHeight(3.5),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  changeButonText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "rgba(0,0,0,.8)",
    includeFontPadding: false,
    fontSize: RFValue(12),
  },
});

const ChangeIngredients = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible1, setModalVisible1] = useState(false);
  const renderItem = ({ item, index }) => {
    return (
      <View style={itemStyle.row}>
        <Text style={itemStyle.headingText}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => setModalVisible1(true)}
          style={itemStyle.changeButton}
        >
          <Text style={itemStyle.changeButonText}>Change</Text>
        </TouchableOpacity>
      </View>
    );
  };
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
        <View
          style={{
            alignItems: "center",
            paddingVertical: 30,
            //   borderWidth: 1,
            height: getHeight(20),
          }}
        >
          <SvgXml
            width={getWidth(45)}
            height={getHeight(5)}
            xml={preformly}
            style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
          />

          <Text
            style={{
              fontFamily: "AnekBangla-Medium",
              color: "black",
              fontWeight: "400",
              fontSize: 18,
              paddingTop: 30,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            CHANGE INGREDIENTS
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            //   paddingVertical: 30,
            // borderWidth: 1,
            height: getHeight(52),
          }}
        >
          <View
            style={{
              alignItems: "center",
              paddingVertical: 5,
              borderWidth: 1,
              backgroundColor: "transparent",
              shadowColor: "rgba(103, 128, 159)",
              borderColor: "grey",
              borderRadius: 20,
              height: getHeight(52),
              width: getWidth(85),
            }}
          >
            <Text
              style={{
                fontFamily: "AnekBangla-Medium",
                color: "rgba(0,0,0,.8)",
                fontWeight: "500",
                alignSelf: "flex-start",
                marginLeft: moderateScale(15),
                fontSize: 17,
                textAlign: "left",
              }}
            >
              All items:
            </Text>

            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
        <View
          style={{
            width: getWidth(100),
            height: getHeight(18),
            //   borderWidth:1,
            //   flexDirection: 'row',
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={{
              ...globalstyles.buttonStyle,
              marginVertical: moderateScale(15),
              width: getWidth(84),
            }}
          >
            <Text style={globalstyles.buttonText}>Save changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              ...globalstyles.buttonStyle,
              width: getWidth(84),
              borderWidth: 1,
              borderColor: "#1B1561",
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{ ...globalstyles.buttonText, color: theme.blueColor }}
            >
              Go back
            </Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.centeredView}>
              <LinearGradient
                style={{
                  borderColor: "grey",
                  borderWidth: 1,
                  borderBottomWidth: 0,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  alignItems: "center",
                  height: getHeight(50),
                  width: getWidth(100),

                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                }}
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
              >
                <View style={{ borderColor: "red", paddingTop: 5 }}>
                  <View style={styles.topBar} />
                </View>

                <Text
                  style={{
                    fontFamily: "AnekBangla-Medium",
                    color: "#1B1561",
                    fontWeight: "700",
                    fontSize: 26,
                    textAlign: "center",
                    letterSpacing: 2,
                    marginTop: moderateScale(10),
                  }}
                >
                  Disclaimer:
                </Text>

                <Text style={styles.paragraphText}>
                  If you change any of the original ingredients in a recipe, we
                  can no longer guarantee you that you calorific intake stays
                  the same. Also, the chosen distribution of micronutrients will
                  be disrupted. We recommend that you, instead of replacing any
                  ingredients, buying the correct ones from your local grocery
                  store.
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{
                    ...globalstyles.buttonStyle,
                    marginVertical: moderateScale(15),
                    width: getWidth(84),
                  }}
                >
                  <Text style={globalstyles.buttonText}>Go back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    ...globalstyles.buttonStyle,
                    width: getWidth(84),
                    borderWidth: 1,
                    borderColor: "#1B1561",
                    backgroundColor: "transparent",
                  }}
                >
                  <Text
                    style={{
                      ...globalstyles.buttonText,
                      color: theme.blueColor,
                    }}
                  >
                    Proceed
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalVisible1}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible1(!modalVisible1)}
          >
            <View style={styles.centeredView}>
              <LinearGradient
                style={{
                  borderColor: "grey",
                  borderWidth: 1,
                  borderBottomWidth: 0,
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
                }}
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
                    paddingTop: 10,
                    width: getWidth(70),
                    height: getHeight(8),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "AnekBangla-Medium",
                      color: "black",
                      fontWeight: "400",
                      fontSize: 17,
                      textAlign: "center",
                      letterSpacing: 2,
                    }}
                  >
                    Replace “Pecorino Romano”
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "red",
                    paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(22),
                    justifyContent: "center",
                    // paddingHorizontal: 38,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      //   paddingTop:10,
                      marginTop: 5,
                      height: getHeight(6),
                      width: getWidth(80),
                      borderBottomWidth: 1,
                      borderColor: "grey",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "AnekBangla-Regular",
                        color: "black",
                        fontWeight: "400",
                        fontSize: 16,

                        // paddingTop: 30,
                        // textTransform: 'uppercase',
                      }}
                    >
                      Parmesan Cheese
                    </Text>
                    <TouchableOpacity
                      style={{
                        ...itemStyle.changeButton,
                        backgroundColor: "#1B1561",
                      }}
                    >
                      <Text
                        style={{
                          ...itemStyle.changeButonText,
                          color: theme.whiteColor,
                        }}
                      >
                        Chosen
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      //   paddingTop:10,
                      marginTop: 5,
                      height: getHeight(6),
                      width: getWidth(80),
                      borderBottomWidth: 1,
                      borderColor: "grey",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "AnekBangla-Regular",
                        color: "grey",
                        fontWeight: "400",
                        fontSize: 16,
                        // paddingTop: 30,
                        // textTransform: 'uppercase',
                      }}
                    >
                      Mozarella Cheese
                    </Text>
                    <TouchableOpacity style={itemStyle.changeButton}>
                      <Text style={itemStyle.changeButonText}>Chosen</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      //   paddingTop:10,
                      marginTop: 5,
                      height: getHeight(6),
                      width: getWidth(80),
                      borderBottomWidth: 1,
                      borderColor: "grey",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "AnekBangla-Regular",
                        color: "grey",
                        fontWeight: "400",
                        fontSize: 16,
                        // paddingTop: 30,
                        // textTransform: 'uppercase',
                      }}
                    >
                      Grana Padano
                    </Text>
                    <TouchableOpacity style={itemStyle.changeButton}>
                      <Text style={itemStyle.changeButonText}>Chosen</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderColor: "red",
                    // paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(12),
                    justifyContent: "flex-end",
                    // paddingHorizontal: 38,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setModalVisible1(false)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: "#1B1561",
                      width: getWidth(60),
                      height: getHeight(7),
                      backgroundColor: "#1B1561",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: "AnekBangla-Medium",
                        fontWeight: "400",
                        letterSpacing: 2,
                      }}
                    >
                      Proceed
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  paragraphText: {
    fontFamily: "AnekBangla-Regular",
    color: "black",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12 * 1.5,
    textAlign: "center",
    letterSpacing: 1.4,
    paddingHorizontal: moderateScale(20),
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    //   width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  dropdown1BtnStyle: {
    width: getWidth(28),
    height: getHeight(4),
    backgroundColor: "white",
    // borderWidth: 1,
    shadowColor: "rgba(103, 128, 159)",

    elevation: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "400",
    fontSize: 14,
    //   paddingTop: 30,
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  topBar: {
    borderRadius: 35,
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  centeredView: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: "green",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    borderColor: "grey",
    borderWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: "center",
    // shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(50),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,
    // elevation:10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalView1: {
    // margin: 20,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 2,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // justifyContent: 'flex-end',
    height: getHeight(45),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,
    // elevation:10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default ChangeIngredients;
