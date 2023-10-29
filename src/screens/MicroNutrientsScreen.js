import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import Slider from "@react-native-community/slider";
import AntDesign from "react-native-vector-icons/AntDesign";
import theme from "../constants/theme";
import { setMicroNutrients } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const MicroNutrientsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [protine, setProtine] = useState(0);
  const [fats, setFats] = useState(0);
  const validateData = () => {
    dispatch(
      setMicroNutrients({
        carbohydrates: carbohydrates,
        protine: protine,
        fats: fats,
      })
    );
  };
  return (
    <>
      <KeyBoardHandle>
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
          <CustomHeader
            onPress={() => navigation.goBack()}
            title={"CREATE PROFILE"}
            subTitle={
              "Change your macro nutrients. This will affect your diet schedule."
            }
          />
          <Text style={textStyles.mediumText}>Macro nutrients</Text>
          <Image
            source={require("../../assets/images/Chart.png")}
            style={{
              width: widthPercentageToDP(30),
              marginTop: widthPercentageToDP(4),
              height: widthPercentageToDP(30),
            }}
          />
          <View
            style={{
              paddingVertical: 10,
              height: getHeight(65),
              width: getWidth(90),
              borderColor: "red",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: getWidth(5),
                width: getWidth(90),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: getWidth(5),
                  height: getWidth(5),
                  borderRadius: getHeight(5),
                  backgroundColor: "#4FCDC7",
                }}
              />
              <Text style={textStyles.simpleText}>Carbohydrates</Text>
              <Text style={textStyles.simpleText}>329 g</Text>
              <Text style={textStyles.simpleText}>{carbohydrates}%</Text>
              <Text style={textStyles.simpleText}>1316kcal</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: getWidth(90),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (carbohydrates > 2) {
                    setCarbohydrates(
                      (carbohydrates) => parseInt(carbohydrates) - 2
                    );
                  }
                }}
                style={{
                  width: getWidth(4),
                  height: getWidth(4),
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  borderRadius: getWidth(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name={"minus"} color={theme.whiteColor} />
              </TouchableOpacity>
              <Slider
                style={{
                  width: getWidth(80),
                  height: getWidth(1),
                }}
                minimumValue={0}
                value={carbohydrates}
                maximumValue={100}
                onValueChange={(value) => {
                  console.log(value);
                  setCarbohydrates(parseInt(value));
                }}
                thumbTintColor={theme.blueColor}
                minimumTrackTintColor={theme.blueColor}
                maximumTrackTintColor={theme.whiteColor}
              />
              <TouchableOpacity
                onPress={() => {
                  if (carbohydrates < 98) {
                    setCarbohydrates(
                      (carbohydrates) => parseInt(carbohydrates) + 2
                    );
                  }
                }}
                style={{
                  width: getWidth(4),
                  height: getWidth(4),
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  borderRadius: getWidth(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name={"plus"} color={theme.whiteColor} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: getWidth(90),
                marginTop: getHeight(3),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: getWidth(5),
                  height: getWidth(5),
                  borderRadius: getHeight(5),
                  backgroundColor: "#FFA81A",
                }}
              />
              <Text style={textStyles.simpleText}>Protine</Text>
              <Text style={textStyles.simpleText}>132 g</Text>
              <Text style={textStyles.simpleText}>{protine}%</Text>
              <Text style={textStyles.simpleText}>526kcal</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: getWidth(90),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (protine > 2) {
                    setProtine((protine) => parseInt(protine) - 2);
                  }
                }}
                style={{
                  width: getWidth(4),
                  height: getWidth(4),
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  borderRadius: getWidth(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name={"minus"} color={theme.whiteColor} />
              </TouchableOpacity>
              <Slider
                style={{
                  width: getWidth(80),
                  height: getWidth(1),
                }}
                minimumValue={0}
                value={protine}
                onValueChange={(value) => {
                  console.log(value);
                  setProtine(parseInt(value));
                }}
                maximumValue={100}
                thumbTintColor={theme.blueColor}
                minimumTrackTintColor={theme.blueColor}
                maximumTrackTintColor={theme.whiteColor}
              />
              <TouchableOpacity
                onPress={() => {
                  if (protine < 98) {
                    setProtine((protine) => parseInt(protine) + 2);
                  }
                }}
                style={{
                  width: getWidth(4),
                  height: getWidth(4),
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  borderRadius: getWidth(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name={"plus"} color={theme.whiteColor} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: getWidth(90),
                marginTop: getHeight(3),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: getWidth(5),
                  height: getWidth(5),
                  borderRadius: getHeight(5),
                  backgroundColor: "#F464FF",
                }}
              />
              <Text style={textStyles.simpleText}>Fats</Text>
              <Text style={textStyles.simpleText}>68 g</Text>
              <Text style={textStyles.simpleText}>{fats}%</Text>
              <Text style={textStyles.simpleText}>786kcal</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: getWidth(90),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (fats > 2) {
                    setFats((fats) => parseInt(fats) - 2);
                  }
                }}
                style={{
                  width: getWidth(4),
                  height: getWidth(4),
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  borderRadius: getWidth(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name={"minus"} color={theme.whiteColor} />
              </TouchableOpacity>
              <Slider
                style={{
                  width: getWidth(80),
                  height: getWidth(1),
                }}
                minimumValue={0}
                value={fats}
                maximumValue={100}
                onValueChange={(value) => {
                  setFats(parseInt(value));
                }}
                thumbTintColor={theme.blueColor}
                minimumTrackTintColor={theme.blueColor}
                maximumTrackTintColor={theme.whiteColor}
              />
              <TouchableOpacity
                onPress={() => {
                  if (fats < 98) {
                    setFats((fats) => parseInt(fats) + 2);
                  }
                }}
                style={{
                  width: getWidth(4),
                  height: getWidth(4),
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  borderRadius: getWidth(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name={"plus"} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...globalstyles.buttonContianer,
                marginTop: getHeight(10),
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp10")}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};

export default MicroNutrientsScreen;
