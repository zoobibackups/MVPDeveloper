import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { backward, preformly } from "../../assets/svg";
import fonts from "../Constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
const HeaderMainScreen = ({
  onPress,
  title,
  titleStyle = {},
  subTitle,
  subTitleStyle = {},
}) => {
  return (
    <View style={styles.mainContainer}>
      <SvgXml
        width={getWidth(45)}
        height={getHeight(5)}
        xml={preformly}
        style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
      />

      <View style={styles.row}>
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
          <SvgXml width={getWidth(10)} height={getHeight(2)} xml={backward} />
        </TouchableOpacity>
        <View
          style={{
            borderColor: "green",
            width: getWidth(70),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
        </View>
      </View>
      {subTitle != "" && (
        <Text style={{ ...styles.subTitle, ...subTitleStyle }}>{subTitle}</Text>
      )}
    </View>
  );
};

export default HeaderMainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(90),
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    borderColor: "red",
    width: getWidth(90),
    height: getHeight(5),
  },
  backButton: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 40,
    justifyContent: "center",
    width: getWidth(11),
  },
  title: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: 2,
  },
  subTitle: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "500",
    alignSelf: "flex-start",
    fontSize: 18,
    letterSpacing: 2,
    padding: 10,
  },
});
