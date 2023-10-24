import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
const SCREEN_WIDTH = wp(100);
const SCREEN_HEIGHT = hp(100);
export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  RFValue,
  wp,
  hp,
  scale,
  verticalScale,
  moderateVerticalScale,
  moderateScale,
};
