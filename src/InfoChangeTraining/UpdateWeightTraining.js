import React, { useEffect, useState } from "react";

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import HeaderMainScreen from "../Components/HeaderMainScreen";
import KeyBoardHandle from "../Components/KeyboardHandle";
import { getHeight, getWidth } from "../functions/CommonFunctions";
import { globalstyles } from "../styles/globalestyles";
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import fonts from "../constants/fonts";
import { useLazyUploadCategoryImageQuery } from "../store/services/categoryApi";
import { useDispatch } from "react-redux";
import { addUserWeight } from "../store/actions/userWeightActions";
const UpdateWeightTraining = () => {
  const [uploadCategoryImage, data] = useLazyUploadCategoryImageQuery()
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [weight, setWeight] = useState(null);
  const [image, setImage] = useState(null)
  useEffect(() => {
    if(data.isSuccess){
      console.log(data.data.secure_url);
      setImage(data.data.secure_url)
    }
  },[data])
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      //setImage(image);
      uploadImage(image)
    }).catch(err => {
      console.log(err);
    })
  }

  const openGalley = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
     // setImage(image);
      uploadImage(image)
    }).catch(err => {
      console.log(err);
    })
  }

  const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('submit', 'submit');
    const uriPart = image.sourceURL.split('.');
    const fileExtension = uriPart[uriPart.length - 1];
    formData.append('file', {
      uri: image.sourceURL,
      name: `${fileExtension}`,
      type: image.mime,
    });
    uploadCategoryImage({data:formData})
  }
  return (
    <>
      <KeyBoardHandle>
        <LinearGradient
          style={{
            alignItems: "center",
            paddingVertical: 30,
            borderColor: "red",
            height: "100%",
            // backgroundColor: 'white',
            // borderWidth:10
          }}
          colors={["#FDFFF4", "#BBC1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0 }}
        >
          <HeaderMainScreen
            onPress={() => navigation.goBack()}
            title={"CHANGE  PROFILE"}
            subTitle={"Update my weight"}
            subTitleStyle={{
              textAlign: "center",
              alignSelf: "center",
            }}
          />

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(65),
              width: getWidth(90),
              borderColor: "red",
              //   borderWidth: 1,
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: "AnekBangla-Medium",
                color: "black",
                fontWeight: "400",
                letterSpacing: 2,
              }}
            >
              New Weight:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setWeight(text)}
              value={weight}
              placeholder="Enter your goal weight"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />

            <View
              style={{
                alignItems: "center",
               // borderColor: "red",
                height: getHeight(33),
                justifyContent: "flex-end",
                
                // borderWidth:1
              }}
            >
              {image != null && <Image source={{uri:image}} style={{width:getHeight(15),marginBottom:getWidth(2), height:getHeight(15)}} /> }
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("Pick Image", "Open camera of gallery",[
                    {
                      text:"Camera",
                      onPress:() => openCamera()
                    },
                    {
                      text:"Gallery",
                      onPress:() => openGalley()
                    },
                    {
                      text:"Cancel",
                      onPress:() => {}
                    },
                  ])
                }}
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>{data.isLoading ? "Uploading":"Add Pictures"}</Text>
              </TouchableOpacity>
              <View style={{ paddingTop: getWidth(2), width: getWidth(80) }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    fontFamily: fonts.AnekBanglaSemiBold,
                    lineHeight: 16 * 1.5,
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Add a picture of yourself to track your weight journey and
                  keep the motivation high.
                </Text>
              </View>
            </View>
          {weight !== null&& image !=null &&
            <View
              style={{
                alignItems: "center",
                borderColor: "red",
                height: getHeight(17),
                justifyContent: "flex-end",
                // borderWidth:1
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  dispatch(addUserWeight({weight:weight, image:image})).then(()=> {
                    setWeight(null)
                    setImage(null)
                    navigation.navigate("WeightProgress")
                  })
                }}
               
                style={globalstyles.buttonStyle}
              >
                <Text style={globalstyles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View> }
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
export default UpdateWeightTraining;
