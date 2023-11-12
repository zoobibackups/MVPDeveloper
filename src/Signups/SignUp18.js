import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { appleLogo, facebook, google } from "../../assets/svg";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { setTrainUserSignUp } from "../store/actions/userActions";
import BASE_URL from "../store/services/baseUrl";
import { globalstyles } from "../styles/globalestyles";
import {
  isValidEmail,
  isValidName,
  isValidPassword
} from "../validation/commonValidation";
const SignUp18 = () => {
  const dispatch  = useDispatch()
  const [email, setEmail] = useState(__DEV__ ? "engr2.aftabufaq@gmail.com" : "");
  const [name, setName] = useState(__DEV__ ? "Aftab Ufaq" : "");
  const [passowrd, setPassword] = useState(__DEV__ ? "Tikt0k@1" : "");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [confirmPassword, setConfirmPassowrd] = useState(
    __DEV__ ? "Tikt0k@1" : ""
  );
  const [username, setUserName] = useState(__DEV__ ? "draftabameen" : "");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const validateData = () => {
    if (!isValidName(name)) {
      Alert.alert("INVALID NAME", "Please enter a valid name");
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert("INVALID EMAIL", "Please enter a valid name");
      return;
    }

    if (!isValidPassword(passowrd)) {
      Alert.alert(
        "INVALID PASSWORD",
        "Password must have lower, upper , number and a special character"
      );
      return;
    }
    if (passowrd != confirmPassword) {
      Alert.alert("PASSWORD MISS MATCHED", "Password must be same");
      return;
    }

    if (username.trim().length < 3) {
      Alert.alert("INVALID USERNAME", "Please enter username");
      return;
    }
    signUpUser();
  };

  const signUpUser = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      password1: passowrd,
      password2: confirmPassword,
      name: name,
      username: username,
      activeClient: 5,
      accountType: "Training",
      email: email,
      referredBy: "aftabameen",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${BASE_URL}api/auth/sign-up`, requestOptions)
      .then((response) => {
        if (response.status != 201) {
          setLoading(false);
          response.json().then((data) => {
            console.log(data);
            Alert.alert("Error while siging In", data.message[0]);
          });
        } else {
          response.json().then((data) => {
            dispatch(setTrainUserSignUp(data.data)).then((data) => {
              setLoading(false);
              navigation.navigate("Connectwatch");
              // navigation.navigate("SignUp2")
            });
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert("Sign Up Error", `${JSON.stringify(error)}`);
      });
  };
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
              <Ionicons
                name={show ? "eye-outline" : "eye-off-outline"}
                size={RFValue(22)}
                color={"rgba(0,0,0,.5)"}
              />
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
              <Ionicons
                name={show1 ? "eye-outline" : "eye-off-outline"}
                size={RFValue(22)}
                color={"rgba(0,0,0,.5)"}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(num) => setUserName(num)}
            value={username}
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
              onPress={() => validateData()}
              style={globalstyles.buttonStyle}
            >
              {loading ? (
                <ActivityIndicator color={theme.whiteColor} />
              ) : (
                <Text style={globalstyles.buttonText}>NEXT</Text>
              )}
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
