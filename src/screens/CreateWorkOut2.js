import React, { useState } from "react";
import {
  Alert,
  Platform,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { delete_svg } from "../../assets/svg";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useLazyCreateUserSetsQuery } from "../store/services/userSetsApi";
import { globalstyles } from "../styles/globalestyles";
const itemStyles = StyleSheet.create({
  itemMainView: {
    width: getWidth(90),
    borderRadius: 20,
    marginBottom: moderateScale(20),
    height: getHeight(8),
    shadowColor: "rgba(103, 128, 159)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  textContainer: {
    paddingLeft: moderateScale(20),
    justifyContent: "center",
    width: getWidth(70),
  },
  title: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 17 * 1.8,
    includeFontPadding: false,
  },
  subTitle: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "400",
    lineHeight: 15 * 1.4,
    fontSize: 15,
    letterSpacing: 2,
  },
});
const RenderItem = ({ title, subtitle, onPress }) => {
  return (
    <View>
      <LinearGradient
        style={itemStyles.itemMainView}
        colors={["#FDFFF4", "#BBC1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        <View style={itemStyles.textContainer}>
          <Text style={itemStyles.title}>{title}</Text>
          <Text style={itemStyles.subTitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <SvgXml width={getWidth(10)} height={getWidth(5)} xml={delete_svg} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const CreateWorkOut2 = ({ navigation, route }) => {
  const [createUserSets, userExerciseSetsData] = useLazyCreateUserSetsQuery();
  const exerciseData = route.params.item;
  const [set_name, setSetName] = useState("");
  const [repetation, setReptation] = useState("");
  const [numberOfSets, setNumberOfSets] = useState("");
  const [time, setTime] = useState("");
  const [sets, setSets] = useState([]);
  const addsetstouserexercise = () => {
    if (set_name == "" || set_name.trim().length == 0) {
      Alert.alert("INVALID DATA", "SET NAME CANNOT BE EMPTY");
      return;
    }
    if (repetation == "" || repetation.trim().length == 0) {
      Alert.alert("INVALID DATA", "Repition must be greate then Zero");
      return;
    }
    if (numberOfSets == "" || numberOfSets.trim().length == 0) {
      Alert.alert("INVALID DATA", "Sets must be greate then Zero");
      return;
    }
    if (time == "" || time.trim().length == 0) {
      Alert.alert("INVALID DATA", "Time must be greate then Zero");
      return;
    }
    createUserSets({
      data: {
        usersExercise: exerciseData.id,
        weight: set_name,
        repetitions: Number(repetation),
        sets: Number(numberOfSets),
        time: Number(time),
        status: "active",
      },
    })
      .then((response) => {
        if (response.isSuccess) {
          Alert.alert("SUCCESS", "SET Added Successfully");
          setSets([...sets, { ...response.data }]);
        } else {
          Alert.alert("ERROR", "Please try again");
        }
      })
      .catch((err) => {
        Alert.alert("ERROR", "Please try again");
      });
  };
  const deleteExercise = (id) => {

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
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View
          style={{
            ...globalstyles.inputVerticalContainer,
            marginTop: getHeight(2),
          }}
        >
          <Text style={globalstyles.inputLabel}>Exercise name:</Text>

          <TextInput
            placeholder="Bench press"
            value={set_name}
            onChangeText={(text) => setSetName(text)}
            placeholderTextColor="#0004"
            style={globalstyles.textInputWithOutIcon}
          />
        </View>
        <View
          style={{
            ...globalstyles.inputVerticalContainer,
          }}
        >
          <Text style={globalstyles.inputLabel}>Repetitions</Text>
          <TextInput
            style={globalstyles.textInputWithOutIcon}
            placeholderTextColor="grey"
            value={repetation}
            onChangeText={(text) => setReptation(text)}
            placeholder="3 x 8 - 12 repetitions"
          />
        </View>

        <View
          style={{
            ...globalstyles.inputVerticalContainer,
          }}
        >
          <Text style={globalstyles.inputLabel}>Sets</Text>
          <TextInput
            style={globalstyles.textInputWithOutIcon}
            placeholderTextColor="grey"
            value={numberOfSets}
            onChangeText={(text) => setNumberOfSets(text)}
            placeholder="Number of sets"
          />
        </View>

        <View
          style={{
            ...globalstyles.inputVerticalContainer,
          }}
        >
          <Text style={globalstyles.inputLabel}>Time</Text>
          <TextInput
            style={globalstyles.textInputWithOutIcon}
            onChangeText={(text) => setTime(text)}
            placeholderTextColor="grey"
            keyboardType={"number-pad"}
            value={time}
            placeholder="Time in seconds"
          />
        </View>

        <View
          style={{
            borderColor: "green",
            width: getWidth(90),

            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            disabled={userExerciseSetsData.isLoading}
            onPress={() => addsetstouserexercise()}
            style={{ ...globalstyles.buttonStyle, width: getWidth(28) }}
          >
            {userExerciseSetsData.isLoading ? (
              <ActivityIndicator color={"#ffff"} size={"small"} />
            ) : (
              <Text style={globalstyles.buttonText}>Add</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.innerView}>
          {sets.map((item, index) => {
            return (
              <RenderItem
                key={`${index}`}
                title={item.weight}
                subtitle={`${item.time} - ${item.sets} * ${item.repetitions} repetitions`}
                onPress={() => deleteExercise(item.id)}
              />
            );
          })}
        </View>
        <View
          style={{ ...globalstyles.buttonContianer, marginTop: getHeight(3) }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ActiveWorkOut3", {item:{
              exerciseData:exerciseData,
              sets:sets
            }})}
            style={{ ...globalstyles.buttonStyle, width: getWidth(70) }}
          >
            <Text style={globalstyles.buttonText}>Start your workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreateWorkOut2;

const styles = StyleSheet.create({
  innerView: {
    width: getWidth(97),
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: moderateScale(10),
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
});
