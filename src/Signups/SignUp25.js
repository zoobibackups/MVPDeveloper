import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { graph } from "../../assets/svg";
import CustomHeader from "../Components/CustomHeader";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { setTrainEstimatedTargetDate } from "../store/actions/userActions";
const SignUp25 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [range, setRange] = useState(0);
  const navigation = useNavigation();
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 7);
  // Format the date to a string using the toLocaleDateString method
  const formattedDate = futureDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: "2-digit",
    day: 'numeric',
  });
  const validateData = () => {
    if (range < 1) {
      Alert.alert("INVALID RANGE", "Please select a range");
      return;
    }
    dispatch(
      setTrainEstimatedTargetDate({ weightPerWeek: parseFloat(range).toFixed(2), estimatedTargetDate:formattedDate })
    ).then(() => {
      navigation.navigate("SignUp17");
    });
  };
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
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={"Estimated target date"}
      />

      <View
        style={{
          height: getHeight(30),
          width: getWidth(90),
          marginTop: getHeight(3),
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <SvgXml xml={graph} width={getWidth(99)} height={getHeight(35)} />
      </View>

      <View
        style={{
          height: getHeight(20),
          width: getWidth(90),
          borderColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "AnekBangla-Medium",
            color: "#1B1561",
            fontWeight: "600",
            fontSize: 35,
            letterSpacing: 2,
          }}
        >
          {parseFloat(range).toFixed(2)}Kg
        </Text>
        <Text
          style={{
            fontFamily: "AnekBangla-Medium",
            color: "grey",
            fontWeight: "400",
            fontSize: 16,
            letterSpacing: 2,
          }}
        >
          Per Week
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: getWidth(94),
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (range > 0) {
                setRange(range - 10);
              } else {
                setRange(0);
              }
            }}
            style={{
              width: getWidth(4),
              height: getWidth(4),
              backgroundColor: "rgba(0, 0, 0, .4)",
              borderRadius: getWidth(4),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"minus"} color={theme.whiteColor} />
          </TouchableOpacity>
          <Slider
            style={{ width: getWidth(80), height: 10, borderWidth: 0 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#1B1561"
            maximumTrackTintColor="white"
            thumbTintColor="#1B1561"
            value={range}
            onValueChange={(value) => setRange(value)}
          />
          <TouchableOpacity
            onPress={() => {
              if (range < 100) {
                setRange(range + 10);
              } else {
                setRange(100);
              }
            }}
            style={{
              width: getWidth(4),
              height: getWidth(4),
              backgroundColor: "rgba(0, 0, 0, .4)",
              borderRadius: getWidth(4),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"plus"} color={theme.whiteColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.butotnContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.buttonStyle}
        >
          <Text
            style={{
              ...textStyles.mediumText,
              color: theme.blueColor,
              fontSize: RFValue(16),
            }}
          >
            Recommended weight loss
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => validateData()}
          style={{
            ...styles.buttonStyle,

            borderColor: "#1B1561",
            backgroundColor: "#1B1561",
          }}
        >
          <Text style={globalstyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        style={{ margin: 0 }}
        transparent={true}
        isVisible={modalVisible}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <LinearGradient
              style={styles.modalView}
              colors={["#FDFFF4", "#BBC1AD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0 }}
            >
              <View style={{ borderColor: "red", paddingTop: 15 }}>
                <View style={styles.topBar} />
              </View>

              <Text
                style={{
                  color: "#1B1561",
                  fontSize: 25,
                  fontWeight: "700",
                  fontFamily: "AnekBangla-Medium",
                }}
              >
                DISCLAIMER:
              </Text>

              <Text
                style={{
                  ...textStyles.simpleText,
                  fontSize: RFValue(10),
                  lineHeight: RFValue(10) * 1.3,
                  letterSpacing: 1,
                  textAlign: "center",
                  paddingHorizontal: getWidth(10),
                  marginTop: 2,
                }}
              >
                The following information is provided for general purposes only
                and should not be considered a substitute for professional
                medical advice or guidance. Extreme weight loss goals can be
                dangerous and may pose serious health risks. It is important to
                approach weight loss with realistic expectations and consult
                with a healthcare professional or registered dietitian before
                embarking on any weight loss program. We do not endorse or take
                responsibility for any extreme weight loss goals or the
                potential adverse effects that may arise from pursuing such
                goals. Individual results may vary, and it is crucial to
                prioritize overall health and well-being when considering weight
                loss. Please seek qualified medical advice to determine the most
                appropriate approach for your specific circumstances.
              </Text>

              <View
                style={{
                  alignItems: "center",
                  borderColor: "red",

                  height: getHeight(14),
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={globalstyles.buttonStyle}
                >
                  <Text style={globalstyles.buttonText}>O k</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  butotnContainer: {
    height: getHeight(19),
    width: getWidth(90),
    borderColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonStyle: {
    height: getWidth(15),
    width: getWidth(90),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#1B1561",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    borderColor: "blue",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "flex-end",
    height: getHeight(55),
    width: getWidth(100),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  topBar: {
    borderRadius: 20,
    borderColor: "#0008",
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "#0003",
  },
});
export default SignUp25;
