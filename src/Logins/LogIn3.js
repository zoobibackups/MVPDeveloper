import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import {
  Email,
  appleLogo,
  facebook,
  google,
  hideEye,
  lock,
  preformly,
} from "../../assets/svg";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../constants/theme";
const LogIn3 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  return (
    <KeyBoardHandle>
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: getWidth(90),
            height: getHeight(15),
            marginTop: getHeight(3),
          }}
        >
          <SvgXml
            width={getWidth(45)}
            height={getHeight(5)}
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
            height: getHeight(50),
            width: getWidth(90),

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
              placeholder="Email address"
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
                position: "absolute",
                height: getHeight(7),
                right: getWidth(5),

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

        <View style={styles.SocilLoginContainer}>
          <View style={styles.orLoginWithLine}>
            <Image
              source={require("../../assets/images/line.png")}
              style={{ resizeMode: "contain" }}
            />
            <Text
              style={{
                ...textStyles.lightText,
                color: "rgba(0,0,0,.5)",
                fontWeight: "500",
                fontSize: RFValue(12),
              }}
            >
              {" "}
              or log in with{" "}
            </Text>
            <Image
              source={require("../../assets/images/line.png")}
              style={{ resizeMode: "contain" }}
            />
          </View>
          <View style={styles.LoginButton}>
            <TouchableOpacity style={styles.buttonBox}>
              <SvgXml xml={facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBox}>
              <SvgXml xml={google} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBox}>
              <SvgXml xml={appleLogo} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...textStyles.lightText,
              fontSize: RFValue(10),
              color: theme.blueColor,
            }}
          >
            TERMS AND CONDITIONS
          </Text>
        </View>
      </View>
    </KeyBoardHandle>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: "#1B1561",
  },
  SocilLoginContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: getHeight(24),
    width: getWidth(90),
    //   position:'absolute'
  },
  orLoginWithLine: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
    //   borderWidth: 1,
    borderColor: "green",
    height: getHeight(5),
    width: getWidth(90),
    //   position:'absolute'
    flexDirection: "row",
  },
  LoginButton: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: getHeight(12),
    width: getWidth(90),
    flexDirection: "row",
  },
  buttonBox: {
    width: getWidth(15),
    height: getWidth(15),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogIn3;
