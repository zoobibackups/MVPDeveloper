import { useNavigation } from "@react-navigation/core";
import { Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  FlatList,
  Image,Linking,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SelectDropdown from "react-native-select-dropdown";
import { moderateScale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";
import { mail, message } from "../../assets/svg";
import CheckboxSquare from "../Components/CheckBoxSquare";
import RowHeader from "../Components/RowHeader";
import fonts from "../constants/fonts";
import theme from "../constants/theme";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
import Modal from "react-native-modal"
import { useSelector } from "react-redux";
const data = [
  {
    name: "Pasta",
    isSelected: true,
  },
  {
    name: "Permesan",
    isSelected: false,
  },
  {
    name: "Heavy Cream",
    isSelected: false,
  },
  {
    name: "Musrooms",
    isSelected: false,
  },
  {
    name: "White vine",
    isSelected: false,
  },
  {
    name: "Burrata cheese",
    isSelected: false,
  },
];
const List1 = ({navigation, route}) => {
  const {user} = useSelector(state => state.userReducer)
  console.log(user);
  const {groceryList} = route.params
  const [ingredientsArray, setIngredients] =  useState(groceryList.map((ingredient, index) => ({
    item: ingredient,
    isSelected: true,
    index:index
  })))
  const countries = ["Daily", "Weekly"];
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSelection = (index) => {
    const updatedIngredients = [...ingredientsArray];
    updatedIngredients[index].isSelected = !updatedIngredients[index].isSelected;
    setIngredients(updatedIngredients);
  };
  const sendEmail = () => {
    const ingredientsList = ingredientsArray.map(ingredient => ingredient.item).join('\n');
    const emailSubject = 'Ingredients List';
    
    Linking.openURL(`mailto:${user.email}?subject=${emailSubject}&body=${ingredientsList}`).catch((err) => {
      console.log(err);
    })
  };

  const sendSMS = () => {
    const ingredientsList = ingredientsArray.map(ingredient => ingredient.item).join('\n');
    
    Linking.openURL(`sms:&body=${ingredientsList}`).catch((err) => {
      console.log(err);
    })
  };
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        borderColor: "red",
        height: "100%",
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <RowHeader
        style={{
          marginVertical: moderateScale(25),
        }}
        onPress={() => navigation.goBack()}
        title={"GROCERY LIST"}
      />

      <View style={styles.innerView}>
        <View style={styles.rowView}>
          <Text
            style={{
              fontFamily:fonts.AnekBanglaRegular,
              color: "black",
              fontWeight: "400",
              fontSize: 18,
            }}
          >
            All items:
          </Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
            
            }}
            defaultButtonText={"Weakly"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <Image
                  style={{
                    resizeMode: "contain",
                    borderColor: "red",
                    height: getHeight(2),
                  }}
                  source={require("../../assets/images/down.png")}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <FlatList
          data={ingredientsArray}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.checkBoxRowStyle}>
                <Text
                  style={{
                    fontFamily: fonts.AnekBanglaRegular,
                    color: "grey",
                    fontWeight: "400",
                    fontSize: 16,
                  }}
                >
                  {item.item}
                </Text>
                <CheckboxSquare
                  isChecked={item.isSelected}
                  onPress={() => {
                    toggleSelection(index)
                  }}
                />
              </View>
            );
          }}
        />
      </View>

      <View>
        <TouchableOpacity
          style={{
            ...globalstyles.buttonStyle,
            marginBottom: moderateScale(15),
            width: getWidth(84),
          }}
        >
          <Text style={globalstyles.buttonText}>Add to list</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            ...globalstyles.buttonStyle,
            width: getWidth(84),
            borderWidth: 1,
            borderColor: "#1B1561",
            backgroundColor: "transparent",
          }}
        >
          <Text style={{ ...globalstyles.buttonText, color: theme.blueColor }}>
            Send me my list
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" style={{margin:0}} transparent={true} isVisible={modalVisible}>
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
              <View style={{ borderColor: "red", paddingTop: 5 }}>
                <View style={styles.topBar} />
              </View>

              <Text style={styles.ChooseContactMethos}>
                Choose Contact Method
              </Text>

              <View
                style={{
                  width: getWidth(96),
                  height: getHeight(20),
                  justifyContent: "space-between",
                  paddingHorizontal: 38,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => sendEmail()} >
                  <View style={styles.ImgSvg}>
                    <SvgXml width={getWidth(20)} xml={mail} />
                  </View>
                  <Text style={styles.ImgSvgText}>Email me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendSMS()} >
                  <View style={styles.ImgSvg}>
                    <SvgXml width={getWidth(20)} xml={message} />
                  </View>
                  <Text style={styles.ImgSvgText}>Message me</Text>
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
  innerView: {
    alignItems: "center",
    paddingVertical: 5,
    borderWidth: 1,
    backgroundColor: "transparent",
    shadowColor: "rgba(103, 128, 159)",
    borderColor: "grey",
    borderRadius: 20,
    height: getHeight(52),
    width: getWidth(85),
    marginBottom: moderateScale(15),
  },
  rowView: {
    flexDirection: "row",
    height: getHeight(5),
    width: getWidth(80),
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dropdown1BtnStyle: {
    width: getWidth(28),
    height: getHeight(4),
    backgroundColor: "transparent",
    shadowColor: "rgba(103, 128, 159)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
  },
  dropdown1BtnTxtStyle: {
    fontFamily: fonts.AnekBanglaMedium,
    color: "black",
    fontWeight: "400",
    fontSize: 14,
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF", borderRadius: 10 },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "#444",
    fontFamily: fonts.AnekBanglaMedium,
    includeFontPadding: false,
   
    textAlign: "left",
  },
  checkBoxRowStyle: {
    flexDirection: "row",
    marginTop: 5,
    height: getHeight(6),
    width: getWidth(80),
    borderBottomWidth: 1,
    borderColor: "grey",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  topBar: {
    borderRadius: 35,
    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  ChooseContactMethos: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "400",
    fontSize: 17,
    textAlign: "center",
    letterSpacing: 2,
    marginVertical: moderateScale(10),
    marginBottom: 0,
  },
  ImgSvg: {
    borderWidth: 1,
    height: getWidth(25),
    width: getWidth(25),
    borderRadius: 20,
    backgroundColor: "#1B1561",
    justifyContent: "center",
    alignItems: "center",
  },
  ImgSvgText: {
    fontFamily: "AnekBangla-Medium",
    color: "black",
    fontWeight: "400",
    fontSize: 14,

    textAlign: "center",
    letterSpacing: 1,
  },
  centeredView: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: "green",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // justifyContent: 'flex-end',
    height: getHeight(34),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,
    // elevation:10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default List1;
