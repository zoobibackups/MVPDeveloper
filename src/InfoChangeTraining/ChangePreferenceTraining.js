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
import { SvgXml } from 'react-native-svg';
import { backward, preformly } from '../../assets/svg';
// import Icon from 'react-native-dynamic-vector-icons';

const ChangePreferenceTraining = () => {
  //   const [height, setHeight] = useState('');
  //   const [age, setAge] = useState('');
  //   const [weight, setWeight] = useState('');
  //   const [selectedIndex, setIndex] = useState(0);

  //   const [passowrd, setPassword] = useState('');
  //   const [show,setShow]=useState(true)
  //    const [show1,setShow1]=useState(true)
  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
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
          {/* <Image
            style={{
              resizeMode: 'contain',
              width: getWidth(9),
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
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
            }}>
            C R E A T E P R O F I L E
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
          What would you like to change?
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          height: getHeight(50),
          width: getWidth(97),
          borderColor: 'red',
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
          shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
          shadowOpacity: 1, // Adjust the shadow opacity as needed
          shadowRadius: 10, // Adjust the shadow radius as needed
          elevation: Platform.OS === 'android' ? 0 : 5,
        }}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 35,
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
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
                letterSpacing: 2,
              }}>
              How often you work out
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

        <TouchableOpacity onPress={() => setChecked1(!checked1)}>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 32,
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
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
                letterSpacing: 2,
              }}>
              Where you want to work out
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

        <TouchableOpacity onPress={() => setChecked2(!checked2)}>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 32,
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
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
                letterSpacing: 1,
              }}>
              For how long do you work out
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

        <TouchableOpacity onPress={() => setChecked3(!checked3)}>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 32,
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
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
                letterSpacing: 2,
              }}>
              Preferred workouts
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

        <TouchableOpacity onPress={() => setChecked4(!checked4)}>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(7),
              borderColor: '#F5F5F5',
              backgroundColor: 'white',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              elevation: 32,
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
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 17,
                letterSpacing: 2,
              }}>
              Workouts you want to avoid
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
      </View>
      <View
        style={{
          alignItems: 'center',
          borderColor: 'red',
          height: getHeight(15),
          justifyContent: 'flex-end',
          // backgroundColor: 'white',
          width: getWidth(99),
        }}>
        <TouchableOpacity
          //   onPress={() => navigation.navigate('ChangeGoal')}
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
              fontFamily: 'AnekBangla-Medium',
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
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
export default ChangePreferenceTraining;
