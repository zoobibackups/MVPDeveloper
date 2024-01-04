import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { moderateScale } from "react-native-size-matters";
import fonts from "../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { globalstyles } from "../styles/globalestyles";
import { useGetCustomWorkOutByIdQuery } from "../store/services/workOutApi";
import Loading from "../Components/Loading";
import Error1 from "./Error1";
import moment from "moment";
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "grey",
    width: getWidth(94),
    borderRadius: 20,
    marginTop: 10,
    padding: moderateScale(10),
  },
  headerRow: {
    flexDirection: "row",
    width: getWidth(94) - moderateScale(20),
    height: getHeight(3),
    paddingHorizontal: moderateScale(5),
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftRow: {
    flexDirection: "row",
    borderColor: "green",
    width: getWidth(55),
    height: getHeight(4),
    borderRadius: 20,
    alignItems: "center",
  },
  headerleftText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: RFValue(16),
    lineHeight: RFValue(18) * 1.7,
    letterSpacing: 2,
    includeFontPadding: false,
    marginLeft: moderateScale(10),
  },
  headerRightText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "600",
    fontSize: RFValue(16),
    letterSpacing: 1,
    includeFontPadding: false,
  },
  timeText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1.2,
    includeFontPadding: false,
  },
  boldText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 22,
    letterSpacing: 2,
  },
  normalTxt: {
    fontFamily: "AnekBangla-Medium",
    color: "grey",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 1.2,
    includeFontPadding: false,
  },
});

const StartWorkOut = ({ route }) => {
  const item = route.params.item;

  const navigation = useNavigation();
  const { data, isSuccess, isLoading, isError, isFetching } =
    useGetCustomWorkOutByIdQuery({ id: item.id });
  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <Error1 />;
  }
  if (isSuccess && data.data.length > 0) {
    const exerciseData = data.data[0];
    const duration = moment.duration(exerciseData.time, "minutes");
    const hours = duration.hours();
    const minutes = duration.minutes();
    return (
      <LinearGradient
        style={{
          alignItems: "center",
          paddingVertical: 30,
          height: "100%",
        }}
        colors={["#FDFFF4", "#BBC1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        <HeaderMainScreen
          onPress={() => navigation.goBack()}
          title={"Workouts"}
          subTitle={`Start ${exerciseData.subCategory.categoryName} Workout`}
          subTitleStyle={{
            color: "grey",
          }}
        />

        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontFamily: fonts.AnekBanglaMedium,
              marginTop: moderateScale(20),
              textAlign: "center",
              fontSize: RFValue(20),
            }}
          >
            Exercises
          </Text>
          <View
            style={{
              width: getWidth(95),
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View style={styles.mainContainer}>
              <View style={styles.headerRow}>
                <View style={styles.leftRow}>
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: getHeight(3),
                      height: getHeight(3),
                    }}
                    source={{ uri: exerciseData.subCategory.categoryAvatar }}
                  />

                  <Text style={styles.headerleftText}>
                    {exerciseData.subCategory.categoryName} workout
                  </Text>
                </View>

                <Text style={styles.headerRightText}>
                  {moment().format("DD-MMM-YY")}
                </Text>
              </View>
              <View style={styles.headerRow}>
                <Text style={styles.timeText}>
                  {hours} hr {minutes} min
                </Text>
              </View>
              <View style={{ ...styles.headerRow, height: getHeight(4.2) }}>
                <Text style={styles.boldText}>Exercise</Text>
                <Text style={styles.boldText}>Repetitions</Text>
              </View>
              {exerciseData.exercises.map((item, index) => (
                <View style={styles.headerRow} key={`${index}`}>
                  <Text style={styles.normalTxt}>{item.name}</Text>
                  <Text style={styles.normalTxt}>
                    {item.weight} x {item.sets} x {item.repetitions}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ActiveWorkOut1", { item: exerciseData })
            }
            style={{
              ...globalstyles.buttonStyle,
              marginTop: moderateScale(80),
              width: getWidth(90),
            }}
          >
            <Text style={globalstyles.buttonText}>Start Workout</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }
  return <Error1 />;
};

export default StartWorkOut;
