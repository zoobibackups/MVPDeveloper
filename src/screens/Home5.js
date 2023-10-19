import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
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
import { backwardBlack, forwardBlack, noodles } from "../../assets/svg";
import RowHeader from "../Components/RowHeader";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import Modal from "react-native-modal";
const days = [
  {
    id: 1,
    name: "MON",
    date: 12,
    isSelected: false,
  },
  {
    id: 2,
    name: "TUE",
    date: 13,
    isSelected: false,
  },
  {
    id: 3,
    name: "WEN",
    date: 14,
    isSelected: true,
  },
  {
    id: 4,
    name: "THU",
    date: 15,
    isSelected: false,
  },
  {
    id: 5,
    name: "FRI",
    date: 16,
    isSelected: false,
  },
  {
    id: 6,
    name: "SAT",
    date: 17,
    isSelected: false,
  },
  {
    id: 7,
    name: "SUN",
    date: 18,
    isSelected: false,
  },
];

const snacksData = [
  {
    id: 1,
    name: "Snack 1",
    img: require("../../assets/images/steak1.png"),
    check: false,
    numberOfCal: 10,
  },
  {
    id: 1,
    name: "Snack 2",
    img: require("../../assets/images/steakLight.png"),
    check: true,
    numberOfCal: 20,
  },
  {
    id: 1,
    name: "Snack 3",
    img: require("../../assets/images/steak1.png"),
    check: false,
    numberOfCal: 40,
  },
  {
    id: 1,
    name: "Snack 4",
    img: require("../../assets/images/steak1.png"),
    check: false,
    numberOfCal: 32,
  },
];
const renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        ...ItemStyles.calendarItem,
        backgroundColor: item.isSelected ? theme.blueColor : "#0000",
      }}
    >
      <Text style={ItemStyles.daysTxt}>{item.name}</Text>
      <View style={ItemStyles.circleDate}>
        <Text style={ItemStyles.dateText}>{item.date}</Text>
      </View>
    </View>
  );
};

