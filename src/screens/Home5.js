import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
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
import Modal from "react-native-modal";
import Carousel from "react-native-reanimated-carousel";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { backwardBlack, forwardBlack } from "../../assets/svg";
import RowHeader from "../Components/RowHeader";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { getWeekData } from "../logic";
import textStyles, { globalstyles } from "../styles/globalestyles";
const days = getWeekData();
const currentDate = moment();

const RenderItem = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...ItemStyles.calendarItem,
        backgroundColor: item.isSelected ? theme.blueColor : "#0000",
      }}
    >
      <Text style={ItemStyles.daysTxt}>{item.name}</Text>
      <View style={ItemStyles.circleDate}>
        <Text style={ItemStyles.dateText}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};


const Home5 = ({ route }) => {
  const snapRef = useRef(null);
  const { user, foodMetaData } = useSelector((state) => state.userReducer);
  const weeklySchedule = route.params.item;
  const customRecipie = route.params.recipies.data;
  const [selectedRecipieIndex , setSelectedRecipieIndex] = useState(null)
  const navigation = useNavigation();
  const [week_days, setWeekDays] = useState(days);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cinnamonBun, setCinnamonBun] = useState("")
  const [calories, setCalories] = useState("")
  const [protein, setProtien] = useState("")
  const [carbohydrates, setCarbohydrates] = useState("")
  const [seletedDay, setSelectedDay] = useState(
    week_days.find((item) => item.isSelected)
  );
 
  const [dailySchedule, setDailySchedule] = useState(null);
  useEffect(() => {
    setDailySchedule(weeklySchedule.data[seletedDay.fullName]);
  }, [seletedDay]);

  const renderItemSnacks = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedRecipieIndex(index)} style={{ height: getHeight(25), margin: 2 }}>
        <Text numberOfLines={1} style={ItemStyles.SnackText}>
          {item?.name}
        </Text>
        <View style={ItemStyles.Imgbg}>
          <Image
            source={{ uri: item?.photo }}
            style={{
              resizeMode: "cover",
              height: getWidth(25),
              width: getWidth(25),
              borderRadius: 12,
            }}
          />
          {selectedRecipieIndex == index && (
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
        <Text style={ItemStyles.calText}>{item?.calories}</Text>
        <Text style={ItemStyles.calText}>Calories</Text>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <RowHeader
            onPress={() => navigation.goBack()}
            title={"PROFILE OVERVIEW"}
          />

          <View style={styles.profileView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileSetting6")}
            >
              <Image
                source={{ uri: user.profilePhoto }}
                style={{
                  resizeMode: "cover",
                  width: getWidth(25),
                  height: getWidth(25),
                  borderRadius: getWidth(25),
                }}
              />
            </TouchableOpacity>

            <Text style={styles.nameText}>{user.name}</Text>
            <TouchableOpacity
              style={{
                ...globalstyles.buttonStyle,
                height: getHeight(6),
                width: getWidth(30),
              }}
            >
              <Text style={globalstyles.buttonText}>
                Week{" "}
                {Math.ceil(
                  currentDate.diff(
                    moment(currentDate).startOf("month"),
                    "days"
                  ) / 7
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileView}>
            <Text style={styles.missionText}>
              MISSION: {foodMetaData.finalGoal}
            </Text>

            <View style={styles.calenderOuterView}>
              <LinearGradient
                colors={["#FDFFF4", "#BBC1AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.8, y: 0 }}
                style={styles.calenderGradientView}
              >
                <FlatList
                  data={week_days}
                  horizontal={true}
                  renderItem={({ item, index }) => {
                    return (
                      <RenderItem
                        item={item}
                        index={index}
                        onPress={() => setSelectedDay(item)}
                      />
                    );
                  }}
                />
              </LinearGradient>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: getWidth(5),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                snapRef.current.prev();
              }}
            >
              <SvgXml
                width={getWidth(5)}
                height={getHeight(5)}
                xml={backwardBlack}
              />
            </TouchableOpacity>
            {dailySchedule != null && (
              <Carousel
                pagingEnabled={true}
                snapEnabled={true}
                mode="parallax"
                ref={snapRef}
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                }}
                loop
                style={{
                  width: getWidth(80),
                  paddingHorizontal: getWidth(15),
                }}
                width={getWidth(40)}
                height={getWidth(40)}
                autoPlay={false}
                data={dailySchedule}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={`${index}`}
                    style={{
                      ...styles.mealContainerImgAndText,
                    }}
                  >
                    <Image
                      source={{ uri: item.recipe.photo }}
                      style={{
                        resizeMode: "cover",
                        width:
                          index == currentIndex + 1
                            ? getWidth(26)
                            : getWidth(20),
                        height:
                          index == currentIndex + 1
                            ? getWidth(26)
                            : getWidth(20),

                        borderRadius: 12,
                      }}
                    />
                    <Text style={styles.mealText}>{item.mealName}</Text>
                  </TouchableOpacity>
                )}
              />
            )}

            <TouchableOpacity
              onPress={() => {
                snapRef.current.next();
              }}
            >
              <SvgXml
                width={getWidth(5)}
                height={getHeight(5)}
                xml={forwardBlack}
              />
            </TouchableOpacity>
          </ScrollView>
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
                  data={customRecipie}
                  horizontal={true}
                  keyExtractor={(item, index) => JSON.stringify(item)}
                  renderItem={renderItemSnacks}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.button}
              >
                <Text style={globalstyles.buttonText}>Add to menu</Text>
              </TouchableOpacity>
              <View style={{height:10}} />
              <TouchableOpacity
              onPress={() => setModalVisible1(true)}
              style={styles.button}
            >
              <Text style={globalstyles.buttonText}>Extra Intake</Text>
            </TouchableOpacity>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
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
                  onChangeText={(text) => setCinnamonBun(text)}
                  placeholderTextColor="grey"
                  value={cinnamonBun}
                  placeholder="Cinnamon bun..."
                />

                <TextInput
                  style={{
                    ...globalstyles.textInputWithOutIcon,
                    borderColor: theme.blueColor,
                    height: moderateScale(55),
                  }}
                  onChangeText={(text) => setCalories(text)}
                  placeholderTextColor="grey"
                  value={calories}
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
                    onChangeText={(text) => setProtien(text)}
                    placeholderTextColor="grey"
                    value={protein}
                    placeholder="Protein...."
                  />

                  <TextInput
                    style={{
                      ...globalstyles.textInputWithOutIcon,
                      borderColor: theme.blueColor,
                      height: moderateScale(55),
                    }}
                    onChangeText={(text) => setCarbohydrates(text)}
                    placeholderTextColor="grey"
                    value={carbohydrates}
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
    width: getWidth(30),
    height: getWidth(40),
    // marginHorizontal: getWidth(5),
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
    height: getHeight(55),
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
    fontSize: 11,
    textAlign: "center",
    letterSpacing: 2,
    width: getWidth(25),
  },
  Imgbg: {
    height: getWidth(25),
    width: getWidth(30),
    borderRadius: 20,
    marginTop:moderateScale(5),
    overflow: "hidden",
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
