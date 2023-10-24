import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import ExerciseItem from "../Components/ExerciseItem";
import { ScrollView } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import Feather from "react-native-vector-icons/Feather";
import theme from "../constants/theme";
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
        <View
          style={{
            borderColor: "grey",
            borderWidth: 1,
            width: getWidth(90),
            marginTop: getHeight(10),
            borderRadius: moderateScale(20),
            height: getHeight(38),
          }}
        >
          <CalendarPicker
            showDayStragglers={true}
            onDateChange={(date) => console.log(date)}
            textStyle={{
              fontFamily: fonts.AnekBanglaMedium,
              color: "#0F2552",
            }}
            previousComponent={
              <TouchableOpacity
                style={{
                  height: getWidth(8),
                  width: getWidth(8),
                  justifyContent: "center",
                  alignItems: "center",
                  left: getWidth(65),
                }}
              >
                <Feather
                  name="chevron-left"
                  color={theme.blueColor}
                  size={RFValue(16)}
                />
              </TouchableOpacity>
            }
            nextComponent={
              <TouchableOpacity
                style={{
                  height: getWidth(8),
                  width: getWidth(8),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather
                  name="chevron-right"
                  color={theme.blueColor}
                  size={RFValue(16)}
                />
              </TouchableOpacity>
            }
            todayBackgroundColor={theme.blueColor}
            todayTextStyle={{
              color: theme.whiteColor,
              backgroundColor: theme.blueColor,
              
            }}
            
           
          
          
            width={getWidth(90)}
            height={getHeight(41)}
            headerWrapperStyle={{
              backgroundColor: "#0000",
              minWidth: getWidth(90),
            }}
            monthTitleStyle={{
              color: theme.blueColor,
              fontFamily: fonts.AnekBanglaSemiBold,
              left: getWidth(-28),
              top: 0,
              backgroundColor: "#0000",
            }}
            yearTitleStyle={{
              color: theme.blueColor,
              fontFamily: fonts.AnekBanglaSemiBold,
              left: getWidth(-26),
              top: 0,
              backgroundColor: "#0000",
            }}
            dayLabelsWrapper={{
              borderTopWidth: 0,
              alignItems: "center",
              width: getWidth(80),
              height: getHeight(4),
              paddingVertical: 0,
              paddingTop: 0,
              paddingBottom: 0,
              borderColor: "#fff4",
              borderBottomWidth: 1,
            }}
          />
        </View>
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
