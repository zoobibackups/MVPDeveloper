import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { backward, preformly } from "../../assets/svg";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
const CustomHeader = ({ onPress, title, subTitle, subTitleStyle ={} }) => {
  return (
    <View>
        <SvgXml
          width={getWidth(45)}
          height={getHeight(8)}
          xml={preformly}
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0, alignSelf:"center" }}
        />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.backButton}
        >
          <SvgXml xml={backward} width={getWidth(5)} height={getWidth(5)} />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={{...styles.subTitle, ...subTitleStyle}}>
            {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: getWidth(90),
    height: getHeight(5),
  },
  backButton:{
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: getWidth(40),
    justifyContent: "center",
    alignItems:"center",
    width: getWidth(10),
    height:getWidth(10)
  },
  textView:{
    width: getWidth(70),
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: "500",
    fontSize: RFValue(16),
    letterSpacing: 2,
  },
  subTitle:{
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    alignSelf: "center",
    fontWeight: "500",
    textAlign:"center",
    fontSize: RFValue(14),
    letterSpacing: 2,
  }
});