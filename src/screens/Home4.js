import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { noodles } from "../../assets/svg";
import MainCustomHeader from "../Components/MainCustomHeader";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const Home4 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.mainInput}>
        <Image
          source={require("../../assets/images/fruitBG2.png")}
          style={styles.backgroundImage}
        />
        <MainCustomHeader
          title={"Home"}
          titleStyle={styles.headerTitle}
          subTitle={`Great job, you just earned your first customized meal based on your unique profile. We hope this meal suits your needs.`}
          subTitleStyle={styles.headerSubTitle}
        />

        <View style={styles.innerView}>
          <View>
            <Text style={styles.generationXText}>Generation X</Text>
          </View>
          <View style={styles.recipeiImg}>
            <SvgXml width={getWidth(25)} height={getHeight(12)} xml={noodles} />
          </View>

          <Text
            style={{
              ...styles.generationXText,
              fontFamily: fonts.AnekBanglaBold,
              fontSize: 13,
              textAlign: "center",
              width: getWidth(60),
              height: getHeight(6),
              paddingLeft: 10,

              paddingTop: 25,
              letterSpacing: 2,
            }}
          >
            CACIO E PEPE
          </Text>
          <Text
            style={{
              fontFamily: fonts.AnekBanglaRegular,
              color: "black",
              fontWeight: "300",
              fontSize: 13,
              textAlign: "center",
              marginBottom: moderateScale(10),
            }}
          >
            370 calories
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Reciepe1")}
            style={styles.button}
          >
            <Text style={{ ...globalstyles.buttonText, fontWeight: "400" }}>
              View Recipe
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.termAndCOnditionText}>TERMS AND CONDITIONS</Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainInput: {
    alignItems: "center",
    borderColor: "green",
    height: getHeight(85),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "170%",
    marginTop: 0,
    height: getHeight(110),
  },
  headerTitle: {
    fontFamily: fonts.AnekBanglaSemiBold,
    color: "black",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 2,
    includeFontPadding: false,
    textAlign: "center",
  },
  headerSubTitle: {
    fontFamily: fonts.AnekBanglaRegular,
    color: "black",
    fontWeight: "300",
    fontSize: 14,
    paddingHorizontal: getWidth(8),
    textAlign: "center",
    paddingVertical: 10,
    letterSpacing: 1,
    includeFontPadding: false,
  },
  innerView: {
    width: getWidth(90),
    alignItems: "center",
    paddingTop: 10,
    height: getHeight(40),
  },
  generationXText: {
    fontFamily: fonts.AnekBanglaBold,
    color: "black",
    fontWeight: "500",
    fontSize: RFValue(16),
    textAlign: "center",
    width: getWidth(79),
    paddingTop: 15,
    paddingLeft: 10,
    letterSpacing: 1.5,
  },
  recipeiImg: {
    borderRadius: 20,
    width: getWidth(60),
    height: getHeight(11),
    paddingTop: 10,
    paddingLeft: 10,
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1B1561",
    width: getWidth(45),
    height: getHeight(6),
    backgroundColor: "#1B1561",
    justifyContent: "center",
    alignItems: "center",
  },

  termAndCOnditionText: {
    color: theme.blueColor,
    fontSize: 14,
    fontFamily: fonts.AnekBanglaRegular,
    fontWeight: "400",
    letterSpacing: 2,
    textAlign: "center",
    includeFontPadding: false,
    height: getHeight(7),
  },
});

export default Home4;
