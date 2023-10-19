import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { noodles, preformly } from "../../assets/svg";
import fonts from "../Constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";

const Instruction = () => {
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
          <TouchableOpacity onPress={() => navigation.navigate("Home5")}>
            <SvgXml
              width={getHeight(30)}
              height={getHeight(20)}
              xml={noodles}
            />
          </TouchableOpacity>

          <Text style={styles.CacioEPepe}>CACIO E PEPE</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.stepOne}>Step One:</Text>
          <Text style={styles.paragraph}>
            Heat 3 tablespoons olive oil and about a teaspoon of black pepper in
            a medium skillet over medium-low heat until ingredients are fragrant
            and pepper is barely starting to sizzle, about 1 minute. Set aside.
          </Text>

          <Text style={styles.stepOne}>Step Two:</Text>
          <Text style={styles.paragraph}>
            Place spaghetti in a large skillet and cover with water. Season with
            a small pinch of salt, then bring to a boil over high heat, prodding
            spaghetti occasionally with a fork or wooden spoon to prevent it
            from clumping. Cook until spaghetti is al dente (typically about 1
            minute less than the package recommends). Transfer 2 to 3
            tablespoons of pasta cooking water to the skillet with the olive
            oil/pepper mixture. Stir in butter. Using tongs, lift spaghetti and
            transfer it to the oil/butter mixture.
          </Text>
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