const renderItemSnacks = ({ item, index }) => (
  <TouchableOpacity style={{ height: getHeight(23) }}>
    <Text style={ItemStyles.SnackText}>{item.name}</Text>
    <View style={ItemStyles.Imgbg}>
      <Image
        source={item.img}
        style={{ resizeMode: "contain", width: getWidth(25) }}
      />
      {item.check && (
        <Image
          source={require("../../assets/images/check1.png")}
          style={{
            resizeMode: "contain",
            position: "absolute",
            alignSelf: "center",
            justifyContent: "center",
            width: getWidth(20),
          }}
        />
      )}
    </View>
    <Text style={ItemStyles.calText}>{item.numberOfCal}</Text>
    <Text style={ItemStyles.calText}>Calories</Text>
  </TouchableOpacity>
);
const Home5 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [intake, setIntake] = useState("");
  const [intake1, setIntake1] = useState("");
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
          contentContainerStyle={{ alignItems: "center" }}
        >
          <RowHeader
            onPress={() => navigation.goBack()}
            title={"PROFILE OVERVIEW"}
          />

          <View style={styles.profileView}>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileSetting6")} >
            <Image
              source={require("../../assets/images/girl.png")}
              style={{
                resizeMode: "contain",
                width: getWidth(25),
                height: getWidth(25),
              }}
            />
            </TouchableOpacity>

            <Text style={styles.nameText}>SVEN-INGVAR</Text>
            <TouchableOpacity
              style={{
                ...globalstyles.buttonStyle,
                height: getHeight(6),
                width: getWidth(30),
              }}
            >
              <Text style={globalstyles.buttonText}>Week 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileView}>
            <Text style={styles.missionText}>MISSION: EAT MORE HEALTHY</Text>

            <View style={styles.calenderOuterView}>
              <LinearGradient
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
                style={styles.calenderGradientView}
              >
                <FlatList
                  data={days}
                  horizontal={true}
                  renderItem={renderItem}
                />
              </LinearGradient>
            </View>
          </View>

          <View style={styles.mealContainer}>
            <TouchableOpacity>
              <SvgXml
                width={getWidth(5)}
                height={getHeight(5)}
                xml={backwardBlack}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.mealContainerImgAndText}>
              <Image
                source={require("../../assets/images/steak1.png")}
                style={{
                  resizeMode: "contain",
                  width: getWidth(20),
                  height: getWidth(20),
                }}
              />
              <Text style={styles.mealText}>Meal 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.mealContainerImgAndText,
                width: getWidth(20) + 4,
                height: getWidth(30) + 4,
              }}
            >
              <View
                style={{
                  width: getWidth(20) + 4,
                  height: getWidth(20) + 4,
                  borderRadius: 16,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: "#1B1561",
                }}
              >
                <SvgXml
                  xml={noodles}
                  width={getWidth(20)}
                  height={getWidth(20)}
                />
              </View>

              <Text style={styles.mealText}>Meal 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mealContainerImgAndText}>
              <Image
                source={require("../../assets/images/meal3.png")}
                style={{
                  resizeMode: "contain",
                  width: getWidth(20),
                  height: getWidth(20),
                }}
              />
              <Text style={styles.mealText}>Meal 3</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <SvgXml
                width={getWidth(5)}
                height={getHeight(5)}
                xml={forwardBlack}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 20,
              width: getWidth(99),
              height: getHeight(15),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible1(true)}
              style={styles.button}
            >
              <Text style={globalstyles.buttonText}>Extra Intake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.button}
            >
              <Text style={globalstyles.buttonText}>Time for a snack</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>

      <Modal
        animationType="slide"
        style={{ margin: 0 }}
        transparent={true}
        isVisible={modalVisible}
      >
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

              <Text style={styles.chooseSnaksText}>Choose Snacks</Text>
              <View
                style={{
                  borderColor: "red",
                  paddingTop: 7,
                  width: getWidth(96),
                  height: getHeight(27),
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FlatList
                  data={snacksData}
                  horizontal={true}
                  keyExtractor={(item, index) => JSON.stringify(item)}
                  renderItem={renderItemSnacks}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Reciepe1");
                }}
                style={styles.button}
              >
                <Text style={globalstyles.buttonText}>Add to menu</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        style={{ margin: 0 }}
        backdropOpacity={0.4}
        transparent={true}
        isVisible={modalVisible1}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible1(!modalVisible1)}
        >
          <View style={styles.centeredView}>
            <LinearGradient
              style={styles.modalView1}
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
            >
              <View style={{ borderColor: "red", paddingTop: 5 }}>
                <View style={styles.topBar} />
              </View>
              <Text style={styles.extraIntake}>Extra Intake</Text>
              <View style={styles.textInputBox}>
                <TextInput
                  style={{
                    ...globalstyles.textInputWithOutIcon,
                    borderColor: theme.blueColor,
                    height: moderateScale(55),
                  }}
                  onChangeText={(text) => setIntake1(text)}
                  placeholderTextColor="grey"
                  value={intake1}
                  placeholder="Cinnamon bun..."
                />

                <TextInput
                  style={{
                    ...globalstyles.textInputWithOutIcon,
                    borderColor: theme.blueColor,
                    height: moderateScale(55),
                  }}
                  onChangeText={(text) => setIntake(text)}
                  placeholderTextColor="grey"
                  value={intake}
                  placeholder="Calories..."
                />
              </View>
              <View style={styles.buttonContianer}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible2(true);
                  }}
                >
                  <Text style={textStyles.mediumText}>Advanced</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible1(false)}
                  style={styles.button}
                >
                  <Text style={globalstyles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
        <Modal
        backdropOpacity={0}
        style={{ margin: 0 }}
        transparent={true}
        isVisible={modalVisible2}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible2(!modalVisible2)}
        >
          <View style={styles.centeredView}>
            <LinearGradient
              style={styles.modalView1}
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
            >
              <View style={{ borderColor: "red", paddingTop: 5 }}>
                <View style={styles.topBar} />
              </View>

              <Text style={styles.extraIntake}>Extra Intake</Text>

              <View style={styles.textInputBox}>
                <TextInput
                  style={{
                    ...globalstyles.textInputWithOutIcon,
                    borderColor: theme.blueColor,
                    height: moderateScale(55),
                  }}
                  onChangeText={(text) => setIntake1(text)}
                  placeholderTextColor="grey"
                  value={intake1}
                  placeholder="Protein...."
                />

                <TextInput
                  style={{
                    ...globalstyles.textInputWithOutIcon,
                    borderColor: theme.blueColor,
                    height: moderateScale(55),
                  }}
                  onChangeText={(text) => setIntake(text)}
                  placeholderTextColor="grey"
                  value={intake}
                  placeholder="Carbohydrates... "
                />
              </View>
              <View style={styles.buttonContianer}>
                <TouchableOpacity
                  onPress={() => setModalVisible2(false)}
                  style={styles.button}
                >
                  <Text style={globalstyles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      </Modal>
    
    </>
  );
};

