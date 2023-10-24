import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { Email, hideEye, lock, preformly } from "../../assets/svg";
import KeyBoardHandle from "../Components/KeyboardHandle";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { moderateScale } from "react-native-size-matters";
const LogIn2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show1, setShow1] = useState(true);

  const LoginUser = () => {
    
  }
  return (
    <KeyBoardHandle>
      <View>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            width: getWidth(90),
            marginTop: getHeight(4),
            height: getHeight(15),
          }}
        >
          <SvgXml
            width={getWidth(45)}
            height={getHeight(8)}
            xml={preformly}
            style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
          />

          <Text
            style={{
              ...textStyles.lightText,
              fontWeight: "400",
              fontSize: RFValue(12),
            }}
          >
            LOG IN
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 10,
            height: getHeight(70),
            width: getWidth(90),
            borderColor: "red",
            // borderWidth: 1,
            //   justifyContent:'center'
            paddingTop: 90,
          }}
        >
          <View style={globalstyles.inputContainer}>
            <SvgXml xml={Email} />

            <TextInput
              style={globalstyles.textInputStyle}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="grey"
              value={email}
              placeholder="Email  address"
              keyboardType="numeric"
            />
          </View>
          <View style={globalstyles.inputContainer}>
            <SvgXml xml={lock} />
            <TextInput
              style={globalstyles.textInputStyle}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="grey"
              value={password}
              placeholder="Password"
              secureTextEntry={show1}
            />
            <TouchableOpacity
              onPress={() => setShow1(!show1)}
              style={{
                position:"absolute",
                right:moderateScale(15),
                height: getHeight(7),
                justifyContent: "center",
                
              }}
            >
              <Ionicons name={show1 ?"eye-off-outline" :"eye-outline"} size={RFValue(20)} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 10,
            }}
          >
            <Text
              style={{
                ...textStyles.lightText,
                fontSize: RFValue(11),
                color: "#1B1561",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderColor: "red",
              height: getHeight(30),
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={globalstyles.buttonStyle}>
              <Text
                style={{
                  ...textStyles.lightText,
                  color: theme.whiteColor,
                }}
              >
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 2,
            height: getHeight(4),
          }}
        >
          <Text
            style={{
              ...textStyles.lightText,
              color: theme.blueColor,
              fontSize: RFValue(12),
            }}
          >
            TERM AND CONDITIONS
          </Text>
        </View>
      </View>
    </KeyBoardHandle>
  );
};
const styles = StyleSheet.create({});

export default LogIn2;
