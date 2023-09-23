import React, { useState } from 'react';

import {
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { getHeight, getWidth } from '../functions/CommonFunctions';
// import { CheckBox } from '@rneui/themed';

// import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/core';

import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';
import Checkbox from '../Components/CheckBox';
// import Icon from 'react-native-dynamic-vector-icons';

const ActiveWorkOut1 = () => {
  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
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
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(10),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/back.png')}
            />
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
              ACTIVE WORKOUT
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            height: getHeight(10),
            width: getWidth(90),
            borderColor: 'red',
            justifyContent: 'space-between',
            // borderWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 95,
          }}>
          <View
            style={{
              width: getWidth(12),
              //   borderWidth: 1,
              //   borderColor: 'red',
              height: getHeight(6),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#D3D3D3',
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(10),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(3),
              }}
              source={require('../../assets/images/clock.png')}
            />
          </View>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: '#1B1561',
              fontWeight: '600',
              fontSize: 30,
              letterSpacing: 2,
            }}>
            00:43
          </Text>
        </View>
        <View
          style={{
            // paddingVertical: 10,
            height: getHeight(70),
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
                height: getHeight(10),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',
                elevation: 40,
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
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(7),
                }}>
                Lose Weight {'\n'}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 17,
                  }}>
                  3 x 8-12 repetitions
                </Text>
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
                height: getHeight(10),
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
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(7),
                }}>
                Inclined dumbbells press {'\n'}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 17,
                  }}>
                  3 x 8-12 repetitions
                </Text>
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
                height: getHeight(10),
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
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(7),
                }}>
                Cable flyes {'\n'}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 17,
                  }}>
                  3 x 8-12 repetitions
                </Text>
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
                height: getHeight(10),
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
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(7),
                }}>
                Rope pushdowns {'\n'}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 17,
                  }}>
                  3 x 8-12 repetitions
                </Text>
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
                height: getHeight(10),
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
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(7),
                }}>
                Dips {'\n'}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 17,
                  }}>
                  3 x 8-12 repetitions
                </Text>
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
            onPress={() => setModalVisible(true)}
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
              End Workout
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
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
              <View style={{borderColor: 'red', paddingTop: 5}}>
                <Text style={styles.topBar} />
              </View>
              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 30,
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(18),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(50),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(20),
                  }}
                  source={require('../../assets/images/send.png')}
                />
              </View>
              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(80),
                  height: getHeight(9),
                  // justifyContent: 'space-between',
                  // paddingHorizontal: 38,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 18,
                    textAlign: 'center',
                  }}>
                  Are you sure, you want to end your workout
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  borderColor: 'red',
                  height: getHeight(10),
                  justifyContent: 'center',

                  flexDirection: 'row',
                  // borderWidth: 1,
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{
                    height: 55,
                    margin: 12,
                    padding: 14,
                    borderRadius: 20,
                    borderColor: '#1B1561',
                    // backgroundColor: 'white',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: getWidth(40),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Medium',
                      color: '#1B1561',
                      fontWeight: '500',
                      fontSize: 18,
                      letterSpacing: 2,
                    }}>
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ActiveWorkOut3')}
                  style={{
                    height: 55,
                    margin: 12,
                    padding: 14,
                    borderRadius: 20,
                    borderColor: '#1B1561',
                    backgroundColor: '#1B1561',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: getWidth(40),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Medium',
                      color: 'white',
                      fontWeight: '500',
                      fontSize: 18,
                      letterSpacing: 2,
                    }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    //   width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: getWidth(28),
    height: getHeight(4),
    backgroundColor: 'white',
    // borderWidth: 1,
    shadowColor: 'rgba(103, 128, 159)',

    elevation: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
  },
  dropdown1BtnTxtStyle: {
    fontFamily: 'AnekBangla-Medium',
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
    //   paddingTop: 30,
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 20},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
  topBar: {
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 65,
    // borderWidth: 2,
    borderColor: '#D3D3D3',

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderColor: 'grey',
    // borderWidth: 2,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(38),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,
    // elevation:10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default ActiveWorkOut1;
