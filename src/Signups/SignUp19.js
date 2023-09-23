import React, { useState } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import KeyBoardHandle from '../Components/KeyboardHandle';
import { getHeight, getWidth } from '../functions/CommonFunctions';

import RadioForm from 'react-native-simple-radio-button';

import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { backward, preformly } from '../../assets/svg';

const SignUp19 = () => {
  const navigation = useNavigation();
  var radio_props = [
    {label: 'male', value: 0},
    {label: 'female', value: 1},
    {label: 'other', value: 2},
  ];

  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedIndex, setIndex] = useState(0);
  const [state, setState] = useState(false);
  //   const [passowrd, setPassword] = useState('');
  //   const [show,setShow]=useState(true)
  //    const [show1,setShow1]=useState(true)
  const [confirmPassword, setConfirmPassowrd] = useState('');
  return (
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
              letterSpacing:2
            }}>
            TELL US ABOUT YOU
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 10,
            height: getHeight(65),
            width: getWidth(90),
            borderColor: 'red',
            //   borderWidth: 1,
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
            }}>
            A g e :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAge(text)}
            value={age}
            placeholder="Your Age"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
            }}>
            H e i g h t :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setHeight(text)}
            value={height}
            placeholder="Your Height"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
            }}>
            W e i g h t :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={num => setWeight(num)}
            value={weight}
            placeholder="Your Weight"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
            }}>
            G e n d e r :
          </Text>
          <View style={{borderColor: 'red', paddingLeft: 10, paddingTop: 20}}>
            <RadioForm
              radio_props={radio_props}
              initial={state}
              buttonSize={10}
              formHorizontal={true}
              labelHorizontal={true}
              buttonStyle={{marginLeft: 10}}
              style={{justifyContent: 'space-between', paddingHorizontal: 10}}
              animation={true}
              buttonColor={'#1B1561'}
              selectedButtonColor="#1B1561"
              onPress={value => {
                setState(value);
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              height: getHeight(15),
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp20')}
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
                }}>
                N e x t
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyBoardHandle>
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
    color: 'grey',
  },
});
export default SignUp19;
