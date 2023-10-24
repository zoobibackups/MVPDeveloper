import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Search } from "react-native-feather";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
const CreateWorkOut1 = () => {
  const navigation = useNavigation();
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
            placeholder="Search muscle group"
            placeholderTextColor="#0004"
            style={globalstyles.textInputStyle}
          />
        </View>
      </View>
      <View
        style={{
          ...globalstyles.inputVerticalContainer,
          marginTop: getHeight(2),
        }}
      >
        <Text style={globalstyles.inputLabel}>Repetitions</Text>
        <TextInput
          style={globalstyles.textInputWithOutIcon}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="grey"
          value={""}
          placeholder="Repetitions"
        />
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
          onPress={() => navigation.navigate("CreateWorkOut2")}
          style={{ ...globalstyles.buttonStyle, width: getWidth(28) }}
        >
          <Text style={globalstyles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ ...globalstyles.buttonContianer, marginTop: getHeight(30) }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ActiveWorkOut1")}
          style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
        >
          <Text style={globalstyles.buttonText}>Start your workout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CreateWorkOut1;

