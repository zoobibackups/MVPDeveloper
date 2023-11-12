import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { useSelector } from "react-redux";

const SignUp31 = () => {
  const { trainingMetaData, accessToken } = useSelector(
    (state) => state.userReducer
  );
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const createFoodMetaData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        ...trainingMetaData,
        height: Number(trainingMetaData.height),
        age: Number(trainingMetaData.age),
        weight: Number(trainingMetaData.weight),
      }),
      redirect: "follow",
    };
    setLoading(true);
    fetch(
      "https://as-dev.code-freaks.com/mvp/api/users/update/training/metadata",
      requestOptions
    )
      .then((result) => {
        if (result.status == 200) {
          setLoading(false)
          Alert.alert("SUCCESS", "Food schedule has been created", [
            {
              text: "Login to Continue",
              onPress: () => navigation.navigate("LogIn3")
            },
          ]);
        } else {
          result.json().then((data) => {
            setLoading(false);
            
            Alert.alert("ERROR IN CREATE SCHEDULE");
          });
        }
      })
      .catch((error) => {
        console.log("error", error)
        Alert.alert("ERROR IN CREATE SCHEDULE");
        setLoading(false)
      });
  };
  return (
    <>
      <KeyBoardHandle>
        <LinearGradient
          style={{
            alignItems: "center",
            paddingVertical: 30,
            height: "100%",
          }}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <CustomHeader
            onPress={() => navigation.goBack()}
            title={"CREATE PROFILE"}
            subTitle={"GREAT JOB, YOU ARE ALL DONE!"}
            subTitleStyle={{
              color: theme.blueColor,
              fontWeight: "800",
            }}
          />

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(6),
            }}
          >
            <Text style={textStyles.lightText}>THIS IS YOUR PROFILE</Text>
          </View>

          <View style={globalstyles.innerContainer}>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Goal/ Mission:</Text>
              <View
                onPress={() => navigation.navigate("SignUp21")}
                style={globalstyles.textInputWithOutIcon}
              >
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  {trainingMetaData.finalGoal}
                </Text>
              </View>
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Equipment:</Text>
              <View
                onPress={() => navigation.navigate("SignUp28")}
                style={globalstyles.textInputWithOutIcon}
              >
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  {trainingMetaData.equipments}
                </Text>
              </View>
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Location:</Text>
              <View
                onPress={() => navigation.navigate("SignUp18")}
                style={globalstyles.textInputWithOutIcon}
              >
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  {trainingMetaData.workoutPlace}
                </Text>
              </View>
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Days:</Text>
              <View style={globalstyles.textInputWithOutIcon}>
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaMedium,
                    lineHeight: RFValue(17),
                  }}
                >
                  {trainingMetaData.workourdays}
                </Text>
              </View>
            </View>

            <View style={globalstyles.buttonContianer}>
              <TouchableOpacity
                onPress={() => createFoodMetaData()}
                style={globalstyles.buttonStyle}
              >
                {loading ? (
                  <ActivityIndicator color={theme.whiteColor} size={"small"} />
                ) : (
                  <Text style={globalstyles.buttonText}>Next</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: "green",
    height: getHeight(91),
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderColor: "blue",
    // borderWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // justifyContent: 'flex-end',
    height: getHeight(53),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "900",
  },
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: "#1B1561",
    color: "grey",
  },
  modal: {
    justifyContent: "flex-end",

    marginLeft: 0,
    bottom: 0,
    top: 10,
  },
  topBar: {
    fontWeight: "bold",
    fontSize: 30,
    borderRadius: 65,
    // borderWidth: 2,
    borderColor: "#D3D3D3",

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "#D3D3D3",
  },
  //   modalView: {
  //     borderWidth: 1,
  //     borderColor: 'black',
  //     bottom: -20,
  //     justifyContent: 'flex-start',

  //     borderTopStartRadius: 20,
  //     borderTopEndRadius: 20,
  //     height: getHeight(67),
  //     width: getWidth(100),

  //     backgroundColor: 'white',
  //   },
});
export default SignUp31;
