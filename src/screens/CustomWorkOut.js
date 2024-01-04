import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { useSelector } from "react-redux";
import { useGetWorkOutByUserIdQuery } from "../store/services/userWorkOut";
import Error1 from "./Error1";
import Loading from "../Components/Loading";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";

const CustomWorkOut = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { data, isSuccess, isLoading, isError, isFetching } =
    useGetWorkOutByUserIdQuery({ id: user.id });
  const navigation = useNavigation();

  if (isError) {
    return <Error1 />;
  }
  if (isSuccess || isFetching) {
    <Loading />;
  }
  if (isSuccess) {
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
          title={"Custom Workouts"}
          subTitle={""}
          subTitleStyle={{
            color: "grey",
          }}
        />

        <Text
          style={{
            fontFamily: fonts.AnekBanglaMedium,
            marginTop: moderateScale(20),
            textAlign: "center",
            fontSize: RFValue(20),
          }}
        >
          All Exercises
        </Text>
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
                onPress={() =>
                  navigation.navigate("ActiveWorkOut3", {
                    item: {
                      exerciseData: item,
                      sets: item.exercises.usersSets,
                    },
                  })
                }
              >
                <LinearGradient
                  style={{ ...styles.boxStyle }}
                  colors={[theme.blueColor, theme.blueColor]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.8, y: 0 }}
                >
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: getWidth(15),
                      height: getWidth(15),
                    }}
                    source={require("../../assets/images/lifting.png")}
                  />

                  <Text
                    style={{
                      ...styles.boxStyleText,
                      color: theme.whiteColor,
                    }}
                  >
                    {item.name.substring(0, 12)}
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

export default CustomWorkOut;

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
