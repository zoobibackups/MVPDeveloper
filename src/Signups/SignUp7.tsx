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
import LinearGradient from 'react-native-linear-gradient';
import Checkbox from '../Components/CheckBox';
import {SvgXml} from 'react-native-svg';
import {backward, preformly} from '../../assets/svg';
// import Icon from 'react-native-dynamic-vector-icons';

const SignUp7 = () => {
  const [height, setHeight] = useState<any>('');
  const [age, setAge] = useState<any>('');
  const [weight, setWeight] = useState<any>('');
  const [selectedIndex, setIndex] = useState(0);

  //   const [passowrd, setPassword] = useState<any>('');
  //   const [show,setShow]=useState(true)
  //    const [show1,setShow1]=useState(true)
  const [confirmPassword, setConfirmPassowrd] = useState<any>('');
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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();
  // var radio_props = [
  //   {value: 0},
  //   //   {label: 'female', value: 1},
  //   //   {label: 'other', value: 2},
  // ];
  return (
    <ScrollView>
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
              Create Profile
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            height: getHeight(10),
            borderColor: 'red',
            //   borderWidth: 1,
            width: getWidth(90),
          }}>
          <Text
            style={{
              fontFamily: 'Anek_Bangla_medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 19,
              textAlign: 'center',
              letterSpacing: 2,
            }}>
            Tell Us About Your Favourite
          </Text>
          <Text
            style={{
              fontFamily: 'Anek_Bangla_medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 19,
              textAlign: 'center',
              letterSpacing: 2,
            }}>
            CUISINES
          </Text>
        </View>
        {/* <ScrollView
        style={{
          width: getWidth(97),
          height: getHeight(100),
          backgroundColor: 'transparent',
        }}> */}
        <View
          style={{
            // paddingVertical: 30,
            // height: getHeight(60),
            width: getWidth(97),
            borderColor: 'red',
            // borderWidth: 1,
            alignItems: 'center',
            // justifyContent: 'space-evenly',
            shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
            shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
            shadowOpacity: 1, // Adjust the shadow opacity as needed
            shadowRadius: 10, // Adjust the shadow radius as needed
            elevation: Platform.OS === 'android' ? 0 : 5,
          }}>
          <TouchableOpacity
            onPress={() => setChecked(!checked)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,
                // paddingVertical: 30,
                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Italian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked1(!checked1)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                French Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked1}
                onPress={() => {
                  setChecked1(!checked1);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked2(!checked2)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Japanese Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked2}
                onPress={() => {
                  setChecked2(!checked2);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked3(!checked3)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Chinese Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked3}
                onPress={() => {
                  setChecked3(!checked3);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked4(!checked4)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Mexican Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked4}
                onPress={() => {
                  setChecked4(!checked4);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked5(!checked5)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Indian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked5}
                onPress={() => {
                  setChecked5(!checked5);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked6(!checked6)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Thai Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked6}
                onPress={() => {
                  setChecked6(!checked6);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked7(!checked7)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Greek Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked7}
                onPress={() => {
                  setChecked7(!checked7);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked8(!checked8)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Spanish Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked8}
                onPress={() => {
                  setChecked8(!checked8);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked9(!checked9)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Labenese Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked9}
                onPress={() => {
                  setChecked9(!checked9);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked10(!checked10)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Korean Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked10}
                onPress={() => {
                  setChecked10(!checked10);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked11(!checked11)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Vietnamese Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked11}
                onPress={() => {
                  setChecked11(!checked11);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked12(!checked12)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Moroccan Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked12}
                onPress={() => {
                  setChecked12(!checked12);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked13(!checked13)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Ethiopian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked13}
                onPress={() => {
                  setChecked13(!checked13);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked14(!checked14)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Brazilian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked14}
                onPress={() => {
                  setChecked13(!checked14);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked15(!checked15)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Turkish Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked15}
                onPress={() => {
                  setChecked15(!checked15);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked16(!checked16)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Russian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked16}
                onPress={() => {
                  setChecked16(!checked16);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked17(!checked17)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Indonesian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked17}
                onPress={() => {
                  setChecked17(!checked17);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked18(!checked18)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Jamaican Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked18}
                onPress={() => {
                  setChecked18(!checked18);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChecked19(!checked19)}
            style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(7),
                borderColor: '#F5F5F5',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 75,
                overflow: 'hidden',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Peruvian Cuisine
              </Text>
              <Checkbox
                // text="Blue"
                isChecked={checked19}
                onPress={() => {
                  setChecked19(!checked19);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            height: getHeight(13),
            // marginTop:20,
            // borderWidth: 1,
            justifyContent: 'flex-end',
            // flexDirection:'column',
            backgroundColor: 'transparent',
            width: getWidth(99),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp8')}
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
                letterSpacing: 2,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </LinearGradient>
    </ScrollView>
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
export default SignUp7;
