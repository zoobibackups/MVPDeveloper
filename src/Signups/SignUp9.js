import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Alert,
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
import { RFValue } from "react-native-responsive-fontsize";
import { setMoreThingsToAvoid } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
const SignUp9 = ({navigation, route}) => {
  const isUpdate = route?.params?.isUpdate;
  const { user, foodMetaData } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [ingredients, setIngredients] = useState(foodMetaData.seeMoreIngredients);
  const [checked, setChecked] = useState(false);
  const [meal, setMeal] = useState(foodMetaData.seeMoreMeals);
  const validateData = () => {
    if (checked) {
      dispatch(
        setMoreThingsToAvoid({
          meal: meal,
          ingredients: ingredients,
          checked: checked,
        })
      ).then(() => {
        navigation.navigate("MicroNutrientsScreen");
      });
    } else if (ingredients == "" || ingredients == null) {
      Alert.alert("INGREDIENTS EMPTY", "Please enter some ingredients");
      return;
    } else if (meal == "" || meal == null) {
      Alert.alert("Meal/COURSES EMPTY", "Please enter some meal/courses");
    }
    dispatch(
      setMoreThingsToAvoid({
        meal: meal,
        ingredients: ingredients,
        checked: checked,
      })
    ).then(() => {
      if(isUpdate){
        navigation.goBack()
      }else{
      navigation.navigate("MicroNutrientsScreen");
      }
    });
  };
  return (
    <>
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
            subTitle={"I WOULD LIKE TO SEE MORE OF:"}
          />

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(65),
              width: getWidth(90),
              borderColor: "red",
            }}
          >
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Ingredients:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setIngredients(text)}
                value={ingredients}
                placeholder="Fish, Beans, ........."
                placeholderTextColor="grey"
                // keyboardType="numeric"
              />
            </View>
            <View style={globalstyles.inputVerticalContainer}>
              <Text style={globalstyles.inputLabel}>Meals/courses:</Text>
              <TextInput
                style={globalstyles.textInputWithOutIcon}
                onChangeText={(text) => setMeal(text)}
                value={meal}
                placeholder="Fish & chips, pizza, ........."
                placeholderTextColor="grey"
              />
            </View>
            <View
              style={{
                paddingTop: 5,
                width: getWidth(85),
              }}
            >
              <Text
                style={{
                  ...textStyles.lightText,
                  fontSize: RFValue(10),
                  lineHeight: RFValue(14),
                  fontWeight: "300",
                }}
              >
                OBS: When writing foods to avoid, make sure to put a comma after
                every one. Like the example above.
              </Text>
            </View>
            <View
              style={{
                width: getWidth(90),
                borderRadius: 20,
                height: getHeight(10),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckboxSquare
                isChecked={checked}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={globalstyles.inputLabel}>
                I don’t have anything to avoid
              </Text>
            </View>

            <View
              style={{
                ...globalstyles.buttonContianer,
                marginTop: getHeight(10),
              }}
            >
              <TouchableOpacity
                onPress={() => validateData()}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};

export default SignUp9;
