import { useState } from "react";

import { useNavigation } from "@react-navigation/core";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { hideEye, preformly } from "../../assets/svg";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../Constants/fonts";
import theme from "../Constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const SignUp1 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [passowrd, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const navigation = useNavigation();
  return (
    <KeyBoardHandle>
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
        <SvgXml
          width={getWidth(45)}
          height={getHeight(8)}
          xml={preformly}
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
        />

        <Text
          style={{
            fontFamily: fonts.AnekBanglaMedium,
            color: "black",
            fontWeight: "500",
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          CREATE PROFILE
        </Text>
        <View
          style={{
            paddingVertical: 10,
            height: getHeight(10),
            borderColor: "red",
            //   borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.AnekBanglaMedium,
              color: "black",
              fontWeight: "500",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            REGISTER INFORMATION
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 10,
            height: getHeight(65),
            width: getWidth(90),
          
           
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Full name"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email address"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            onChangeText={(num) => setNumber(num)}
            value={number}
            placeholder="Phone number"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
          <View
           style={globalstyles.inputContainer}
          >
            <TextInput
              style={globalstyles.textInputStyle}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="grey"
              value={passowrd}
              placeholder="Password"
              secureTextEntry={show}
              // keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => setShow(!show)}>
              <SvgXml xml={hideEye} />
             
            </TouchableOpacity>
          </View>
          <View
            style={globalstyles.inputContainer}
          >
            <TextInput
              style={globalstyles.textInputStyle}
              onChangeText={(text) => setConfirmPassowrd(text)}
              value={confirmPassword}
              placeholder="Confirm password"
              secureTextEntry={show1}
              // keyboardType="numeric"
              placeholderTextColor="grey"
            />
            <TouchableOpacity onPress={() => setShow1(!show1)}>
              <SvgXml xml={hideEye} />
              
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 50, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp2")}
              style={globalstyles.buttonStyle}
            >
              <Text style={globalstyles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyBoardHandle>
  );
};
const styles = StyleSheet.create({
  input: {
    ...globalstyles.textInputStyle,
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    paddingLeft: RFValue(26),
    width: getWidth(85),
    alignSelf: "center",
    borderRadius: 20,
    borderColor: theme.blueColor,
    color: "grey",
  },
});
export default SignUp1;
