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
import { useSelector } from "react-redux";

const LogIn1 = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  const [email, setEmail] = useState(__DEV__ ?user.email:"");
  const [password, setPassword] = useState(__DEV__?"Tikt0k@1":"");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
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
            LOG IN AS BUSINESS
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

              // secureTextEntry={show}
              // keyboardType="numeric"
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
              // keyboardType="numeric"
            />
            <TouchableOpacity
              onPress={() => setShow1(!show1)}
              style={{
                borderColor: "red",
                height: getHeight(7),
                justifyContent: "center",
              }}
            >
              <SvgXml xml={hideEye} />
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

export default LogIn1;
