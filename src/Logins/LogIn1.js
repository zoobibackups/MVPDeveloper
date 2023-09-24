import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { Email, hideEye, lock, preformly } from "../../assets/svg";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../Constants/theme";
import fonts from "../Constants/fonts";

const LogIn1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  return (
    <KeyBoardHandle>
      <LinearGradient
        style={{
          alignItems: "center",
          paddingVertical: 30,
          borderColor: "red",
          height: "100%",
          // backgroundColor: 'white',
          // borderWidth:10
        }}
        colors={["#FDFFF4", "#BBC1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        <View
          style={{
            alignItems: "center",
            //   borderWidth: 1,
            borderColor: "red",
            width: getWidth(90),
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
          <View
            style={globalstyles.inputContainer}
          >
            <SvgXml xml={Email} />
            {/* <Image
              source={require('../../assets/images/mail.png')}
              style={{resizeMode: 'contain'}}
            /> */}
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
          <View
            style={globalstyles.inputContainer}
          >
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
            <TouchableOpacity
              style={globalstyles.buttonStyle}
            >
              <Text
                style={{
                    ...textStyles.lightText,
                    color:theme.whiteColor
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
            style={{...textStyles.lightText, color:theme.blueColor, fontSize:RFValue(12)}}
          >
            TERM AND CONDITIONS
          </Text>
        </View>
      </LinearGradient>
    </KeyBoardHandle>
  );
};
const styles = StyleSheet.create({
 
});

export default LogIn1;
