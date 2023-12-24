import {
  appleAuth,
  AppleButton,
} from "@invertase/react-native-apple-authentication";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
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
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { setUserLogin } from "../store/actions/userActions";
import textStyles, { globalstyles } from "../styles/globalestyles";
const LogIn3 = () => {
  const dispatch = useDispatch();
  const { whichStack, accounttype, user, isLoggedIn } = useSelector(
    (state) => state.userReducer
  );
  const [email, setEmail] = useState("engr.aftabufaq100@gmail.com");
  const [password, setPassword] = useState("Tikt0k@1");
  const [show1, setShow1] = useState(true);
  const [loading, setLoading] = useState(false);

  const loginUser = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      emailOrUsername: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://as-dev.code-freaks.com/mvp/api/auth/sign-in", requestOptions)
      .then((response) => {
        if (response.status != 200) {
          setLoading(false);
          response.json().then((data) => {
            Alert.alert("Error while siging In", data.message[0]);
          });
        } else {
          response.json().then((data) => {
            if (data.data.user.accountType == accounttype) {
              dispatch(
                setUserLogin({
                  accessToken: data.data.accessToken,
                  refreshToken: data.data.refreshToken,
                  user: data.data.user,
                })
              ).then((data) => {
                setLoading(false);
              });
            } else {
              setLoading(false);
              Alert.alert("Wrong Account", "Please check your credentials");
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert("Sign Up Error", `${JSON.stringify(error)}`);
      });
  };

  const appleSignIn = async () => {
    onAppleButtonPress()
      .then((identityToken) => {
        Alert.alert("Login Success", identityToken);
      })
      .catch((err) => {
        Alert.alert(
          "APPLE LOGIN ERROR",
          "SOME THING WENT WRONG WHILE APPLE SIGNING IN",
          [
            {
              text: "OK",
            },
          ]
        );
      });
  };

  const onAppleButtonPress = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        // Ensure Apple returned a user identityToken
        if (!appleAuthRequestResponse.identityToken) {
          reject("Apple Sign-In failed - no identify token returned");
        }

        // Create a Firebase credential from the response
        const { identityToken, nonce } = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce
        );
        // Sign the user in with the credential
        try {
          let data = await auth().signInWithCredential(appleCredential);
          return resolve(identityToken);
        } catch (err) {
          reject("Apple Sign-In failed - no identify token returned");
        }
      } catch (err) {
        reject(JSON.stringify(err));
      }
    });
  };

  const googleSignIn = async () => {
    GoogleSignin.hasPlayServices({
      autoResolve: true,
      showPlayServicesUpdateDialog: true,
    })
      .then(async (playServicesReponse) => {
        GoogleSignin.signIn()
          .then((userInfo) => {
            const googleCredential = auth.GoogleAuthProvider.credential(
              userInfo.idToken
            );
            auth()
              .signInWithCredential(googleCredential)
              .then((data) => {
                Alert.alert("GOOGLE DONE", auth().currentUser.displayName);
              })
              .catch((err) => {
                setLoading(false);
                Alert.alert(
                  "GOOGLE SIGNIN ERROR",
                  JSON.stringify(err.userInfo.NSLocalizedDescription, [
                    {
                      text: "OK",
                      onPress: () => setLoading(false),
                    },
                  ])
                );
              });
          })
          .catch((err) => {
            setLoading(false);
            Alert.alert(
              "GOOGLE SIGNIN ERROR",
              JSON.stringify(err.userInfo.NSLocalizedDescription, [
                {
                  text: "OK",
                  onPress: () => setLoading(false),
                },
              ])
            );
          });
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert("GOOGLE PLAY ERROR", JSON.stringify(err.message), [
          {
            text: "OK",
            onPress: () => setLoading(false),
          },
        ]);
      });
  };

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
            <TouchableOpacity
              onPress={() => loginUser()}
              style={globalstyles.buttonStyle}
            >
              {loading ? (
                <ActivityIndicator color={theme.whiteColor} size={"small"} />
              ) : (
                <Text
                  style={{
                    ...textStyles.lightText,
                    color: theme.whiteColor,
                  }}
                >
                  LOG IN
                </Text>
              )}
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
            <TouchableOpacity
              style={styles.buttonBox}
              onPress={() => googleSignIn()}
            >
              <SvgXml xml={google} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonBox}
              onPress={() => appleSignIn()}
            >
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
