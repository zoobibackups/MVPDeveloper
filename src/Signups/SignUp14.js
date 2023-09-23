import React, { useState } from 'react';

import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import KeyBoardHandle from '../Components/KeyboardHandle';
import { getHeight, getWidth } from '../functions/CommonFunctions';


import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { backward, preformly } from '../../assets/svg';

const SignUp14 = () => {
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
              <SvgXml
                xml={backward}
                width={getWidth(10)}
                height={getHeight(2)}
              />
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
                letterSpacing: 2,
              }}>
              GOAL WEIGHT
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
                letterSpacing: 2,
              }}>
              Goal Weight:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setWeight(text)}
              value={weight}
              placeholder="Enter your goal weight"
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
              T i m e :
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setTime(text)}
              value={time}
              placeholder="I want to reach my goal in..."
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />
            <View style={{paddingTop: 25}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  fontFamily: 'AnekBangla-Light',
                  textAlign: 'center',
                }}>
                To lose weight in a healthy and sustainable way, it is
                recommended that you try to lose 0.5-1 kg per week through a
                combination of healthy diet and exercise. This means that you
                need to create a caloric deficit of around 500-1000 calories per
                day by eating a healthy and balanced low-calorie diet and
                increasing your physical activity.
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

            <View
              style={{
                alignItems: 'center',
                borderColor: 'red',
                height: getHeight(15),
                justifyContent: 'flex-end',
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
                  }}>
                  N e x t
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // onRequestClose={() => {
            //   Alert.alert('Modal has been closed.');
            //   setModalVisible(!modalVisible);
            // }}
          >
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.centeredView}>
                <LinearGradient
                  style={styles.modalView}
                  colors={['#FDFFF4', '#BBC1AD']}
                  start={{x: 0, y: 0}}
                  end={{x: 0.8, y: 0}}
                  // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                  // locations={{x:0,y:0.5,z:0.6}}
                  // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                >
                  {/* <View style={styles.modalView}> */}
                  <View style={{borderColor: 'red', paddingTop: 7}}>
                    <Text style={styles.topBar} />
                  </View>
                  <View
                    style={{
                      borderColor: 'red',
                      paddingTop: 15,
                      // borderWidth: 1,
                      width: getWidth(90),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#1B1561',
                        fontSize: 25,
                        fontWeight: '700',
                        fontFamily: 'AnekBangla-Medium',
                      }}>
                      D I S C L A I M E R:
                    </Text>
                  </View>
                  <View
                    style={{
                      borderColor: 'red',
                      paddingTop: 3,
                      // borderWidth: 1,
                      width: getWidth(79),
                      // width:'70%',
                      height: getHeight(45),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: 'AnekBangla-Light',
                        textAlign: 'center',
                      }}>
                      The following information is provided for general purposes
                      only and should not be considered a substitute for
                      professional medical advice or guidance. Extreme weight
                      loss goals can be dangerous and may pose serious health
                      risks. It is important to approach weight loss with
                      realistic expectations and consult with a healthcare
                      professional or registered dietitian before embarking on
                      any weight loss program. We do not endorse or take
                      responsibility for any extreme weight loss goals or the
                      potential adverse effects that may arise from pursuing
                      such goals. Individual results may vary, and it is crucial
                      to prioritize overall health and well-being when
                      considering weight loss. Please seek qualified medical
                      advice to determine the most appropriate approach for your
                      specific circumstances.
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      borderColor: 'red',
                      // borderWidth:1,
                      height: getHeight(11),
                      paddingTop: 10,
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(false), navigation.navigate('SignUp6');
                      }}
                      style={{
                        height: 55,
                        margin: 12,
                        // borderWidth: 1,
                        padding: 14,
                        borderRadius: 20,
                        borderColor: '#1B1561',
                        backgroundColor: '#1B1561',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: getWidth(45),
                      }}>
                      <Text
                        style={{
                          fontFamily: 'AnekBangla-Medium',
                          color: 'white',
                          fontWeight: '500',
                          fontSize: 18,
                        }}>
                        O k
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
                </LinearGradient>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
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
    // borderWidth:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // opacity:0.1,
    // height: getHeight(90),
    height: '100%',
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    borderColor: 'grey',
    // borderTopWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    // shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(65),
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
    // borderWidth:1,
    marginLeft: 0,
    bottom: 0,
    top: 10,
  },
  topBar: {
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 65,
    // borderWidth: 2,
    borderColor: 'grey',

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: 'grey',
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
export default SignUp14;
