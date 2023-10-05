import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { preformly } from "../../assets/svg";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
const MainCustomHeader = ({
  mainViewStyle = {},
  onPress,
  title,
  titleStyle = {},
  subTitle,
  subTitleStyle = {},
}) => {
  return (
    <View style={{ ...styles.mainViewStyle, ...mainViewStyle }}>
      <SvgXml
        xml={preformly}
        width={getWidth(45)}
        height={getHeight(5)}
        style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
      />

      <View style={styles.textView}>
        <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <Text style={{ ...styles.subTitle, ...subTitleStyle }}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default MainCustomHeader;

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: "center",
    width: getWidth(99),
    height: getHeight(37),
    paddingVertical: Platform.OS === "ios" ? 20 : 6,
  },

  textView: {
    width: getWidth(70),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: "500",
    fontSize: RFValue(16),
    letterSpacing: 2,
  },
  subTitle: {
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    alignSelf: "center",
    fontWeight: "500",
    textAlign: "center",
    fontSize: RFValue(14),
    letterSpacing: 2,
  },
});
