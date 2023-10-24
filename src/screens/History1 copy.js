import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import ExerciseItem from "../Components/ExerciseItem";
import { ScrollView } from "react-native";

const History1 = () => {
  const [selected, setSelected] = useState("");
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
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"Workouts"}
        subTitle={""}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Calendar
          key={`${Math.floor(Math.random() * (100 - 0 + 1)) + 0}`}
          headerStyle={{
            fontFamily: fonts.AnekBanglaMedium,
            color: "#000",
            backgroundColor: "#0000",
          }}
          style={{
            borderWidth: 1,
            marginTop: moderateScale(5),
            borderColor: "#0001",
            borderRadius: moderateScale(20),
            width: getWidth(90),
            backgroundColor: "#0001",
            textDayFontFamily: fonts.AnekBanglaMedium,
            textMonthFontFamily: fonts.AnekBanglaMedium,
            textDayHeaderFontFamily: fonts.AnekBanglaMedium,
            textDayFontWeight: "900",
            textMonthFontWeight: "500",
            textDayHeaderFontWeight: "500",
            textDayFontSize: RFValue(10),
            textMonthFontSize: RFValue(10),
            textDayHeaderFontSize: RFValue(10),
          }}
          contentStyle={{}}
          theme={{
            monthTextColor: "#000",

            "stylesheet.calendar.main": {
              container: {
                paddingHorizontal: 5,
                backgroundColor: "#0000",
              },
              monthView: {
                backgroundColor: "#0000",
              },
              week: {
                marginTop: 2,
                marginBottom: 2,
                flexDirection: "row",
                justifyContent: "space-around",
              },
            },
            "stylesheet.day.basic": {
              fontFamily: fonts.AnekBanglaBold,
            },
            "stylesheet.day.single": {
              today: {
                backgroundColor: "red",
              },
              todayText: {
                color: "white",
                fontWeight: "bold",
                fontSize: 1,
              },
            },
          }}
        />

        <View
          style={{
            borderColor: "grey",
            width: getWidth(90),
            height: getHeight(7),
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.AnekBanglaMedium,
              color: "black",
              fontWeight: "500",
              fontSize: 14,
              letterSpacing: 1.6,
              lineHeight: 14 * 1.5,
            }}
          >
            Comment:
          </Text>
          <Text
            style={{
              fontFamily: fonts.AnekBanglaMedium,
              color: "black",
              fontWeight: "500",
              fontSize: 12,
              textDecorationLine: "underline",
              lineHeight: 12 * 1.5,
              letterSpacing: 1.6,
            }}
          >
            Add a comment
          </Text>
          <Text
            style={{
              fontFamily: fonts.AnekBanglaMedium,
              color: "black",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 14 * 1.5,
              letterSpacing: 1.6,
            }}
          >
            Sessions completed today
          </Text>
        </View>
        <ExerciseItem />
      </ScrollView>
    </LinearGradient>
  );
};

export default History1;
