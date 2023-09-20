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
// import KeyBoardHandle from '../Components/KeyboardHandle';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import KeyBoardHandle from '../Components/KeyboardHandle';
import {Button, CheckBox} from '@rneui/themed';
import {
  RoundedCheckbox,
  PureRoundedCheckbox,
} from 'react-native-rounded-checkbox';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {arrowForward, backward, preformly} from '../../assets/svg';
import {SvgXml} from 'react-native-svg';

const SignUp12 = () => {
  const navigation = useNavigation();

  const [press, setPress] = useState(false);

  const [ingredients, setIngredients] = useState<any>('');
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState<any>('');
  const [meal, setMeal] = useState<any>('');
  //   const [selectedIndex, setIndex] = useState(0);
  //   const [state, setState] = useState(false);
  //   //   const [passowrd, setPassword] = useState<any>('');
  //   //   const [show,setShow]=useState(true)
  //   //    const [show1,setShow1]=useState(true)
  //   const [confirmPassword, setConfirmPassowrd] = useState<any>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [focus, setFocus] = useState(false);
  const customstyle = focus ? styles.change : styles.noChange;
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
              //   paddingVertical: 10,
              height: getHeight(8),
              width: getWidth(70),
              borderColor: 'red',
              //   borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                textAlign: 'center',
              }}>
              GREAT JOB, YOU ARE ALL DONE! THIS IS YOUR PROFILE
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 15,
              height: getHeight(60),
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
              }}>
              Goal / Mission:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setIngredients(text)}
              value={ingredients}
              placeholder="Live healthier"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
              }}>
              Avoid:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setMeal(text)}
              value={meal}
              placeholder="Fish, Beans"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />

            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
              }}>
              Diet:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setIngredients(text)}
              value={ingredients}
              placeholder="Vegetarian"
              placeholderTextColor="grey"
              // keyboardType="numeric"
            />
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
              }}>
              Schedule:
            </Text>

            <View
              style={{
                height: 55,
                margin: 8,
                borderWidth: 1,
                paddingTop: 15,
                borderRadius: 20,
                borderColor: '#1B1561',
                justifyContent: 'center',
                // alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  height: 53,
                  // margin: 12,
                  // borderWidth: 1,
                  // padding: 10,
                  // justifyContent:'center',
                  borderRadius: 20,
                  width: getWidth(70),
                  borderColor: '#1B1561',
                  color: 'grey',
                  // textAlign:'center'
                }}>
                View Schedule
              </Text>

              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <SvgXml
                  height={getHeight(3)}
                  width={getWidth(5)}
                  xml={arrowForward}
                />
                {/* <Image
                  source={require('../../assets/images/forward.png')}
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(5),
                    height: getHeight(3),
                    // borderWidth: 1,
                    borderColor: 'red',
                  }}
                /> */}
              </TouchableOpacity>
            </View>
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
              onPress={() => navigation.navigate('Home2')}
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
        </LinearGradient>
      </KeyBoardHandle>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <KeyBoardHandle>
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
                <View style={{borderColor: 'red', paddingTop: 5}}>
                  <Text style={styles.topBar} />
                </View>
                <View
                  style={{
                    borderColor: 'grey',
                    paddingTop: 5,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(6),
                    justifyContent: 'space-between',
                    // paddingHorizontal:8,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: '400',
                      fontFamily: 'Anek_Bangla_medium',
                    }}>
                    Breakfast
                  </Text>

                  <TouchableOpacity
                    // onPress={()=>setFocus(false)}
                    style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={{
                        width: getWidth(18),
                        height: getHeight(5),
                        // paddingTop:12,
                        // borderWidth: 1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 14,
                        fontSize: 16,
                        color: 'black',
                      }}
                      placeholder="08:00"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderColor: 'grey',
                    paddingTop: 5,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(6),
                    justifyContent: 'space-between',
                    // paddingHorizontal:8,

                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: '400',
                      fontFamily: 'Anek_Bangla_medium',
                    }}>
                    Lunch
                  </Text>

                  <TouchableOpacity
                    // onPress={()=>setFocus(false)}
                    style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={{
                        width: getWidth(18),
                        height: getHeight(5),

                        // paddingTop:12,
                        // borderWidth: 1,

                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 14,
                        color: 'black',
                        fontSize: 16,
                      }}
                      placeholder="12:30"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderColor: 'grey',
                    paddingTop: 5,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(6),
                    justifyContent: 'space-between',
                    // paddingHorizontal:8,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: '400',
                      fontFamily: 'Anek_Bangla_medium',
                    }}>
                    Snack
                  </Text>
                  <TouchableOpacity
                    // onPress={()=>setFocus(false)}
                    style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={{
                        width: getWidth(18),
                        height: getHeight(5),
                        // paddingTop:12,
                        // borderWidth: 1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 14,
                        fontSize: 16,
                        color: 'black',
                      }}
                      placeholder="15:20"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderColor: 'grey',
                    paddingTop: 5,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(6),
                    justifyContent: 'space-between',
                    // paddingHorizontal:8,
                    // borderBottomWidth:1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: '400',
                      fontFamily: 'Anek_Bangla_medium',
                    }}>
                    Dinner
                  </Text>

                  <TouchableOpacity
                    // onPress={()=>setFocus(false)}
                    style={customstyle}>
                    <TextInput
                      onPressIn={() => setFocus(true)}
                      style={{
                        width: getWidth(18),
                        height: getHeight(5),
                        // paddingTop:12,
                        // borderWidth: 1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 14,
                        color: 'black',
                        fontSize: 16,
                        // fontWeight:600
                      }}
                      placeholder="19:00"
                      placeholderTextColor="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'red',
                    // borderWidth:1,
                    height: getHeight(11),
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setFocus(false), setModalVisible(false);
                    }}
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
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'red',
                    // borderWidth:1,
                    height: getHeight(8),
                    justifyContent: 'center',
                  }}></View>
              </LinearGradient>
            </View>
          </KeyBoardHandle>
        </TouchableWithoutFeedback>
      </Modal>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: getHeight(91),
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    // borderColor: 'grey',
    // borderWidth: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(37),
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
    backgroundColor: 'grey',
  },
  change: {
    width: getWidth(19),
    height: getHeight(4),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noChange: {
    width: getWidth(19),
    height: getHeight(4),
    // borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
export default SignUp12;