const styles = StyleSheet.create({
  profileView: {
    borderRadius: 20,
    width: getWidth(95),
    height: getHeight(21),
    borderColor: "red",
    alignItems: "center",
  },
  nameText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 2,
  },
  missionText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    marginVertical: moderateScale(10),
    textAlign: "center",
    letterSpacing: 2,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1B1561",
    width: getWidth(55),
    height: getHeight(6),
    backgroundColor: "#1B1561",
    justifyContent: "center",
    alignItems: "center",
  },
  calenderOuterView: {
    borderRadius: 20,
    width: getWidth(90),
    height: getHeight(12),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 10 : 5,
    flexDirection: "row",
  },
  calenderGradientView: {
    borderRadius: 20,
    width: getWidth(90),
    height: getHeight(12),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 10 : 5,
    flexDirection: "row",
  },
  mealContainer: {
    borderRadius: 20,
    width: getWidth(90),
    height: getHeight(20),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  mealContainerImgAndText: {
    width: getWidth(20),
    height: getWidth(30),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mealText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 15,
    includeFontPadding: false,
    textAlign: "center",
    letterSpacing: 1.2,
  },
  topBar: {
    borderRadius: 35,
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  chooseSnaksText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
    includeFontPadding: false,
    paddingVertical: moderateScale(15),
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    height: getHeight(100),
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    height: getHeight(48),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalView1: {
    borderColor: "grey",
    borderWidth: 1,
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
  extraIntake: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "400",
    fontSize: 17,
    textAlign: "center",
    letterSpacing: 2,
    marginTop: moderateScale(20),
  },
  innerBox: {
    paddingTop: 10,
    width: getWidth(70),
    height: getHeight(8),
    justifyContent: "center",
    alignItems: "center",
  },
  textInputBox: {
    paddingTop: 7,
    width: getWidth(96),
    height: getHeight(20),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContianer: {
    alignItems: "center",
    height: getHeight(10),
    justifyContent: "space-evenly",
    height: getHeight(14),
  },
});

const ItemStyles = StyleSheet.create({
  calendarItem: {
    height: getHeight(9),
    width: getWidth(11),
    borderRadius: moderateScale(7),
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  daysTxt: {
    fontFamily: fonts.AnekBanglaBold,
    color: "#E0E0E0",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 2,
  },
  circleDate: {
    height: getWidth(9),
    width: getWidth(9),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 100,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "AnekBangla-Bold",
    color: "#2C302F",
    fontWeight: "500",
    fontSize: RFValue(11),
    textAlign: "center",
    letterSpacing: 2,
  },
  SnackText: {
    fontFamily: "AnekBangla-Bold",
    color: "black",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 2,
  },
  Imgbg: {
    height: getWidth(25),
    width: getWidth(30),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  calText: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    includeFontPadding: false,
    textAlign: "center",
    marginTop: moderateScale(5),
    letterSpacing: 1.52,
    lineHeight: 16 * 1.3,
  },
});
export default Home5;
