import React, { useState } from "react";

import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import {
  appleLogo,
  facebook,
  google,
  hideEye
} from "../../assets/svg";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const SignUp18 = () => {
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
        <CustomHeader
          onPress={() => navigation.goBack()}
          title={"CREATE PROFILE"}
          subTitle={"REGISTER INFORMATION"}
        />

        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email address"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Full name"
            placeholderTextColor="grey"
          />

          <View style={globalstyles.inputContainer}>
            <TextInput
              style={globalstyles.textInputStyle}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="grey"
              value={passowrd}
              placeholder="Password"
              secureTextEntry={show}
            />
            <TouchableOpacity onPress={() => setShow(!show)}>
              <SvgXml xml={hideEye} />
            </TouchableOpacity>
          </View>
          <View style={globalstyles.inputContainer}>
            <TextInput
              style={globalstyles.textInputStyle}
              onChangeText={(text) => setConfirmPassowrd(text)}
              value={confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={show1}
              placeholderTextColor="grey"
            />
            <TouchableOpacity onPress={() => setShow1(!show1)}>
              <SvgXml xml={hideEye} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(num) => setNumber(num)}
            value={number}
            placeholder="User Name"
            placeholderTextColor="grey"
          />
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
          <View style={{ marginTop: getHeight(2), alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Connectwatch")}
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
    height: 55,
    margin: 8,
    borderWidth: 1,
    paddingLeft: 25,
    borderRadius: 20,
    borderColor: "#1B1561",
    color: "grey",
    fontFamily: fonts.AnekBanglaLight,
    fontWeight: "400",
    fontSize: RFValue(14),
  },
  innerContainer: {
    paddingVertical: 10,
    height: getHeight(69),
    width: getWidth(90),
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
export default SignUp18;
