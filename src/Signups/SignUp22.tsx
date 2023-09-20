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
  Platform,
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import KeyBoardHandle from '../Components/KeyboardHandle';
// import { CheckBox } from '@rneui/themed';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
// import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/core';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  RoundedCheckbox,
  PureRoundedCheckbox,
} from 'react-native-rounded-checkbox';
import {AlignJustify} from 'react-native-feather';
import LinearGradient from 'react-native-linear-gradient';
import Checkbox from '../Components/CheckBox';
import {SvgXml} from 'react-native-svg';
import {backward, preformly} from '../../assets/svg';
// import Icon from 'react-native-dynamic-vector-icons';

const SignUp22 = () => {
  //   const [height, setHeight] = useState<any>('');
  //   const [age, setAge] = useState<any>('');
  //   const [weight, setWeight] = useState<any>('');
  //   const [selectedIndex, setIndex] = useState(0);

  //   const [passowrd, setPassword] = useState<any>('');
  //   const [show,setShow]=useState(true)
  //    const [show1,setShow1]=useState(true)
  const [confirmPassword, setConfirmPassowrd] = useState<any>('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();
  // var radio_props = [
  //   {value: 0},
  //   //   {label: 'female', value: 1},
  //   //   {label: 'other', value: 2},
  // ];
  return (
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
          fontFamily: 'Modak_regular',
          color: '#1B1561',
          fontWeight: '400',
          fontSize: 30,
          marginTop: Platform.OS === 'ios' ? 20 : 0,
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
            width: getWidth(11),
          }}>
          <SvgXml xml={backward} width={getWidth(10)} height={getHeight(2)} />
          {/* <Image
            style={{
              resizeMode: 'contain',
              width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              height: getHeight(2),
            }}
            source={require('../../assets/images/back.png')}
          /> */}
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
              fontFamily: 'Anek_Bangla_medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            CREATE PROFILE
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
          height: getHeight(6),
          width: getWidth(80),
          borderColor: 'red',
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
            textAlign: 'center',
            letterSpacing: 2,
          }}>
          WHAT DO YOU DO/PRACTICE?
        </Text>
      </View>
      <ScrollView
        style={{
          width: getWidth(97),
          // borderWidth:1,
          // paddingLeft: 10,
        }}>
        <View
          style={{
            paddingVertical: 10,
            height: getHeight(60),
            width: getWidth(97),
            // borderColor: 'red',
            // borderWidth: 1,
            // paddingLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
          shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
          shadowOpacity: 1, // Adjust the shadow opacity as needed
          shadowRadius: 10, // Adjust the shadow radius as needed
          elevation: Platform.OS === 'android' ? 0 : 5,

            // marginTop:10
          }}>
          {/* <TouchableOpacity
          // onPress={() => navigation.navigate('SignUp25')}
          > */}
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Soccer
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          {/* </TouchableOpacity> */}
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked1}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Baseball
            </Text>
            <PureRoundedCheckbox
              // text=""
              isChecked={checked}
              checkedColor="#1B1561"
              // uncheckedColor={uncheckedColor}
              outerStyle={{borderColor: 'white'}}
              onPress={() => setChecked(true)}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(5),
                  // borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(2),
                }}
                source={require('../../assets/images/tick.png')}
              />
            </PureRoundedCheckbox>
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              // backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 10,
            }}
            colors={['#FDFFF4', '#BBC1AD']}
            start={{x: 0, y: 0}}
            end={{x: 0.8, y: 0}}
            // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            // locations={{x:0,y:0.5,z:0.6}}
            // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Hockey
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </LinearGradient>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            height: getHeight(10),
            justifyContent: 'flex-end',
            // backgroundColor: 'white',
            // borderWidth:1,
            width: getWidth(99),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp23')}
            style={{
              height: 55,
              margin: 12,
              borderWidth: 1,
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
                fontFamily: 'Anek_Bangla_medium',
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              N e x t
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: '#1B1561',
  },
});
export default SignUp22;
