import React, { useState } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const ChangePreference2 = ({navigation, route}) => {
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
        title={"CHANGE  PROFILE"}
        subTitle={"What would you like to change?"}
        subTitleStyle={{
          textAlign: "center",
          alignSelf: "center",
        }}
      />

      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() =>  navigation.navigate("SignUp3",{isUpdate:true}) }>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              How Often You Workout
            </Text>
            <AntDesign
              color={theme.blueColor}
              size={moderateScale(22)}
              style={{marginRight:moderateScale(20)}}
              name="rightcircleo"
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() =>  navigation.navigate("SignUp6",{isUpdate:true}) }>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>Dietary preferences</Text>
            <AntDesign
              color={theme.blueColor}
              size={moderateScale(22)}
              style={{marginRight:moderateScale(20)}}
              name="rightcircleo"
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>  navigation.navigate("SignUp7",{isUpdate:true}) }
        >
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>Cuisines</Text>
            <AntDesign
              color={theme.blueColor}
              size={moderateScale(22)}
              style={{marginRight:moderateScale(20)}}
              name="rightcircleo"
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={() =>  navigation.navigate("SignUp8",{isUpdate:true}) }>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              Ingredients to avoid
            </Text>
            <AntDesign
              color={theme.blueColor}
              size={moderateScale(22)}
              style={{marginRight:moderateScale(20)}}
              name="rightcircleo"
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() =>  navigation.navigate("SignUp9",{isUpdate:true}) }>
          <LinearGradient
            style={globalstyles.selectItem}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            <Text style={globalstyles.selectItemText}>
              Ingredients you prefer
            </Text>
            <AntDesign
              color={theme.blueColor}
              size={moderateScale(22)}
              style={{marginRight:moderateScale(20)}}
              name="rightcircleo"
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
         
          style={globalstyles.buttonStyle}
        >
          <Text
            style={{
              fontFamily: "AnekBangla-Medium",
              color: "white",
              fontWeight: "500",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    height: getHeight(70),
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
export default ChangePreference2;
