import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {
  backwardBlack,
  forwardBlack,
  girl,
 meal1,
  noodles,
  preformly,
} from '../../assets/svg';
import {SvgXml} from 'react-native-svg';

const Home6 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [intake, setIntake] = useState('');
  const [intake1, setIntake1] = useState('');
  return (
    <>
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
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}>
                PROFILE OVERVIEW
              </Text>
            </View>
          </View>

          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(95),
              height: getHeight(32),
              // backgroundColor: '#1B1561',
              // justifyContent: 'center',
              //   paddingTop: 10,
              //   paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
              //   flexDirection:'row'
            }}>
            <View
              style={{
                //   borderWidth: 1,
                borderRadius: 20,
                width: getWidth(40),
                height: getHeight(20),
                // backgroundColor: '#1B1561',
                justifyContent: 'space-evenly',
                //   paddingTop: 10,
                //   paddingLeft: 10,
                alignItems: 'center',
                // marginTop:60
                flexDirection: 'row',
              }}>
              {/* <TouchableOpacity onPress={() => setInstruction(true)}> */}
              {/* <SvgXml width={getWidth(35)} height={getHeight(25)} xml={girl} /> */}
              <Image
                source={require('../../assets/images/girl.png')}
                style={{
                  resizeMode: 'contain',
                  width: getWidth(35),
                  // height: getHeight(25),
                  // borderRadius: 20,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                textAlign: 'center',
                letterSpacing: 2,
                // paddingVertical: 5,
              }}>
              SVEN-INGVAR
            </Text>
            <TouchableOpacity
              // onPress={() => setModalVisible(false)}
              style={{
                height: 50,
                margin: 5,
                //   borderWidth: 1,
                // padding: 14,
                borderRadius: 20,
                borderColor: '#1B1561',
                backgroundColor: '#1B1561',
                alignItems: 'center',
                justifyContent: 'center',
                width: getWidth(37),
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'white',
                  fontWeight: '400',
                  fontSize: 17,
                  letterSpacing: 2,
                }}>
                Week 3
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(95),
              height: getHeight(27),
              // backgroundColor: '#1B1561',
              // justifyContent: 'center',
              //   paddingTop: 10,
              //   paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
              //   flexDirection:'row'
            }}>
            <View
              style={{
                //   borderWidth: 1,
                borderRadius: 20,
                width: getWidth(90),
                height: getHeight(8),
                // backgroundColor: '#1B1561',
                justifyContent: 'center',
                //   paddingTop: 10,
                //   paddingLeft: 10,
                alignItems: 'center',
                // marginTop:60
                //   flexDirection:'row'
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 20,
                  textAlign: 'center',
                  letterSpacing: 2,
                  // paddingVertical: 5,
                }}>
                MISSION: EAT MORE HEALTHY
              </Text>
            </View>
