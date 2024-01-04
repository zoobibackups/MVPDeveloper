import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { noodles, preformly } from "../../assets/svg";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import numberToWord from "../logic/numberToString";

const Instruction = ({ navigation, route }) => {
  const { customRecipie, instruction } = route.params;
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <SvgXml
          width={getWidth(45)}
          height={getHeight(5)}
          xml={preformly}
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
        />

        <View
          style={{
            flexDirection: "row",
            // borderWidth: 1,
            borderColor: "red",
            width: getWidth(90),
            height: getHeight(5),
            // justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderWidth: 0.5,
              borderColor: "grey",
              borderRadius: 45,
              justifyContent: "center",
              width: getWidth(11),
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                width: getWidth(10),

                height: getHeight(2),
              }}
              source={require("../../assets/images/back.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              width: getWidth(70),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.CacioEPepe}>DIRECTIONS</Text>
          </View>
        </View>

        <Text style={styles.CacioEPepe}>Instructions</Text>

        <View
          style={{
            borderRadius: 20,
            width: getWidth(95),
            height: getHeight(28),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity >
            <Image
              source={{ uri: customRecipie.photo }}
              style={{
                borderRadius: 12,
                width: getHeight(20),
                height: getHeight(20),
              }}
            />
          </TouchableOpacity>

          <Text style={styles.CacioEPepe}>{customRecipie.name}</Text>
        </View>

        <View style={styles.textBox}>
          {instruction.map((item, index) => {
            return (
              <View>
                <Text style={styles.stepOne}>Step {numberToWord(index+1)}:</Text>
                <Text style={styles.paragraph}>{item.title.replaceAll("\"","")}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Instruction;

const styles = StyleSheet.create({
  CacioEPepe: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 2,
    paddingTop: 8,
  },
  textBox: {
    width: getWidth(95),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 12,
    paddingLeft: 10,
  },
  stepOne: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "500",
    fontSize: 25,
  },
  paragraph: {
    color: "black",
    fontSize: 15,
    fontFamily: "AnekBangla-Medium",
    fontWeight: "400",
    letterSpacing: 2,
  },
});
