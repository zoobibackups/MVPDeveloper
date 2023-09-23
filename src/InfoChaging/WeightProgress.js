import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Platform,
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import KeyBoardHandle from '../Components/KeyboardHandle';
import {Button, CheckBox} from '@rneui/themed';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { backward, preformly } from '../../assets/svg';

const WeightProgress = () => {
  const navigation = useNavigation();
  var radio_props = [
    {label: 'male', value: 0},
    {label: 'female', value: 1},
    {label: 'other', value: 2},
  ];

  const [time, setTime] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  //   const [selectedIndex, setIndex] = useState(0);
  //   const [state, setState] = useState(false);
  //   //   const [passowrd, setPassword] = useState('');
  //   //   const [show,setShow]=useState(true)
  //   //    const [show1,setShow1]=useState(true)
  //   const [confirmPassword, setConfirmPassowrd] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <KeyBoardHandle>
        <LinearGradient
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            borderColor: 'red',
            height: '100%',
            // backgroundColor: 'white',
            // borderWidth:10
          }}
          colors={['#FDFFF4', '#BBC1AD']}
          start={{x: 0, y: 0}}
          end={{x: 0.8, y: 0}}
          // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          // locations={{x:0,y:0.5,z:0.6}}
          // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
        >

<SvgXml
        width={getWidth(45)}
        height={getHeight(5)}
        xml={preformly}
        style={{marginTop: Platform.OS === 'ios' ? 20 : 0}}
      />
          {/* <Text
            style={{
              fontFamily: 'Modak-Regular',
              color: '#1B1561',
              fontWeight: '400',
              fontSize: 30,
            }}>
            Preformly
          </Text> */}
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              borderColor: 'red',
              width: getWidth(90),
              height: getHeight(5),
              // justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 40,
                justifyContent: 'center',
                width: getWidth(10),
              }}>
                <SvgXml height={getHeight(2)} width={getWidth(10)} xml={backward}/>
              
            </TouchableOpacity>
            <View
              style={{
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(70),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 18,
                  letterSpacing: 2,
                }}>
                PROGRESS
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 10,
              height: getHeight(10),
              borderColor: 'red',
              //   borderWidth: 1,
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                letterSpacing: 2,
              }}>
              Your progress pictures
            </Text>
          </View>

          <View
            style={{
              width: getWidth(70),
              height: getHeight(70),
              justifyContent:'space-evenly',
              // borderWidth: 1,
            }}>
            <View
              style={{
                width: getWidth(70),
                height: getHeight(20),
                // borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: getWidth(35),
                  height: getHeight(20),
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                    letterSpacing: 2,
                  }}>
                  67 kg
                </Text>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: getWidth(25),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(15),
                  }}
                  source={require('../../assets/images/weights.png')}
                />
                {/* <View
                style={{
                  width: getWidth(30),
                  height: getHeight(16),
                  borderWidth: 1,
                }}>

                </View> */}
              </View>
              <View
                style={{
                  width: getWidth(35),
                  height: getHeight(20),
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                    letterSpacing: 2,
                  }}>
                  67 kg
                </Text>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: getWidth(25),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(15),
                  }}
                  source={require('../../assets/images/weights.png')}
                />
                {/* <View
                style={{
                  width: getWidth(30),
                  height: getHeight(16),
                  borderWidth: 1,
                }}>

                </View> */}
              </View>
            </View>
            <View
              style={{
                width: getWidth(70),
                height: getHeight(20),
                // borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: getWidth(35),
                  height: getHeight(20),
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                    letterSpacing: 2,
                  }}>
                  67 kg
                </Text>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: getWidth(25),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(15),
                  }}
                  source={require('../../assets/images/weights.png')}
                />
                {/* <View
                style={{
                  width: getWidth(30),
                  height: getHeight(16),
                  borderWidth: 1,
                }}>

                </View> */}
              </View>
              <View
                style={{
                  width: getWidth(35),
                  height: getHeight(20),
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                    letterSpacing: 2,
                  }}>
                  67 kg
                </Text>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: getWidth(25),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(15),
                  }}
                  source={require('../../assets/images/weights.png')}
                />
                {/* <View
                style={{
                  width: getWidth(30),
                  height: getHeight(16),
                  borderWidth: 1,
                }}>

                </View> */}
              </View>
            </View>
            <View
              style={{
                width: getWidth(70),
                height: getHeight(20),
                // borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: getWidth(35),
                  height: getHeight(20),
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                    letterSpacing: 2,
                  }}>
                  67 kg
                </Text>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: getWidth(25),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(15),
                  }}
                  source={require('../../assets/images/weights.png')}
                />
                {/* <View
                style={{
                  width: getWidth(30),
                  height: getHeight(16),
                  borderWidth: 1,
                }}>

                </View> */}
              </View>
              <View
                style={{
                  width: getWidth(35),
                  height: getHeight(20),
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 16,
                    letterSpacing: 2,
                  }}>
                  67 kg
                </Text>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: getWidth(25),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(15),
                  }}
                  source={require('../../assets/images/weights.png')}
                />
                {/* <View
                style={{
                  width: getWidth(30),
                  height: getHeight(16),
                  borderWidth: 1,
                }}>

                </View> */}
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              height: getHeight(11),
              justifyContent: 'flex-end',
              // borderWidth:1
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                height: 55,
                margin: 12,
                //   borderWidth: 1,
                padding: 14,
                borderRadius: 20,
                borderColor: '#1B1561',
                backgroundColor: '#1B1561',
                alignItems: 'center',
                justifyContent: 'center',
                width: getWidth(65),
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 18,
                  letterSpacing: 2,
                }}>
                N e x t
              </Text>
            </TouchableOpacity>
          </View>
          {/* </View>  */}
        </LinearGradient>
      </KeyBoardHandle>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    height: getHeight(91),
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderColor: 'blue',
    // borderWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '900',
  },
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: '#1B1561',
    color: 'grey',
  },
  modal: {
    justifyContent: 'flex-end',

    marginLeft: 0,
    bottom: 0,
    top: 10,
  },
  topBar: {
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 65,
    // borderWidth: 2,
    borderColor: '#D3D3D3',

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: '#D3D3D3',
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
export default WeightProgress;