<View style={{
   // borderWidth: 1,
   borderRadius: 20,
   width: getWidth(90),
   height: getHeight(17),
   // backgroundColor: '#1B1561',
   justifyContent: 'center',
   //   paddingTop: 10,
   //   paddingLeft: 10,
   alignItems: 'center',
   borderColor: 'grey',
   // backgroundColor: 'white',
   // borderWidth: 1,
   // shadowColor: 'rgba(103, 128, 159)',
   shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
   shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
   shadowOpacity: 1, // Adjust the shadow opacity as needed
   shadowRadius: 10, // Adjust the shadow radius as needed
   elevation: Platform.OS === 'android' ? 10 : 5,
   // elevation:10,
   // marginTop:60
   flexDirection: 'row',
}}>

            <LinearGradient
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              style={{
                // borderWidth: 1,
                borderRadius: 20,
                width: getWidth(90),
                height: getHeight(17),
                // backgroundColor: '#1B1561',
                justifyContent: 'center',
                //   paddingTop: 10,
                //   paddingLeft: 10,
                alignItems: 'center',
                borderColor: 'grey',
                // backgroundColor: 'white',
                // borderWidth: 1,
                // shadowColor: 'rgba(103, 128, 159)',
                shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
                shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
                shadowOpacity: 1, // Adjust the shadow opacity as needed
                shadowRadius: 10, // Adjust the shadow radius as needed
                elevation: Platform.OS === 'android' ? 10 : 5,
                // elevation:10,
                // marginTop:60
                flexDirection: 'row',
              }}>
              {/* <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                width: getWidth(90),
                height: getHeight(17),
                // backgroundColor: '#1B1561',
                justifyContent: 'center',
                //   paddingTop: 10,
                //   paddingLeft: 10,
                alignItems: 'center',
                borderColor: 'grey',
                // backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                //   elevation:1,
                // marginTop:60
                flexDirection: 'row',
              }}> */}
              <ScrollView horizontal>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    borderRadius: 15,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#E0E0E0',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Mon
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: '#E0E0E0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#2C302F',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      12
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    borderRadius: 15,
                    // marginLeft:3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#E0E0E0',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Tue
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: '#E0E0E0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#2C302F',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      13
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    backgroundColor: '#1B1561',
                    borderRadius: 15,
                    // marginLeft:8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#DFFFF6',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Wed
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#1B1561',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      14
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    borderRadius: 15,
                    marginLeft: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#E0E0E0',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Thu
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: '#E0E0E0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#2C302F',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      15
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    borderRadius: 15,
                    // marginLeft:8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#E0E0E0',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Fri
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: '#E0E0E0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#2C302F',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      16
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    borderRadius: 15,
                    // marginLeft:8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#E0E0E0',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Sat
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: '#E0E0E0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#2C302F',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      17
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: getHeight(15),
                    width: getWidth(19),
                    // borderWidth: 1,
                    borderRadius: 15,
                    // marginLeft:8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Bold',
                      color: '#E0E0E0',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 5,
                    }}>
                    Sun
                  </Text>
                  <View
                    style={{
                      height: getHeight(8),
                      width: getWidth(16),
                      borderWidth: 1,
                      borderColor: '#E0E0E0',
                      borderRadius: 100,
                      backgroundColor: '#E0E0E0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: '#2C302F',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 5,
                      }}>
                      18
                    </Text>
                  </View>
                </View>
              </ScrollView>
              {/* </View> */}
            </LinearGradient>
            </View>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(99),
              height: getHeight(25),
              // backgroundColor: '#1B1561',
              justifyContent: 'space-evenly',
              //   paddingTop: 10,
              //   paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <SvgXml
                width={getWidth(7)}
                height={getHeight(5)}
                xml={backwardBlack}
              />
              {/* <Image
                source={require('../../assets/images/backBlack.png')}
                style={{
                  resizeMode: 'contain',
                  width: getWidth(7),
                  height: getHeight(5),
                }}
              /> */}
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={()=>navigation.navigate("Reciepe1")}
              style={{
                width: getWidth(25),
                height: getHeight(12),
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <SvgXml width={getWidth(24)} height={getHeight(15)} xml={meal1}/>  */}
              <Image
                source={require('../../assets/images/steak1.png')}
                style={{
                  resizeMode: 'contain',
                  width: getWidth(24),
                  height: getHeight(15),
                }}
              />
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 15,
                  textAlign: 'center',
                  letterSpacing: 2,
                  // paddingVertical: 5,
                }}>
                Meal 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: getWidth(30),
                height: getHeight(20),
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 2,
                // borderColor: '#1B1561',
              }}>
              <View
                style={{
                  width: getWidth(30),
                  height: getHeight(15),
                  borderRadius: 16,
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#1B1561',
                }}>
                <SvgXml
                  xml={noodles}
                  width={getWidth(29)}
                  height={getHeight(15)}
                  style={{
                    borderWidth: 2,
                    borderColor: '#1B1561',
                    borderRadius: 16,
                  }}
                />
              </View>
              {/* <Image
                source={require('../../assets/images/noodles.png')}
                style={{
                  resizeMode: 'contain',
                  width: getWidth(29),
                  height: getHeight(15),
                  borderWidth: 2,
                  borderColor: '#1B1561',
                  borderRadius: 16,
                }}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 15,
                  textAlign: 'center',
                  letterSpacing: 2,
                  paddingTop: 10,
                }}>
                Meal 2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: getWidth(25),
                height: getHeight(12),
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/meal3.png')}
                style={{
                  resizeMode: 'contain',
                  width: getWidth(24),
                  height: getHeight(15),
                }}
              />
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 15,
                  textAlign: 'center',
                  letterSpacing: 2,
                  // paddingVertical: 5,
                }}>
                Meal 3
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <SvgXml
                width={getWidth(7)}
                height={getHeight(5)}
                xml={forwardBlack}
              />
              {/* <Image
                source={require('../../assets/images/forwardBlack.png')}
                style={{
                  resizeMode: 'contain',
                  width: getWidth(7),
                  height: getHeight(5),
                }}
              /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(99),
              height: getHeight(20),
              // backgroundColor: '#1B1561',
              justifyContent: 'space-evenly',
              //   paddingTop: 10,
              //   paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
              //   flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible1(true)}
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#1B1561',
                width: getWidth(65),
                height: getHeight(9),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'AnekBangla-Medium',
                  fontWeight: '400',
                  letterSpacing: 2,
                }}>
                Extra Intake
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#1B1561',
                width: getWidth(65),
                height: getHeight(9),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'AnekBangla-Medium',
                  letterSpacing: 2,
                  fontWeight: '400',
                }}>
                Time for a snack
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
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
                  paddingTop: 10,
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(8),
                  justifyContent: 'center',
                  // paddingHorizontal:8,

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
                    letterSpacing: 2,
                    // paddingVertical: 10,
                  }}>
                  Choose Snacks
                </Text>
              </View>

              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(96),
                  height: getHeight(27),
                  justifyContent: 'space-between',
                  // paddingHorizontal: 38,

                  // borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ScrollView horizontal>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      Snack 1
                    </Text>
                    <View
                      style={{
                        // borderWidth: 1,
                        height: getHeight(15),
                        width: getWidth(30),
                        borderRadius: 20,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/images/steak1.png')}
                        style={{resizeMode: 'contain', width: getWidth(25)}}
                      />
                    </View>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Medium',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      X {'\n'} Calories
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      Snack 2
                    </Text>
                    <View
                      style={{
                        // borderWidth: 1,
                        height: getHeight(15),
                        width: getWidth(30),
                        borderRadius: 20,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <ImageBackground
                        source={require('../../assets/images/steakLight.png')}
                        style={{
                          width: getWidth(25),
                          height: getHeight(12),
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../assets/images/check1.png')}
                          style={{resizeMode: 'contain', width: getWidth(25)}}
                        />
                      </ImageBackground>
                    </View>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Medium',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        textAlign: 'center',
                        // paddingVertical: 10,
                        letterSpacing: 2,
                      }}>
                      X {'\n'} Calories
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      Snack 3
                    </Text>
                    <View
                      style={{
                        // borderWidth: 1,
                        height: getHeight(15),
                        width: getWidth(30),
                        borderRadius: 20,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/images/steak1.png')}
                        style={{resizeMode: 'contain', width: getWidth(25)}}
                      />
                    </View>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Medium',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      X {'\n'} Calories
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Bold',
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 14,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      Snack 4
                    </Text>
                    <View
                      style={{
                        // borderWidth: 1,
                        height: getHeight(15),
                        width: getWidth(30),
                        borderRadius: 20,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/images/steak1.png')}
                        style={{resizeMode: 'contain', width: getWidth(25)}}
                      />
                    </View>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Medium',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        textAlign: 'center',
                        letterSpacing: 2,
                        // paddingVertical: 10,
                      }}>
                      X {'\n'} Calories
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 10,
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(12),
                  justifyContent: 'center',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',

                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: '#1B1561',
                    width: getWidth(65),
                    height: getHeight(9),
                    backgroundColor: '#1B1561',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontFamily: 'AnekBangla-Medium',
                      fontWeight: '400',
                      letterSpacing: 2,
                    }}>
                    Add to menu
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible1(!modalVisible1)}>
          <View style={styles.centeredView}>
            <LinearGradient
              style={styles.modalView1}
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
                  paddingTop: 10,
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(8),
                  justifyContent: 'center',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',

                  alignItems: 'center',
                }}>
                {/* <Image
                source={require('../../assets/images/tickGroup.png')}
                style={{resizeMode: 'contain', width: getWidth(35)}}
              /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 17,
                    textAlign: 'center',
                    // paddingVertical: 10,
                    letterSpacing: 2,
                  }}>
                  Extra Intake
                </Text>
              </View>

              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(96),
                  height: getHeight(20),
                  justifyContent: 'space-between',
                  // paddingHorizontal:38,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    height: 53,
                    //   margin: 8,
                    borderWidth: 1,
                    paddingLeft: 15,
                    //   justifyContent:'flex-start',
                    borderRadius: 20,
                    width: getWidth(90),
                    height: getHeight(8),
                    borderColor: '#1B1561',
                    color: 'grey',
                  }}
                  onChangeText={text => setIntake1(text)}
                  placeholderTextColor="grey"
                  value={intake1}
                  placeholder="Cinnamon bun..."
                  // secureTextEntry={show}
                  // keyboardType="numeric"
                />

                <TextInput
                  style={{
                    height: 53,
                    //   margin: 8,
                    borderWidth: 1,
                    paddingLeft: 15,
                    //   justifyContent:'flex-start',
                    borderRadius: 20,
                    width: getWidth(90),
                    height: getHeight(8),
                    borderColor: '#1B1561',
                    color: 'grey',
                  }}
                  onChangeText={text => setIntake(text)}
                  placeholderTextColor="grey"
                  value={intake}
                  placeholder="Calories..."
                  // secureTextEntry={show}
                  // keyboardType="numeric"
                />
              </View>
              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(96),
                  height: getHeight(14),
                  justifyContent: 'space-evenly',
                  // paddingHorizontal:38,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible1(false), setModalVisible2(true);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Medium',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 14,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 10,
                    }}>
                    Advanced
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible1(false)}
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: '#1B1561',
                    width: getWidth(50),
                    height: getHeight(7),
                    backgroundColor: '#1B1561',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontFamily: 'AnekBangla-Medium',
                      fontWeight: '400',
                      letterSpacing: 2,
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible2(!modalVisible2)}>
          <View style={styles.centeredView}>
            <LinearGradient
              style={styles.modalView1}
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
                  paddingTop: 10,
                  // borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(8),
                  justifyContent: 'center',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',

                  alignItems: 'center',
                }}>
                {/* <Image
                source={require('../../assets/images/tickGroup.png')}
                style={{resizeMode: 'contain', width: getWidth(35)}}
              /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 17,
                    textAlign: 'center',
                    // paddingVertical: 10,
                    letterSpacing: 2,
                  }}>
                  Extra Intake
                </Text>
              </View>

              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(96),
                  height: getHeight(20),
                  justifyContent: 'space-between',
                  // paddingHorizontal:38,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    height: 53,
                    //   margin: 8,
                    borderWidth: 1,
                    paddingLeft: 15,
                    //   justifyContent:'flex-start',
                    borderRadius: 20,
                    width: getWidth(90),
                    height: getHeight(8),
                    borderColor: '#1B1561',
                    color: 'grey',
                  }}
                  onChangeText={text => setIntake1(text)}
                  placeholderTextColor="grey"
                  value={intake1}
                  placeholder="Protein...."
                  // secureTextEntry={show}
                  // keyboardType="numeric"
                />

                <TextInput
                  style={{
                    height: 53,
                    //   margin: 8,
                    borderWidth: 1,
                    paddingLeft: 15,
                    //   justifyContent:'flex-start',
                    borderRadius: 20,
                    width: getWidth(90),
                    height: getHeight(8),
                    borderColor: '#1B1561',
                    color: 'grey',
                  }}
                  onChangeText={text => setIntake(text)}
                  placeholderTextColor="grey"
                  value={intake}
                  placeholder="Carbohydrates... "
                  // secureTextEntry={show}
                  // keyboardType="numeric"
                />
              </View>
              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(96),
                  height: getHeight(14),
                  justifyContent: 'space-evenly',
                  // paddingHorizontal:38,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible2(false)}
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: '#1B1561',
                    width: getWidth(50),
                    height: getHeight(7),
                    backgroundColor: '#1B1561',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontFamily: 'AnekBangla-Medium',
                      fontWeight: '400',
                      letterSpacing: 2,
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    height: getHeight(91),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(50),
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
  modalView1: {
    // margin: 20,
    // backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(45),
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

export default Home6;
