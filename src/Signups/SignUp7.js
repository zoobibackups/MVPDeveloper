import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import Checkbox from "../Components/CheckBox";
import CustomHeader from "../Components/CustomHeader";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { setFavoriteCuisines } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const SignUp7 = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [checked11, setChecked11] = useState(false);
  const [checked12, setChecked12] = useState(false);
  const [checked13, setChecked13] = useState(false);
  const [checked14, setChecked14] = useState(false);
  const [checked15, setChecked15] = useState(false);
  const [checked16, setChecked16] = useState(false);
  const [checked17, setChecked17] = useState(false);
  const [checked18, setChecked18] = useState(false);
  const [checked19, setChecked19] = useState(false);
  const navigation = useNavigation();
  const validateData = () => {
    var values = "";
    try {
      if (
        checked ||
        checked1 ||
        checked2 ||
        checked3 ||
        checked4 ||
        checked5 ||
        checked6 ||
        checked7 ||
        checked8 ||
        checked9 ||
        checked10 ||
        checked11 ||
        checked12 ||
        checked13 ||
        checked14 ||
        checked15 ||
        checked16 ||
        checked17 ||
        checked18 ||
        checked19
      ) {
        console.log(
          checked,
          checked1,
          checked2,
          checked3,
          checked4,
          checked5,
          checked6,
          checked7,
          checked8,
          checked9,
          checked10,
          checked11,
          checked12,
          checked13,
          checked14,
          checked15,
          checked16,
          checked17,
          checked18,
          checked19
        );
        if (checked) {
          values = values.concat("Italian cuisine", ", ");
        }
        if (checked1) {
          values = values.concat("Chinese cuisine", ", ");
        }
        if (checked2) {
          values = values.concat("Mexican cuisine", ", ");
        }
        if (checked3) {
          values = values.concat("Japanese cuisine", ", ");
        }
        if (checked4) {
          values = values.concat("Indian cuisine", ", ");
        }
        if (checked5) {
          values = values.concat("French cuisine", ", ");
        }
        if (checked6) {
          values = values.concat("Thai cuisine", ", ");
        }
        if (checked7) {
          values = values.concat("Greek cuisine", ", ");
        }
        if (checked8) {
          values = values.concat("Spanish cuisine", ", ");
        }
        if (checked9) {
          values = values.concat("Lebanese cuisine", ", ");
        }
        if (checked10) {
          values = values.concat("Korean cuisine", ", ");
        }
        if (checked11) {
          values = values.concat("Vietnamese cuisine", ", ");
        }
        if (checked12) {
          values = values.concat("Moroccan cuisine", ", ");
        }
        if (checked13) {
          values = values.concat("Ethiopian cuisine", ", ");
        }
        if (checked14) {
          values = values.concat("Brazilian cuisine", ", ");
        }
        if (checked15) {
          values = values.concat("Turkish cuisine", ", ");
        }
        if (checked16) {
          values = values.concat("Russian cuisine", ", ");
        }
        if (checked17) {
          values = values.concat("Indonesian cuisine", ", ");
        }
        if (checked18) {
          values = values.concat("Jamaican cuisine", ", ");
        }
        if (checked19) {
          values = values.concat("Peruvian cuisine", ", ");
        }
        dispatch(setFavoriteCuisines({value:values})).then(() => {
          navigation.navigate("SignUp8");
        });
      } else {
        Alert.alert("NO OPTION SELECTED", "Please select an option");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: RFValue(30),

        height: "100%",
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={" TELL US ABOUT YOUR FAVORITE \n CUISINES"}
      />
      <ScrollView
        style={{ backgroundColor: "#0000" }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ backgroundColor: "#0000" }}
      >
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => setChecked(!checked)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Italian Cuisine</Text>
              <Checkbox isChecked={checked} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked1(!checked1)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>French Cuisine</Text>
              <Checkbox isChecked={checked1} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked2(!checked2)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Japanese Cuisine</Text>
              <Checkbox isChecked={checked2} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked3(!checked3)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Chinese Cuisine</Text>
              <Checkbox isChecked={checked3} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked4(!checked4)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Mexican Cuisine</Text>
              <Checkbox isChecked={checked4} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked5(!checked5)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Indian Cuisine</Text>
              <Checkbox isChecked={checked5} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked6(!checked6)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Thai Cuisine</Text>
              <Checkbox isChecked={checked6} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked7(!checked7)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Greek Cuisine</Text>
              <Checkbox isChecked={checked7} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked8(!checked8)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Spanish Cuisine</Text>
              <Checkbox isChecked={checked8} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked9(!checked9)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Labenese Cuisine</Text>
              <Checkbox isChecked={checked9} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked10(!checked10)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Korean Cuisine</Text>
              <Checkbox isChecked={checked10} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked11(!checked11)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Vietnamese Cuisine</Text>
              <Checkbox isChecked={checked11} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked12(!checked12)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Moroccan Cuisine</Text>
              <Checkbox isChecked={checked12} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked13(!checked13)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Ethiopian Cuisine</Text>
              <Checkbox isChecked={checked13} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked14(!checked14)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Brazilian Cuisine</Text>
              <Checkbox isChecked={checked14} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked15(!checked15)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Turkish Cuisine</Text>
              <Checkbox isChecked={checked15} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked16(!checked16)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Russian Cuisine</Text>
              <Checkbox isChecked={checked16} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked17(!checked17)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Indonesian Cuisine</Text>
              <Checkbox isChecked={checked17} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked18(!checked18)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Jamaican Cuisine</Text>
              <Checkbox isChecked={checked18} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked19(!checked19)}
            style={{ paddingTop: 20 }}
          >
            <LinearGradient
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
              style={styles.selectItem}
            >
              <Text style={styles.selectItemText}>Peruvian Cuisine</Text>
              <Checkbox isChecked={checked19} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContianer}>
          <TouchableOpacity
            onPress={() => {
              validateData();
            }}
            style={globalstyles.buttonStyle}
          >
            <Text style={globalstyles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  innerContainer: {
    width: getWidth(97),
    alignItems: "center",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
  optionsContainer: {
    paddingVertical: 10,
    height: getHeight(50),
    width: getWidth(97),
    borderColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(103, 128, 159, 0.5)", // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === "android" ? 0 : 5,
  },
  selectItem: {
    width: getWidth(90),
    borderRadius: 20,
    height: getHeight(7),
    borderColor: "#F5F5F5",
    shadowColor: "rgba(103, 128, 159)",
    elevation: 32,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  selectItemText: {
    ...textStyles.lightText,
    fontWeight: "400",
    fontSize: RFValue(12),
    paddingLeft: RFValue(10),
  },
  buttonContianer: {
    alignItems: "center",
    borderColor: "red",
    height: getHeight(10),
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    width: getWidth(99),
  },
});
export default SignUp7;
