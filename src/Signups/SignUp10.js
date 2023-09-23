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

import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { backward, preformly } from '../../assets/svg';
import CheckboxSquare from '../Components/CheckBoxSquare';

const SignUp10 = () => {
  const navigation = useNavigation();

  const [ingredients, setIngredients] = useState('');
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState('');
  const [meal, setMeal] = useState('');
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
              marginTop: Platform.OS === 'ios' ? 20 : 0,
            }}>
            Preformly
          </Text> */}
          <View
            style={{
              flexDirection: 'row',
              //   borderWidth: 1,
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
              <SvgXml
                xml={backward}
                width={getWidth(10)}
                height={getHeight(2)}
              />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
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
              //   paddingVertical: 10,
              height: getHeight(7),
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
              TELL US ABOUT YOUR SCHEDULE:
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('WhySchedule')}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 18,
                  textDecorationLine: 'underline',
                  textAlign: 'center',
                }}>
                Why?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingVertical: 15,
              height: getHeight(63),
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
              When do you have breakfast?
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setIngredients(text)}
              value={ingredients}
              placeholder="Input here........"
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
              When do you have lunch?
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setMeal(text)}
              value={meal}
              placeholder="Input here........"
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
              When do you need a snack?
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setIngredients(text)}
              value={ingredients}
              placeholder="Input here........"
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
              When do you have dinner?
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setIngredients(text)}
              value={ingredients}
              placeholder="Input here........"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />
            <View
              style={{
                width: getWidth(90),
                borderRadius: 20,

                height: getHeight(6),
                borderColor: 'red',
                // backgroundColor: 'white',
                // borderWidth: 1,
                // justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckboxSquare
                // text="Blue"
                isChecked={checked}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Light',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                I don’t have anything to avoid
              </Text>
            </View>
            <View
              style={{
                paddingTop: 5,
                borderColor: 'red',
                // borderWidth: 1,
                width: getWidth(90),
                height: getHeight(10),
                paddingLeft: 5,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  fontFamily: 'AnekBangla-Light',
                  textAlign: 'left',
                  color: 'black',
                }}>
                You will get a reminder from us when it is time to eat, and what
                you should eat to be able to achive your goals.
              </Text>
            </View>

            {/*           
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
          </View> */}
          </View>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              height: getHeight(8),
              justifyContent: 'center',
              //   borderWidth: 1,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TimeInKitchen')}
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
                }}>
                N e x t
              </Text>
            </TouchableOpacity>
          </View>
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
    margin: 5,
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
export default SignUp10;
