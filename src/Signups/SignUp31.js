import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CheckboxSquare from "../Components/CheckBoxSquare";
import CustomHeader from "../Components/CustomHeader";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import theme from "../Constants/theme";

const SignUp31 = () => {
  const navigation = useNavigation();

  const [ingredients, setIngredients] = useState("");
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState("");
  const [meal, setMeal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
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
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Goal/ Mission:"
                placeholderTextColor="black"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Equipment:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(text) => setMeal(text)}
              value={meal}
              placeholder="Benchpress, Dumbells"
              placeholderTextColor="black"
            />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Location:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(text) => setMeal(text)}
              value={meal}
              placeholder="Gym"
              placeholderTextColor="black"
            />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
            <Text style={globalstyles.inputLabel}>Days:</Text>
            <TextInput
              style={globalstyles.textInputWithOutIcon}
              onChangeText={(text) => setMeal(text)}
              value={meal}
              placeholder="Monday, Wednesday, Saturday"
              placeholderTextColor="black"
            />
            </View>

            
           
           

            <View
              style={globalstyles.buttonContianer}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("TrainingHome1")}
                style={globalstyles.buttonStyle}
              >
                <Text
                  style={globalstyles.buttonText}
                >
                  Next
                </Text>
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
