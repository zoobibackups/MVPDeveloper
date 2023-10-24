import fonts from "../constants/fonts";
import { StyleSheet } from "react-native";
import theme from "../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getHeight, getWidth } from "../functions/CommonFunctions";
const textStyles = StyleSheet.create({
  simpleText: {
    fontFamily: fonts.AnekBanglaLight,
    includeFontPadding: false,
    color: theme.blackColor,
    fontSize: RFValue(10),
    letterSpacing: RFValue(2),
    lineHeight:RFValue(10)*1.4,
    fontWeight: "300",
  },
  lightText: {
    fontFamily: fonts.AnekBanglaLight,
    includeFontPadding: false,
    color: theme.blackColor,
    fontSize: RFValue(14),
    letterSpacing: RFValue(2),
    fontWeight: "500",
  },
  mediumText: {
    fontFamily: fonts.AnekBanglaLight,
    includeFontPadding: false,
    color: theme.blackColor,
    fontSize: RFValue(14),
    letterSpacing: RFValue(2),
    fontWeight: "500",
  },
  boldText: {
    fontFamily: fonts.AnekBanglaLight,
    includeFontPadding: false,
    color: theme.blackColor,
    fontSize: RFValue(14),
    letterSpacing: RFValue(2),
    fontWeight: "600",
  },
});

export default textStyles;

const globalstyles = {
  innerContainer:{
    paddingVertical: 15,
    height: getHeight(55),
    width: getWidth(90),
    borderColor: "red",
  },
  inputVerticalContainer: {
    paddingVertical: 0,
    height: getHeight(12),
    width: getWidth(90),
    marginBottom: 2,
  },
  inputLabel: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: "500",
    marginBottom: RFValue(2),
    letterSpacing: 2,
    includeFontPadding: false,
  },
  inputContainer: {
    height: RFValue(45),
    margin: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.blueColor,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
  },
  textInputStyle: {
    height: RFValue(53),
    borderRadius: RFValue(18),
    width: getWidth(70),
    borderColor: theme.blueColor,
    color: theme.blueColor,
    paddingLeft: RFValue(10),
    letterSpacing: RFValue(1.5),
    fontFamily: fonts.AnekBanglaMedium,
  },
  textInputWithOutIcon: {
    height: RFValue(45),
    borderRadius: RFValue(18),
    width: getWidth(70),
    color: theme.blueColor,
    paddingLeft: RFValue(10),
    letterSpacing: RFValue(1.5),
    fontFamily: fonts.AnekBanglaMedium,
    borderWidth: 1,
    padding: RFValue(14),
    paddingLeft: RFValue(26),
    width: getWidth(85),
    alignSelf: "center",
    borderRadius: 20,
    color: "grey",
  },
  buttonContianer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0000",
    width: getWidth(90),
  },
  buttonStyle: {
    height: RFValue(45),
    borderWidth: 1,
    width: getWidth(65),
    borderRadius: RFValue(18),
    borderColor: theme.blueColor,
    backgroundColor: theme.blueColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: fonts.AnekBanglaLight,
    includeFontPadding: false,
    color: theme.blackColor,
    fontSize: RFValue(14),
    letterSpacing: RFValue(2),
    fontWeight: "600",
    fontFamily: fonts.AnekBanglaMedium,
    color: "white",
    fontWeight: "500",
    letterSpacing: 2,
    fontSize: RFValue(16),
  },
  optionsContainer: {
    paddingVertical: 10,
    height: getHeight(45),
    width: getWidth(97),
    borderColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
  selectItem: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(7),
    borderColor: "#F5F5F5",
    shadowColor: "rgba(103, 128, 159)",
    elevation: 32,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  selectItemText: {
    ...textStyles.lightText,
    fontWeight: "400",
    fontSize: RFValue(12),
    paddingLeft: RFValue(10),
  },
};

export { globalstyles };
