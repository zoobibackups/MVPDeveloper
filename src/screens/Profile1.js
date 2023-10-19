import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { man } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import { getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";

const data = [
  {
    name: "Bench press",
    weight: "80 kg",
  },
  {
    name: "Deadlift",
    weight: "100 kg",
  },
  {
    name: "Squats",
    weight: "120 kg",
  },
  {
    name: "Shoulder press",
    weight: "60 kg",
  },
];

const data2 = [
  {
    name: "Current weight",
    weight: "76 kg",
  },
  {
    name: "Target wright",
    weight: "83 kg",
  },
  {
    name: "Height",
    weight: "178 cm",
  },
  {
    name: "Completed workouts",
    weight: "26",
  },
];
const Profile1 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: 50,
        borderColor: "red",
        height: "100%",
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"PROFILE OVERVIEW"}
        subTitle={""}
      />
      <FlatList
        data={["Muhammad", "Anges.O", "Roger", "Stina lena", "Seven-Invegar", "Roger"]}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
         
        }}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
               onPress={() => navigation.navigate("ClientOverView") }
                style={{
                  alignItems: "center",
                 
                  justifyContent: "center",
                  width: getWidth(40),
                  height:getWidth(45)
                }}
              >
                <SvgXml width={getWidth(28)} height={getWidth(28)} xml={man} />
                <Text style={{...textStyles.mediumText,color:"#0009", fontSize:RFValue(13)}} >{item}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp1")}  style={{...globalstyles.buttonStyle, width:getWidth(80)}}>
        <Text style={{...globalstyles.buttonText}}>Create Profile</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Profile1;

const styles = StyleSheet.create({});
