import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { useLazyUploadCategoryImageQuery } from "../store/services/categoryApi";
import textStyles, { globalstyles } from "../styles/globalestyles";
const ProfileTrainingScreen = () => {
  const { user, foodMetaData } = useSelector((state) => state.userReducer);
  const [uploadCategoryImage, data] = useLazyUploadCategoryImageQuery();
  const [userData, setUserData] = useState(user);
  const [exerciseData, setData] = useState([
    {
      name: "Number Of Meals",
      weight: "80 kg",
    },
    {
      name: "Carbs",
      weight: "100 kg",
    },
    {
      name: "Protein",
      weight: foodMetaData.protein,
    },
    {
      name: "Calories",
      weight: "60 kg",
    },
  ]);
  const [data2, setData2] = useState([
    {
      name: "Number Of Meals",
      weight: "80 kg",
    },
    {
      name: "Carbs",
      weight: "100 kg",
    },
    {
      name: "Protein",
      weight: foodMetaData.protein,
    },
    {
      name: "Calories",
      weight: "60 kg",
    },
  ]);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data.isSuccess) {
      console.log(data.data.secure_url);
      setUserData({ ...userData, profilePhoto: data.data.secure_url });
    }
  }, [data]);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        //setImage(image);
        uploadImage(image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openGalley = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        // setImage(image);
        uploadImage(image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = (image) => {
    const formData = new FormData();
    formData.append("submit", "submit");
    const uriPart = image.sourceURL.split(".");
    const fileExtension = uriPart[uriPart.length - 1];
    formData.append("file", {
      uri: image.sourceURL,
      name: `${fileExtension}`,
      type: image.mime,
    });
    uploadCategoryImage({ data: formData });
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
      <HeaderMainScreen
        onPress={() => navigation.goBack()}
        title={"PROFILE OVERVIEW"}
        subTitle={""}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: getWidth(100) }}
      >
        <View
          style={{
            borderColor: "green",
            width: getWidth(70),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Pick Image", "Open camera of gallery", [
                {
                  text: "Camera",
                  onPress: () => openCamera(),
                },
                {
                  text: "Gallery",
                  onPress: () => openGalley(),
                },
                {
                  text: "Cancel",
                  onPress: () => {},
                },
              ]);
            }}
            style={{
              alignItems: "center",
              borderColor: "grey",
              justifyContent: "center",
              width: getWidth(20),
            }}
          >
            <Image
              source={{ uri: userData.profilePhoto }}
              style={{
                width: getWidth(30),
                height: getWidth(30),
                borderRadius: getWidth(30),
                resizeMode: "cover",
              }}
            />
            {data.isLoading
               && (
                <View
                  style={{
                    position: "absolute",
                    padding: moderateScale(5),
                    borderRadius: 100,
                    backgroundColor: "#000",
                  }}
                >
                  <ActivityIndicator color={"#ffff"} size={"small"} />
                </View>
              )}
          </TouchableOpacity>
        </View>

        <Text style={textStyles.mediumText}>{userData.name}</Text>

        <Text style={styles.titleText}>Lifetime statistic</Text>
        <TouchableOpacity style={{ ...styles.shadowContainer }}>
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {exerciseData.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == exerciseData.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text style={styles.rowText}>{item.name}</Text>
                <Text style={styles.rowText}>{item.weight}</Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{ ...styles.titleText, marginTop: moderateScale(20) }}>
          Daily statitics
        </Text>
        <TouchableOpacity style={{ ...styles.shadowContainer }}>
          <LinearGradient
            style={{
              flex: 1,
              width: getWidth(90),
              borderRadius: 20,
              paddingTop: moderateScale(7),
            }}
            colors={["#FDFFF4", "#BBC1AD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
          >
            {data2.map((item, index) => (
              <View
                style={{
                  ...styles.rowStyle,
                  borderBottomWidth: index == data2.length - 1 ? 0 : 1,
                }}
                key={`${index}`}
              >
                <Text style={styles.rowText}>{item.name}</Text>
                <Text style={styles.rowText}>{item.weight}</Text>
              </View>
            ))}
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            borderColor: "green",
            width: getWidth(90),
            height: getHeight(45),
            marginTop: 20,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Plans")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Upgrade my account</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChangePreference2", { isUpdate: true })
            }
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Change preferences</Text>
            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ChangeGoalTraining")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Change mission/goal</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdateWeightTraining")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Update my weight</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangrInfo1")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Change information</Text>

            <Image
              style={styles.imgStyle}
              source={require("../../assets/images/forwardWhite.png")}
            />
          </TouchableOpacity>
        </View>
        <Modal
          animationn={"fade"}
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
                <View style={{ borderColor: "red", paddingTop: RFValue(10) }}>
                  <Text style={styles.topBar} />
                </View>
                <View
                  style={{
                    borderColor: "red",
                    paddingVertical: 10,
                    width: getWidth(90),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: RFValue(18),
                      fontWeight: "500",
                      fontFamily: "AnekBangla-Medium",
                    }}
                  >
                    Your new changes are saved!
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "red",
                    width: getWidth(86),
                    height: getHeight(42),
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    NOTE: If you apply the changes now, your weakly meal plan
                    could be impacted. How would you like to proceed
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false), navigation.navigate("SignUp6");
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(86) }}
                  >
                    <Text style={globalstyles.buttonText}>
                      Apply changes Now
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    Could impact the weekly schedule.
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false), navigation.navigate("SignUp6");
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(86) }}
                  >
                    <Text style={globalstyles.buttonText}>
                      Apply changes next week
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    Changes will applied for coming weeks.
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                    }}
                    style={{ ...globalstyles.buttonStyle, width: getWidth(86) }}
                  >
                    <Text style={globalstyles.buttonText}>Go back</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.lightText,
                      fontSize: RFValue(10),
                      lineHeight: RFValue(14),
                      textAlign: "justify",
                      fontWeight: "300",
                      letterSpacing: 0.9,
                    }}
                  >
                    Delete changes and go back.
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileTrainingScreen;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 16,
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: moderateScale(40),
    letterSpacing: 2,
  },
  shadowContainer: {
    width: getWidth(90),
    borderRadius: 20,
    margin: moderateScale(2),
    borderColor: "grey",
    backgroundColor: "#BBC1AD",
    borderWidth: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  rowStyle: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    width: getWidth(80),
    justifyContent: "space-between",
    paddingHorizontal: 5,
    flexDirection: "row",
    paddingVertical: moderateScale(7),
  },
  rowText: {
    paddingLeft: 10,
    fontFamily: fonts.AnekBanglaMedium,
    color: "grey",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonStyle: {
    width: getWidth(90),
    borderRadius: 10,
    height: getHeight(7),
    backgroundColor: theme.blueColor,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  imgStyle: {
    resizeMode: "contain",
    width: getWidth(5),
    height: getHeight(2),
  },
  buttonText: {
    ...globalstyles.buttonText,
    fontSize: RFValue(14),
    fontWeight: "400",
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "green",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  modalView: {
    borderColor: "grey",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
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
    borderRadius: RFValue(3),
    overflow: "hidden",
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "grey",
  },
});
