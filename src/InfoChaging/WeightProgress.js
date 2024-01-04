import React from "react";

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getHeight, getWidth } from "../functions/CommonFunctions";
const WeightProgress = ({navigation,route}) => {
  const {userWeight} = useSelector(state => state.userWeightReducer)
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
        title={"PROGRESS"}
        subTitle={"Your progress pictures"}
        subTitleStyle={{
          textAlign: "center",
          alignSelf: "center",
        }}
      />
      <FlatList
        data={userWeight}
        numColumns={2}
        ListEmptyComponent={<View><Text>No Data Found</Text></View>}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item.weight} Kg</Text>
              <Image
                style={{
                  width: getWidth(25),
                  height: getHeight(15),
                }}
                source={{uri:item.image}}
              />
            </View>
          );
        }}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: getWidth(35),
    height: getHeight(20),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 2,
  },
});
export default WeightProgress;
