import React, { useState } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { globalstyles } from "../styles/globalestyles";

import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { backward, preformly } from "../../assets/svg";
import fonts from "../Constants/fonts";

const UpdateWeightTraining = () => {
  const navigation = useNavigation();
  var radio_props = [
    { label: "male", value: 0 },
    { label: "female", value: 1 },
    { label: "other", value: 2 },
  ];

  const [time, setTime] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  //   const [selectedIndex, setIndex] = useState(0);
  //   const [state, setState] = useState(false);
  //   //   const [passowrd, setPassword] = useState('');
  //   //   const [show,setShow]=useState(true)
  //   //    const [show1,setShow1]=useState(true)
  //   const [confirmPassword, setConfirmPassowrd] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
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
          <HeaderMainScreen
            onPress={() => navigation.goBack()}
            title={"CHANGE  PROFILE"}
            subTitle={"Update my weight"}
            subTitleStyle={{
              textAlign: "center",
              alignSelf: "center",
            }}
          />

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(65),
              width: getWidth(90),
              borderColor: "red",
              //   borderWidth: 1,
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: "AnekBangla-Medium",
                color: "black",
                fontWeight: "400",
                letterSpacing: 2,
              }}
            >
              New Weight:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setWeight(text)}
              value={weight}
              placeholder="Enter your goal weight"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />

            <View
              style={{
                alignItems: "center",
                borderColor: "red",
                height: getHeight(33),
                justifyContent: "flex-end",
                // borderWidth:1
              }}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Add Pictures</Text>
              </TouchableOpacity>
              <View style={{ paddingTop: 25, width: getWidth(60) }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    fontFamily: fonts.AnekBanglaSemiBold,
                    lineHeight: 16 * 1.5,
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Add a picture of yourself to track your weight journey and
                  keep the motivation high.
                </Text>
              </View>
            </View>

            <View
              style={{
                alignItems: "center",
                borderColor: "red",
                height: getHeight(17),
                justifyContent: "flex-end",
                // borderWidth:1
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("WeightProgress")}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Update</Text>
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
export default UpdateWeightTraining;
