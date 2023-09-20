import {Text} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PureRoundedCheckbox} from 'react-native-rounded-checkbox';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const ChangeIngredients = () => {
  const navigation = useNavigation();
  const countries = ['Weakly', 'Monthly', 'Yearly'];
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible1, setModalVisible1] = useState(false);
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
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            //   borderWidth: 1,
            height: getHeight(20),
          }}>
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
            }}>
            Preformly
          </Text> */}
          <Text
            style={{
              fontFamily: 'Anek_Bangla_medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 18,
              paddingTop: 30,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}>
            CHANGE INGREDIENTS
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            //   paddingVertical: 30,
            // borderWidth: 1,
            height: getHeight(52),
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 5,
              borderWidth: 1,
              backgroundColor: 'transparent',
              // borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              // elevation: 10,
              borderColor: 'grey',
              borderRadius: 20,
              height: getHeight(52),
              width: getWidth(85),
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: getHeight(5),
                width: getWidth(80),
                // borderWidth: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 18,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                All items:
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //   paddingTop:10,
                marginTop: 5,
                height: getHeight(6),
                width: getWidth(80),
                borderBottomWidth: 1,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_regular',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 16,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                Olive oil
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible1(true)}
                style={{
                  width: getWidth(22),
                  height: getHeight(4),
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   fontWeight: '100',
                    fontSize: 16,
                    // paddingTop: 30,
                    // textTransform: 'uppercase',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //   paddingTop:10,
                marginTop: 5,
                height: getHeight(6),
                width: getWidth(80),
                borderBottomWidth: 1,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_regular',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 16,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                Black pepper
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible1(true)}
                style={{
                  width: getWidth(22),
                  height: getHeight(4),
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   fontWeight: '100',
                    fontSize: 16,
                    // paddingTop: 30,
                    // textTransform: 'uppercase',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //   paddingTop:10,
                marginTop: 5,
                height: getHeight(6),
                width: getWidth(80),
                borderBottomWidth: 1,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_regular',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 16,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                Spaghetti
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible1(true)}
                style={{
                  width: getWidth(22),
                  height: getHeight(4),
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   fontWeight: '100',
                    fontSize: 16,
                    // paddingTop: 30,
                    // textTransform: 'uppercase',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //   paddingTop:10,
                marginTop: 5,
                height: getHeight(6),
                width: getWidth(80),
                borderBottomWidth: 1,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_regular',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 16,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                Butter
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible1(true)}
                style={{
                  width: getWidth(22),
                  height: getHeight(4),
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   fontWeight: '100',
                    fontSize: 16,
                    // paddingTop: 30,
                    // textTransform: 'uppercase',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //   paddingTop:10,
                marginTop: 5,
                height: getHeight(6),
                width: getWidth(80),
                borderBottomWidth: 1,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_regular',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 16,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                Pecorino Romano
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible1(true)}
                style={{
                  width: getWidth(22),
                  height: getHeight(4),
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   fontWeight: '100',
                    fontSize: 16,
                    // paddingTop: 30,
                    // textTransform: 'uppercase',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //   paddingTop:10,
                marginTop: 5,
                height: getHeight(6),
                width: getWidth(80),
                borderBottomWidth: 1,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_regular',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 16,
                  // paddingTop: 30,
                  // textTransform: 'uppercase',
                }}>
                Heavy Cream
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible1(true)}
                style={{
                  width: getWidth(22),
                  height: getHeight(4),
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    //   fontWeight: '100',
                    fontSize: 16,
                    // paddingTop: 30,
                    // textTransform: 'uppercase',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            width: getWidth(100),
            height: getHeight(18),
            //   borderWidth:1,
            //   flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("List1")}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#1B1561',
              width: getWidth(82),
              height: getHeight(7),
              backgroundColor: '#1B1561',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'Anek_Bangla_medium',
                fontWeight: '400',
              }}>
              Save changes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#1B1561',
              width: getWidth(82),
              height: getHeight(7),
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#1B1561',
                fontSize: 20,
                fontFamily: 'Anek_Bangla_medium',
                fontWeight: '400',
              }}>
              Go back
            </Text>
          </TouchableOpacity>
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
                style={{
                  // margin: 20,
                  // backgroundColor: 'white',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderBottomWidth: 0,
                  // borderRadius: 20,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  // padding: 35,
                  alignItems: 'center',
                  // shadowColor: '#000',
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
                }}
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
                      fontFamily: 'Anek_Bangla_medium',
                      color: '#1B1561',
                      fontWeight: '700',
                      fontSize: 26,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 10,
                    }}>
                    Disclaimer:
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'red',
                    paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(22),
                    justifyContent: 'center',
                    // paddingHorizontal: 38,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_regular',
                      color: 'black',
                      fontWeight: '400',
                      fontSize: 12,
                      textAlign: 'center',
                      letterSpacing: 1,
                      // paddingVertical: 10,
                    }}>
                    If you change any of the original ingredients in a recipe,
                    we can no longer guarantee you that you calorific intake
                    stays the same. Also, the chosen distribution of
                    micronutrients will be disrupted. We recommend that you,
                    instead of replacing any ingredients, buying the correct
                    ones from your local grocery store.
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: 'red',
                    paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(17.5),
                    justifyContent: 'space-evenly',
                    // paddingHorizontal: 38,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#1B1561',
                      width: getWidth(82),
                      height: getHeight(7),
                      backgroundColor: '#1B1561',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Anek_Bangla_medium',
                        fontWeight: '400',
                        letterSpacing: 2,
                      }}>
                      Go back
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#1B1561',
                      width: getWidth(82),
                      height: getHeight(7),
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#1B1561',
                        fontSize: 20,
                        fontFamily: 'Anek_Bangla_medium',
                        fontWeight: '400',
                        letterSpacing: 2,
                      }}>
                      Proceed
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
                style={{
                  // margin: 20,
                  // backgroundColor: 'white',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderBottomWidth: 0,
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
                }}
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
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '400',
                      fontSize: 17,
                      textAlign: 'center',
                      letterSpacing: 2,
                      // paddingVertical: 10,
                    }}>
                    Replace “Pecorino Romano”
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'red',
                    paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(22),
                    justifyContent: 'center',
                    // paddingHorizontal: 38,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      //   paddingTop:10,
                      marginTop: 5,
                      height: getHeight(6),
                      width: getWidth(80),
                      borderBottomWidth: 1,
                      borderColor: 'grey',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_regular',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,

                        // paddingTop: 30,
                        // textTransform: 'uppercase',
                      }}>
                      Parmesan Cheese
                    </Text>
                    <TouchableOpacity
                      style={{
                        width: getWidth(22),
                        height: getHeight(4),
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'grey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#1B1561',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Anek_Bangla_medium',
                          color: 'white',
                          //   fontWeight: '100',
                          fontSize: 16,
                          // paddingTop: 30,
                          // textTransform: 'uppercase',
                        }}>
                        Chosen
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      //   paddingTop:10,
                      marginTop: 5,
                      height: getHeight(6),
                      width: getWidth(80),
                      borderBottomWidth: 1,
                      borderColor: 'grey',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_regular',
                        color: 'grey',
                        fontWeight: '400',
                        fontSize: 16,
                        // paddingTop: 30,
                        // textTransform: 'uppercase',
                      }}>
                      Mozarella Cheese
                    </Text>
                    <TouchableOpacity
                      style={{
                        width: getWidth(22),
                        height: getHeight(4),
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'grey',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Anek_Bangla_medium',
                          color: 'black',
                          //   fontWeight: '100',
                          fontSize: 16,
                          // paddingTop: 30,
                          // textTransform: 'uppercase',
                        }}>
                        Chosen
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      //   paddingTop:10,
                      marginTop: 5,
                      height: getHeight(6),
                      width: getWidth(80),
                      borderBottomWidth: 1,
                      borderColor: 'grey',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_regular',
                        color: 'grey',
                        fontWeight: '400',
                        fontSize: 16,
                        // paddingTop: 30,
                        // textTransform: 'uppercase',
                      }}>
                      Grana Padano
                    </Text>
                    <TouchableOpacity
                      style={{
                        width: getWidth(22),
                        height: getHeight(4),
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'grey',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Anek_Bangla_medium',
                          color: 'black',
                          //   fontWeight: '100',
                          fontSize: 16,
                          // paddingTop: 30,
                          // textTransform: 'uppercase',
                        }}>
                        Chosen
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderColor: 'red',
                    // paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(85),
                    height: getHeight(12),
                    justifyContent: 'flex-end',
                    // paddingHorizontal: 38,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible1(false)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#1B1561',
                      width: getWidth(60),
                      height: getHeight(7),
                      backgroundColor: '#1B1561',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Anek_Bangla_medium',
                        fontWeight: '400',
                        letterSpacing: 2,
                      }}>
                      Proceed
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </LinearGradient>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    fontFamily: 'Anek_Bangla_medium',
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
    //   paddingTop: 30,
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
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
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    height: '100%',
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
    // shadowColor: '#000',
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
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
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
export default ChangeIngredients;
