import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Platform,
  Image,
} from "react-native";
import { Search } from "react-native-feather";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
import { moderateScale } from "react-native-size-matters";
import fonts from "../constants/fonts";
import { delete_svg } from "../../assets/svg";
import { SvgXml } from "react-native-svg";
import { ScrollView } from "react-native";
const itemStyles = StyleSheet.create({
  itemMainView: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(8),
    shadowColor: "rgba(103, 128, 159)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  textContainer: {
    paddingLeft: moderateScale(20),
    justifyContent: "center",
    width: getWidth(70),
  },
  title: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 17 * 1.8,
    includeFontPadding: false,
  },
  subTitle: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "400",
    lineHeight: 15 * 1.4,
    fontSize: 15,
    letterSpacing: 2,
  },
});
const RenderItem = ({ checked, setChecked, title, subtitle }) => {
  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <LinearGradient
        style={itemStyles.itemMainView}
        colors={["#FDFFF4", "#BBC1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        <View style={itemStyles.textContainer}>
          <Text style={itemStyles.title}>{title}</Text>
          <Text style={itemStyles.subTitle}>{subtitle}</Text>
        </View>
        <SvgXml width={getWidth(10)} height={getWidth(5)} xml={delete_svg} />
      </LinearGradient>
    </TouchableOpacity>
  );
};
const CreateWorkOut2 = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
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
        title={"BUILD YOUR OWN SCHEDULE"}
        subTitle={""}
        titleStyle={{
          alignSelf: "center",
          fontSize: RFValue(12),
        }}
      />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View
          style={{
            ...globalstyles.inputVerticalContainer,
            marginTop: getHeight(2),
          }}
        >
          <Text style={globalstyles.inputLabel}>Exercise name:</Text>

          <View style={globalstyles.inputContainer}>
            <TextInput
              placeholder="Bench press"
              placeholderTextColor="#0004"
              style={globalstyles.textInputStyle}
            />
            <Image
              style={{
                resizeMode: "contain",
                borderColor: "red",
                height: getHeight(5),
                width: getHeight(5),
              }}
              source={require("../../assets/images/down.png")}
            />
          </View>
        </View>
        <View
          style={{
            ...globalstyles.inputVerticalContainer,
            marginTop: getHeight(2),
          }}
        >
          <Text style={globalstyles.inputLabel}>Repetitions</Text>
          <TextInput
            style={globalstyles.textInputWithOutIcon}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="grey"
            value={""}
            placeholder="3 x 8 - 12 repetitions"
          />
        </View>

        <View
          style={{
            borderColor: "green",
            width: getWidth(90),

            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileTrainingScreen")}
            style={{ ...globalstyles.buttonStyle, width: getWidth(28) }}
          >
            <Text style={globalstyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerView}>
          <RenderItem
            checked={checked}
            title={"Lose Weight"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked(!checked)}
          />
          <RenderItem
            checked={checked1}
            title={"Inclined dumbbells press"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked1(!checked1)}
          />
          <RenderItem
            checked={checked2}
            title={"Cable flyes"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked2(!checked2)}
          />
          <RenderItem
            checked={checked3}
            title={"Rope pushdowns"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked3(!checked3)}
          />
          <RenderItem
            checked={checked4}
            title={"Dips"}
            subtitle={"3 x 8-12 repetitions"}
            setChecked={() => setChecked4(!checked4)}
          />
        </View>
        <View
          style={{ ...globalstyles.buttonContianer, marginTop: getHeight(3) }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ActiveWorkOut1")}
            style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
          >
            <Text style={globalstyles.buttonText}>Start your workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreateWorkOut2;

const styles = StyleSheet.create({
  innerView: {
    height: getHeight(50),
    width: getWidth(97),
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
});
