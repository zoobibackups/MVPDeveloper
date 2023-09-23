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
import {SvgXml} from 'react-native-svg';
import {backward, preformly} from '../../assets/svg';

const SignUp28 = () => {
  const navigation = useNavigation();
  var radio_props = [
    {label: 'male', value: 0},
    {label: 'female', value: 1},
    {label: 'other', value: 2},
  ];

  const [time, setTime] = useState<any>('');
  const [age, setAge] = useState<any>('');
  const [weight, setWeight] = useState<any>('');
  //   const [selectedIndex, setIndex] = useState(0);
  //   const [state, setState] = useState(false);
  //   //   const [passowrd, setPassword] = useState<any>('');
  //   //   const [show,setShow]=useState(true)
  //   //    const [show1,setShow1]=useState(true)
  //   const [confirmPassword, setConfirmPassowrd] = useState<any>('');
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
              height: getHeight(11),
              width: getWidth(80),
              borderColor: 'red',
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 18,
                textAlign: 'center',
              }}>
              TELL US WHAT EQUIPMENT YOU POSSES
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
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                letterSpacing: 2,
              }}>
              Equipment:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setWeight(text)}
              value={weight}
              placeholder="Dumbells, Kettelbells......."
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />

            <View style={{paddingTop: 25, width: getWidth(90), marginLeft: 5}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  fontFamily: 'Anek_Bangla_light',
                  textAlign: 'left',
                  letterSpacing: 2,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   textAlign: 'left',
                  }}>
                  BE ADVISED:
                </Text>{' '}
                to make sure that the exercises you currently posses is
                registered you have to input them correctly. Separate each one
                with a comma “,”
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
                height: getHeight(35),
                justifyContent: 'flex-end',
                // borderWidth:1
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp29')}
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
                    fontFamily: 'Anek_Bangla_medium',
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
                <View style={styles.modalView}>
                  <View style={{borderColor: 'red', paddingTop: 5}}>
                    <Text style={styles.topBar} />
                  </View>
                  <View
                    style={{
                      borderColor: 'red',
                      paddingTop: 5,
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
                        fontFamily: 'Anek_Bangla_medium',
                      }}>
                      D I S C L A I M E R:
                    </Text>
                  </View>
                  <View
                    style={{
                      borderColor: 'red',
                      paddingTop: 3,
                      // borderWidth: 1,
                      width: getWidth(90),
                      height: getHeight(37),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: 'Anek_Bangla_light',
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
                      height: getHeight(8),
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SignUp6')}
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
                        width: getWidth(45),
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Anek_Bangla_medium',
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
                </View>
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
    height: getHeight(90),
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
    justifyContent: 'flex-end',
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
export default SignUp28;