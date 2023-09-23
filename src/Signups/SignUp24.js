import React, { useState } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { getHeight, getWidth } from '../functions/CommonFunctions';
// import { CheckBox } from '@rneui/themed';

// import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/core';

import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { backward, preformly } from '../../assets/svg';
// import Icon from 'react-native-dynamic-vector-icons';

const SignUp24 = () => {
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
              fontFamily: 'AnekBangla-Medium',
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
          height: getHeight(7),
          width: getWidth(98),
          borderColor: 'red',
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: '#1B1561',
            fontWeight: '700',
            fontSize: 18,
            textAlign: 'center',
            letterSpacing: 2,
          }}>
          GREAT! YOU ARE ALMOST DONE.
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          height: getHeight(25),
          width: getWidth(95),
          marginTop: 10,
          borderColor: 'red',
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'grey',
            fontWeight: '400',
            fontSize: 14,
            textAlign: 'center',
            letterSpacing: 2,
          }}>
          DO YOU CHOOSE TO TRUST THAT WE WILL CREATE AN ASTONISHING SCHEDULE FOR
          YOU OR WOULD YOU RATHER DIVE INTO DETAILS AND CONTINUE CUSTOMIZING?
          (AROUND 5 MORE MINUTES)
        </Text>
      </View>

      <View
        style={{
          //   paddingVertical: 10,
          height: getHeight(28),
          paddingTop: 10,
          width: getWidth(97),
          borderColor: 'red',
          //   borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          //   onPress={() => navigation.navigate('SignUp22')}
          style={{
            height: 55,
            margin: 12,
            borderWidth: 1,
            padding: 14,
            borderRadius: 20,
            borderColor: '#1B1561',
            backgroundColor: '#1B1561',
            alignItems: 'center',
            width: getWidth(80),
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Trust us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp26')}
          style={{
            height: 55,
            margin: 12,
            borderWidth: 1,
            padding: 14,
            borderRadius: 20,
            borderColor: '#1B1561',
            // backgroundColor: 'white',
            alignItems: 'center',

            width: getWidth(80),
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: '#1B1561',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Continue 5 more mins
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
export default SignUp24;
