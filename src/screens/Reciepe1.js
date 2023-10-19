import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import { AirbnbRating } from "react-native-ratings";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { backwardBlack, forwardBlack } from "../../assets/svg";
import RowHeader from "../Components/RowHeader";
import fonts from "../Constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
const Reciepe1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [instruction, setInstruction] = useState(false);
  const [focused, setfocused] = useState(false);
  const [focused1, setfocused1] = useState(false);
  const [focused2, setfocused2] = useState(false);
  const [focused3, setfocused3] = useState(false);
  const [focused4, setfocused4] = useState(false);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "4 tablespoons (60ml) extra-virgin olive oil, divided ",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "1 teaspoon coarsely ground black pepper, to taste ",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Kosher salt, to taste",
    },
    {
      id: "4",
      title: "1/2 pound (225g) spaghetti",
    },
    {
      id: "5",
      title: "2 tablespoons (30g) unsalted butter",
    },
    {
      id: "6",
      title: "2 ounces Pecorino Romano cheese",
    },
  ];
  const DATA2 = [
    {
      id: "31.29 g",
      title: "Kolhydrater",
    },
    {
      id: "19 g",
      title: "Kostfiber ",
    },
    {
      id: "1.14 g",
      title: "Socker",
    },
    {
      id: "6.81 g",
      title: "Fett",
    },
    {
      id: "2.71 g",
      title: "Mättat",
    },
    {
      id: "6.3 g",
      title: "Fleromättat",
    },
    {
      id: "3.01 g",
      title: "Enkelomättat",
    },
    {
      id: "9.47 g",
      title: "Protein",
    },
    {
      id: "326 g",
      title: "Natrium ",
    },
  ];
  const navigation = useNavigation();

  const renderInstruction = () => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={require("../../assets/images/noodles.png")}
          style={{
            width: getWidth(50),
            height: getHeight(24),
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Instruction"), setInstruction(false);
            }}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#1B1561",
              width: getWidth(40),
              height: getHeight(6),
              backgroundColor: "#1B1561",
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: fonts.AnekBanglaMedium,
                letterSpacing:1.5,
                fontWeight: "400",
              }}
            >
              Instruction
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
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
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
          <RowHeader
            onPress={() => navigation.goBack()}
            title={"RECIPE OVERVIEW"}
          />

          <Text
            style={{
              ...textStyles.mediumText,
              fontSize: 18,
              textAlign: "center",
              letterSpacing: 2.0,
            }}
          >
            Tuesday
          </Text>
          <View
            style={{
              borderRadius: 20,
              width: getWidth(95),
              alignSelf: "center",
              height: getHeight(32),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: getWidth(90),
                height: getHeight(22),
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <SvgXml
                  width={getWidth(7)}
                  height={getHeight(5)}
                  xml={backwardBlack}
                />
              </TouchableOpacity>
              {instruction ? (
                renderInstruction()
              ) : (
                <TouchableOpacity onPress={() => setInstruction(true)}>
                  <Image
                    source={require("../../assets/images/noodles.png")}
                    style={{
                      resizeMode: "contain",
                      width: getHeight(20),
                      height: getHeight(20),
                    }}
                  />
                  
                </TouchableOpacity>
              )}

              <TouchableOpacity>
                <SvgXml
                  width={getWidth(7)}
                  height={getHeight(5)}
                  xml={forwardBlack}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.missionText}>CACIO E PEPE</Text>
            <Text
              style={{
                fontFamily: fonts.AnekBanglaRegular,
                color: "black",
                fontWeight: "300",
                fontSize: 15,
                lineHeight: 15 * 1.3,
                includeFontPadding: false,
                textAlign: "center",
              }}
            >
              370 calories
            </Text>
          </View>
          <View
            style={{
              width: getWidth(95),
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("List1")}
              style={styles.button}
            >
              <Text
                style={{ ...globalstyles.buttonText, fontSize: RFValue(13) }}
              >
                Grocery list
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.button}
            >
              <Text
                style={{ ...globalstyles.buttonText, fontSize: RFValue(13) }}
              >
                Give Rating
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                width: getWidth(95),
                // borderWidth: 1,
                borderColor: "red",
                height: getHeight(8),
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingTop: 12,
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "AnekBangla-Medium",
                  color: "black",
                  fontWeight: "500",
                  fontSize: 30,
                  textAlign: "center",
                  // paddingVertical: 5,
                }}
              >
                Recipe:
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("ChangeIngredients")}
                style={{
                  ...styles.button,
                  width: getWidth(50),
                  marginTop: verticalScale(5),
                  marginLeft: getWidth(5),
                }}
              >
                <Text
                  style={{
                    ...globalstyles.buttonText,
                    fontSize: RFValue(11),
                  }}
                >
                  Change ingredients
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={DATA}
              style={{
                width: getWidth(80),
                marginTop: 10,
              }}
              renderItem={({ item }) => (
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontFamily: fonts.AnekBanglaMedium,
                    paddingLeft: 12,
                    fontWeight: "400",
                    letterSpacing: 1.4,
                  }}
                >
                  {`\u2022  ${item.title}`}
                </Text>
              )}
            />

            <Text
              style={{
                fontFamily: "AnekBangla-Medium",
                color: "black",
                fontWeight: "500",
                fontSize: 30,
                marginLeft: moderateScale(10),
                textAlign: "left",
              }}
            >
              Nutrition:
            </Text>

            <FlatList
              data={DATA2}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontFamily: "AnekBangla-Light",
                      fontWeight: "400",
                      paddingLeft: 12,
                      letterSpacing: 2,
                    }}
                  >
                    {`\u2022 ${item.title}`}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontFamily: "AnekBangla-Light",
                      fontWeight: "700",
                      paddingLeft: 12,
                      letterSpacing: 2,
                    }}
                  >
                    {`${item.id}`}
                  </Text>
                </View>
              )}
            />
          </ScrollView>
        </ScrollView>
      </LinearGradient>

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

              <Text style={styles.rateThisRecipe}>Rate this Recipe</Text>

              <AirbnbRating
                reviews={false}
                reviewColor="black"
                selectedColor="#FF8A00"
                unSelectedColor="#D3D3D3"
                ratingContainerStyle={{ height: 10, marginTop: 10 }}
                defaultRating={0}
                starContainerStyle={{
                  justifyContent: "space-between",
                  width: getWidth(65),
                  backgroundColor: "transparent",
                }}
                size={RFValue(30)}
              />

              <Text
                style={{
                  fontFamily: fonts.AnekBanglaMedium,
                  color: "rgba(0,0,0,.8)",
                  fontWeight: "400",
                  fontSize: 17,
                  lineHeight: 17 * 1.3,
                  textAlign: "center",
                  paddingTop: moderateScale(40),
                  paddingHorizontal: moderateScale(30),
                }}
              >
                HOW OFTEN WOULD YOU LIKE TO HAVE THIS MEAL?
              </Text>

              <View
                style={{
                  marginTop: 10,
                  width: getWidth(86),
                  height: getHeight(6),
                  flexDirection: "row",
                }}
              >
                <View style={focused ? styles.bgColor : styles.bgTransparent}>
                  <TouchableOpacity
                    onPress={() => {
                      setfocused(!focused),
                        setfocused1(false),
                        setfocused2(false),
                        setfocused3(false),
                        setfocused4(false);
                    }}
                  >
                    <Text
                      style={focused ? styles.whiteText : styles.coloredText}
                    >
                      Daily
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <View
                    style={focused1 ? styles.bgColor : styles.bgTransparent}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setfocused1(!focused1),
                          setfocused2(false),
                          setfocused3(false),
                          setfocused4(false),
                          setfocused(false);
                      }}
                    >
                      <Text
                        style={focused1 ? styles.whiteText : styles.coloredText}
                      >
                        Weekly
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <View
                    style={focused2 ? styles.bgColor : styles.bgTransparent}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setfocused1(false),
                          setfocused2(!focused2),
                          setfocused3(false),
                          setfocused4(false),
                          setfocused(false);
                      }}
                    >
                      <Text
                        style={focused2 ? styles.whiteText : styles.coloredText}
                      >
                        Monthly
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: getWidth(86),
                  height: getHeight(6),
                  flexDirection: "row",
                }}
              >
                <View style={focused3 ? styles.bgColor : styles.bgTransparent}>
                  <TouchableOpacity
                    onPress={() => {
                      setfocused1(false),
                        setfocused2(false),
                        setfocused3(!focused3),
                        setfocused4(false),
                        setfocused(false);
                    }}
                  >
                    <Text
                      style={focused3 ? styles.whiteText : styles.coloredText}
                    >
                      Quaterly
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingLeft: 12 }}>
                  <View
                    style={focused4 ? styles.bgColor : styles.bgTransparent}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setfocused1(false),
                          setfocused2(false),
                          setfocused3(false),
                          setfocused4(!focused),
                          setfocused(false);
                      }}
                    >
                      <Text
                        style={focused4 ? styles.whiteText : styles.coloredText}
                      >
                        Never
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  ...globalstyles.buttonStyle,
                  marginTop: getHeight(3),
                  width: getWidth(40),
                }}
              >
                <Text style={globalstyles.buttonText}>Ok</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    marginTop: 0,
    height: getHeight(100),
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1B1561",
    width: getWidth(40),
    height: getHeight(5),
    backgroundColor: "#1B1561",
    justifyContent: "center",
    alignItems: "center",
  },
  missionText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    marginTop: moderateScale(10),
    textAlign: "center",
    letterSpacing: 2,
  },
  topBar: {
    borderRadius: 20,
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "rgba(0,0,0,.2)",
  },
  rateThisRecipe: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "#000",
    fontWeight: "400",
    fontSize: 17,
    textAlign: "center",
    includeFontPadding: false,
    paddingVertical: 5,
  },
  centeredView: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 110,
    // borderWidth: 3,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderColor: "green",
    height: "100%",
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    borderColor: "grey",
    borderWidth: 1,
    borderBottomWidth: 0,

    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // justifyContent: 'flex-end',
    height: getHeight(47),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  bgColor: {
    borderColor: "#1B1561",
    backgroundColor: "#1B1561",
    borderWidth: 1,
    width: getWidth(22),
    height: getHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  coloredText: {
    fontFamily: "AnekBangla-Medium",
    color: "#1B1561",
    fontWeight: "400",
    fontSize: 16,

    // textAlign: 'left',
    // paddingVertical: 6,
  },
  whiteText: {
    fontFamily: "AnekBangla-Medium",
    color: "white",
    fontWeight: "400",
    fontSize: 16,

    // textAlign: 'left',
    // paddingVertical: 6,
  },
  bgTransparent: {
    borderColor: "#1B1561",
    borderWidth: 1,
    width: getWidth(22),
    height: getHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Reciepe1;
