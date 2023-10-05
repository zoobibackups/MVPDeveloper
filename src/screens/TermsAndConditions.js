import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomHeader from "../Components/CustomHeader";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";

const TermsAndConditions = () => {
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
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"TERMS AND CONDITIONS"}
        subTitle={"TERMS AND CONDITIONS"}
      />

      <View
        style={{
          width: getWidth(90),
          borderColor: "red",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            ...textStyles.simpleText,
            lineHeight: RFValue(13) * 1.3,
            paddingHorizontal: getWidth(3),
            fontSize:RFValue(13),
            textAlign:"justify",
            letterSpacing: 1,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
      <TouchableOpacity style={{...globalstyles.buttonStyle, marginTop:getHeight(30)}} >
        <Text style={globalstyles.buttonText} >Report a problem</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  parapraphRow: {
    flexDirection: "row",
    width: getWidth(90),
    marginTop: RFValue(10),
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
