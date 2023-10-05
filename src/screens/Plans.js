import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LinearGradient from "react-native-linear-gradient";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { StyleSheet } from "react-native";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { moderateScale } from "react-native-size-matters";
import { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";

const Plans = () => {
  const navigation = useNavigation();

  const renderSlides = ({ item }) => {
    return (
      <View style={styles.mainView}>
        <View
          style={{
            borderWidth: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderColor: "grey",
            height: getHeight(12),
            width: getWidth(85),
            backgroundColor: theme.blueColor,
            alignItems: "center",
          }}
        >
          <View style={styles.topImgBg}>
            <Image
              source={item.image}
              style={{ width: getWidth(7), height: getWidth(7) }}
            />
          </View>
          <Text
            style={{
              fontFamily: "AnekBangla-Medium",
              color: "white",
              fontWeight: "600",
              fontSize: RFValue(20),
              marginTop: getWidth(8),
              letterSpacing: 2,
              lineHeight: RFValue(20) * 1.4,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: "AnekBangla-Medium",
              color: "white",
              fontWeight: "400",
              fontSize: 13,
              letterSpacing: 2,
              lineHeight: RFValue(13) * 1.4,
            }}
          >
            {item.price}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "AnekBangla-Medium",
            color: "black",
            fontWeight: "400",
            padding: getWidth(7),
            alignSelf: "flex-start",
           
            textAlign: "left",
            letterSpacing: 2,
          }}
        >
          {item.title}
        </Text>
        {item.items.map((text, index) => {
          return (
            <Text
              key={`${index}`}
              style={{
                fontFamily: "AnekBangla-Medium",

                color: "black",
                fontWeight: "400",
                fontSize: 16,
                alignSelf: "flex-start",
                paddingLeft:  getWidth(7),
                letterSpacing: 2,
              }}
            >
              {`\u2022 ${text}`}
            </Text>
          );
        })}

        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileSetting6")}
          style={{ ...globalstyles.buttonStyle, marginVertical: getHeight(5) }}
        >
          <Text style={globalstyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const slides = [
    {
      key: "1",
      name: "Free!",
      price: "free to use",
      title: "You get the following perks when choosing the STANDARD plan:",
      image: require("../../assets/images/Star.png"),
      items: ["10 monthly meal generations", "Recipes by email"],
    },
    {
      key: "2",
      name: "Personal",
      price: "$9.99 monthly",
      title: "You get the following perks when choosing the STANDARD plan:",
      image: require("../../assets/images/Diamond.png"),
      items: [
        "Unlimited monthly meal generations",
        "Auto-generation",
        "Recipes by email",
        "Access to members area",
        "Profile overview",
        "Monthly overview",
        "On-website-recipes",
        "Cooking instructions",
        "Advanced profile",
        "Choose mission/goal",
      ],
    },
    {
      key: "3",
      name: "Business",
      price: "$199 monthly",
      title: "You get the following perks when choosing the STANDARD plan:",
      image: require("../../assets/images/Business.png"),
      items: [
        "Unlimited monthly meal generations",
        "Auto-generation",
        "Unlimited clients",
        "Access to clients area",
        "Client & profile overview",
        "Monthly overview",
        "On-website-recipes",
        "Cooking instructions",
        "Client management",
        "Automation",
      ],
    },
  ];
  const [showSlider, setShowSlider] = useState(true);

  return (
    <LinearGradient
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 30,
        width: getWidth(100),
        height: getHeight(100),
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderMainScreen
          onPress={() => navigation.goBack()}
          title={"PROFILE OVERVIEW"}
          subTitle={"Choose your plan"}
          subTitleStyle={{
            textAlign: "center",
            alignSelf: "center",
          }}
        />
        <Image
          style={{
            resizeMode: "contain",
            width: getWidth(30),
            alignSelf: "center",
            height: getHeight(15),
          }}
          source={require("../../assets/images/man.png")}
        />
        <Text style={styles.nameText}>SVEN-INGVAR</Text>
        <AppIntroSlider
          data={slides}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={{ marginTop:getHeight(4), backgroundColor:"grey"}}
          activeDotStyle={{ marginTop:getHeight(4), width:getWidth(8), backgroundColor: "#1B1561" }}
          renderItem={renderSlides}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default Plans;

const styles = StyleSheet.create({
  nameText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 2,
    textAlign: "center",
  },
  mainView: {
    borderWidth: 0,
    borderColor: "grey",
    width: getWidth(85),
    alignSelf: "center",
    marginTop: moderateScale(30),
    borderRadius: RFValue(20),
    backgroundColor: "rgba(253, 255, 244, 1)",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    margin: moderateScale(2),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom:moderateScale(10)
  },
  topImgBg: {
    zIndex: 100,
    borderColor: "grey",
    borderRadius: 40,
    top: getWidth(-7),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    position: "absolute",
    marginBottom: getHeight(15),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: getWidth(14),
    height: getWidth(14),
  },
});
