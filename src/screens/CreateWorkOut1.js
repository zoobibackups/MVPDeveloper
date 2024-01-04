import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,ActivityIndicator,
  View,
  Alert
} from "react-native";
import { Search } from "react-native-feather";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
import { useLazyCreateUserExerciseQuery } from "../store/services/userExercise";
import { useLazyCreateCustomWorkOutQuery } from "../store/services/userWorkOut"
import { useLazyCreateUserSetsQuery } from "../store/services/userSetsApi";
import { useSelector } from "react-redux";
const CreateWorkOut1 = () => {
  const {user} = useSelector(state =>  state.userReducer)
  const navigation = useNavigation();
  const [name, setName] = useState("")
  const [createCustomWorkOut,workOutData ] = useLazyCreateCustomWorkOutQuery();
  const [createUserExercise, exerciseData] = useLazyCreateUserExerciseQuery();
  
  const createCustomWorkOutLocal = () => {
      if(name == null || name == "" || name.trim().length == 0){
        Alert.alert("Invalid Name", "Please Enter a valid name")
        return
      }
      
      createCustomWorkOut({data:{
        "user": user.id,
        "name": name,
        "status": "active"
      }}).then((response) => {
       if(response.isSuccess){
        createUserExercise({data:{
          "workout": response.data.id,
          "name": name,
          "status": "active"
        }}).then((exerciseResponse) => {
          console.log(exerciseResponse);
          if(exerciseResponse.isSuccess){
            navigation.navigate("CreateWorkOut2", {item:exerciseResponse.data})
          }else{
            Alert.alert("ERROR", "Some thing went wrong 1")
          }
        }).catch((err) => {
          Alert.alert("ERROR", "Some thing went wrong 2")
        })
       }else{
        Alert.alert("ERROR", "Some thing went wrong 3")
       }
      }).catch((err) => {
                Alert.alert("ERROR", "Some thing went wrong 4")
      })
  }

  return (
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
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"BUILD YOUR OWN SCHEDULE"}
        subTitle={""}
        titleStyle={{
          alignSelf: "center",
          fontSize: RFValue(12),
        }}
      />

      <View
        style={{
          ...globalstyles.inputVerticalContainer,
          marginTop: getHeight(2),
        }}
      >
        <Text style={globalstyles.inputLabel}>Exercise name:</Text>

        <View style={globalstyles.inputContainer}>
          <Search size={RFValue(30)} color={theme.blueColor} />
          <TextInput
            placeholder="Exercise Name"
            placeholderTextColor="#0004"
            style={globalstyles.textInputStyle}
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>
      </View>


      <View
        style={{
          marginTop: 20,
          borderColor: "green",
          width: getWidth(90),

          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
        disabled={workOutData.isLoading || exerciseData.isLoading}
          onPress={() => createCustomWorkOutLocal()}
         // onPress={() => navigation.navigate("CreateWorkOut2")}
          style={{ ...globalstyles.buttonStyle, width: getWidth(28) }}
        >
         {(workOutData.isLoading || exerciseData.isLoading) ? <ActivityIndicator color={"#fff"} size={"small"} /> :
         <Text style={globalstyles.buttonText}>Add</Text> }
        </TouchableOpacity>
      </View>
      {/* <View
        style={{ ...globalstyles.buttonContianer, marginTop: getHeight(30) }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ActiveWorkOut1")}
          style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
        >
          <Text style={globalstyles.buttonText}>Start your workout</Text>
        </TouchableOpacity>
      </View> */}
    </LinearGradient>
  );
};

export default CreateWorkOut1;

