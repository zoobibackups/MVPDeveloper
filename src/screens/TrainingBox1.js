import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import {
  body,
  boxing,
  calesthenics,
  cardio,
  meditation,
  yoga
} from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import Loading from "../Components/Loading";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useGetCategoriesQuery } from "../store/services/workOutApi";
import Error1 from "./Error1";

const routes = [
  {
    xml: require("../../assets/images/lifting.png"),
    name: "Weight lifting",
    route: "WeightLiftingBox1",
  },
  {
    xml: yoga,
    name: "Yoga",
    route: "CommingSoon",
  },
  {
    xml: cardio,
    name: "Cardio",
    route: "CommingSoon",
  },
  {
    xml: boxing,
    name: "Boxing",
    route: "CommingSoon",
  },
  {
    xml: meditation,
    name: "Meditation",
    route: "CommingSoon",
  },
  {
    xml: calesthenics,
    name: "Calisthenics",
    route: "CommingSoon",
  },
  {
    xml: body,
    name: "Body Control",
    route: "CommingSoon",
  },
];
const TrainingBox1 = () => {
  const { data, isSuccess, isLoading, isError, isFetching } =
    useGetCategoriesQuery();

  if (isError) {
    return <Error1 />;
  }
  if (isSuccess || isFetching) {
    <Loading />;
  }
  if (isSuccess) {
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
          title={"PLANS"}
          subTitle={"Choose Plan"}
        />
        <FlatList
          numColumns={2}
          bounces={false}
          data={data.data}
          style={{ flex: 1, width: getWidth(96) }}
          columnWrapperStyle={{
            margin: moderateScale(5),
            alignItems: "flex-start",
            flexGrow: 1,
            justifyContent: "flex-start",
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (true) {
                    navigation.navigate(routes[index].route ,{item:item})
                  }else{
                    Alert.alert(`${item.categoryName}`, "We are working on it. will be launched soon")
                  }
                }}
              >
                <LinearGradient
                  style={{ ...styles.boxStyle }}
                  colors={
                    index == 0
                      ? [theme.blueColor, theme.blueColor]
                      : ["#FDFFF4", "#BBC1AD"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.8, y: 0 }}
                >
                  {index == 0 ? (
                    <Image
                      style={{
                        resizeMode: "contain",
                        width: getWidth(15),
                        height: getWidth(15),
                      }}
                      source={require("../../assets/images/lifting.png")}
                    />
                  ) : (
                    <Image
                      style={{
                        resizeMode: "contain",
                        width: getWidth(15),
                        height: getWidth(20),
                      }}
                      source={{ uri: item.categoryAvatar }}
                    />
                  )}
                  <Text
                    style={{
                      ...styles.boxStyleText,
                      color: index == 0 ? theme.whiteColor : theme.blackColor,
                    }}
                  >
                    {item.categoryName}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </LinearGradient>
    );
  }
};

export default TrainingBox1;

const styles = StyleSheet.create({
  boxStyle: {
    alignItems: "center",
    borderRadius: 20,
    height: getHeight(16),
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "#1B1561",
    shadowColor: "rgba(103, 128, 159)",
    width: getHeight(17),
    justifyContent: "space-between",
    paddingVertical: 10,
    marginHorizontal: moderateScale(16),
  },
  boxStyleText: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 2,
  },
});
