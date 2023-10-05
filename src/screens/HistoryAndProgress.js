import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { moderateScale } from "react-native-size-matters";
const data = [
  {
    title: "Core",
    items: [
      {
        name: "Weight",
        route: "DetailedAndProgress",
      },
      {
        name: "Body fats",
        route: "DetailedAndProgress2",
      },
    ],
  },
  {
    title: "Lifts",
    items: [
      {
        name: "Bench press",
        route: "DetailedAndProgress",
      },
      {
        name: "Squat",
        route: "DetailedAndProgress",
      },
      {
        name: "Deadlift",
        route: "DetailedAndProgress",
      },
      {
        name: "Overhead press",
        route: "DetailedAndProgress",
      },
      {
        name: "Add lift/ exercise",
        route: "DetailedAndProgress",
      },
    ],
  },
  {
    title: "Body Parts",
    items: [
      {
        name: "Chest",
        route: "DetailedAndProgress",
      },
      {
        name: "Biceps",
        route: "DetailedAndProgress",
      },
      {
        name: "Forearm",
        route: "DetailedAndProgress",
      },
      {
        name: "Waist",
        route: "DetailedAndProgress",
      },
      {
        name: "Calves",
        route: "DetailedAndProgress",
      },
      {
        name: "Thighs",
        route: "DetailedAndProgress",
      },
      {
        name: "Booty",
        route: "DetailedAndProgress",
      },
    ],
  },
];
const Row = ({ name,route }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderColor: "green",
        width: getWidth(90),
        height: getHeight(4),
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontFamily: "AnekBangla-Medium",
          color: "black",
          fontWeight: "400",
          fontSize: 14,
          letterSpacing: 2,
        }}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={undefined}
        onPress={() => navigation.navigate(route)}
      >
        <Image
          style={{
            resizeMode: "contain",
            borderColor: "red",
          }}
          source={require("../../assets/images/add.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
const Item = ({ item }) => (
  <View style={{borderBottomColor:"#0001", borderBottomWidth:1, marginVertical:getHeight(1.5)}}>
    <Text
      style={{
        fontFamily: "AnekBangla-Bold",
        color: "black",
        fontWeight: "600",
        fontSize: 18,
        letterSpacing: 2,
      }}
    >
      {item.title}
    </Text>
    {item.items.map((item, index) => {
      return <Row name={item.name} key={`${index}`}  route={item.route}/>;
    })}
    <View style={{height:getHeight(1.5)}} />
  </View>
);
const HistoryAndProgress = () => {
  const navigation = useNavigation();
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
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <HeaderMainScreen
          onPress={() => navigation.goBack()}
          title={"WorkOuts"}
          subTitle={"Basis for development of body"}
          subTitleStyle={{
            alignSelf: "center",
          }}
        />
        {data.map((item, index) => {
          return <Item item={item} index={index} key={`${index}`} />;
        })}
      </ScrollView>
    </LinearGradient>
  );
};

export default HistoryAndProgress;
