import { useState } from "react";

import { useNavigation } from "@react-navigation/core";
import {
  ActivityIndicator,
  Alert,
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
import Ionicons from "react-native-vector-icons/Ionicons";
import { preformly } from "../../assets/svg";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import BASE_URL from "../store/services/baseUrl";
import { globalstyles } from "../styles/globalestyles";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhoneNumber,
} from "../validation/commonValidation";
import { setUserSignUp } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const SignUp1 = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState(
    __DEV__ ? "dr.aftabufaq@gmail.com" : ""
  );
  const [name, setName] = useState(__DEV__ ? "Aftab Amin" : "");
  const [username, setUserName] = useState(__DEV__ ? "draftabameen" : "");
  const [number, setNumber] = useState(__DEV__ ? "923408901078" : "");
  const [passowrd, setPassword] = useState(__DEV__ ? "Tikt0k@1" : "");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [confirmPassword, setConfirmPassowrd] = useState(
    __DEV__ ? "Tikt0k@1" : ""
  );
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const validateData = () => {
    if (!isValidName(name)) {
      Alert.alert("INVALID NAME", "Please enter a valid name");
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert("INVALID EMAIL", "Please enter a valid name");
      return;
    }
    if (!isValidPhoneNumber(number)) {
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
      phone: number,
      activeClient: 5,
      accountType: "Food",
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
        console.log(response.status);
        if (response.status != 201) {
          setLoading(false)
          response.json().then((data) => {
           // console.log(data);
            Alert.alert("Error while siging In",data.message);
          });
        } else {
          response.json().then((data) => {
           
            dispatch(setUserSignUp(data.data)).then((data) => {
              setLoading(false)
              navigation.navigate("SignUp2")
            })
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
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserName(text)}
            value={username}
            placeholder="User name"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email address"
            placeholderTextColor="grey"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            onChangeText={(num) => setNumber(num)}
            value={number}
            placeholder="Phone number"
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
              style={{
                ...globalstyles.textInputStyle,
                textAlignVertical: "center",
              }}
              onChangeText={(text) => setConfirmPassowrd(text)}
              value={confirmPassword}
              placeholder="Confirm password"
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
          <View style={{ paddingTop: 50, alignItems: "center" }}>
            <TouchableOpacity
              disabled={loading}
              onPress={() => validateData()}
             //onPress={() => navigation.navigate("SignUp2")}
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
