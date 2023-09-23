import React from 'react';
import {View, Text, Platform, TouchableOpacity, Image} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const Calisthenics = () => {
  const navigation = useNavigation();
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
            START WORKOUT
          </Text>
        </View>
      </View>
      <View
        style={{
          //   flexDirection: 'row',
          //   borderWidth: 1,
          borderColor: 'red',
          width: getWidth(90),
          height: getHeight(9),
          // justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'grey',
            fontWeight: '500',
            fontSize: 18,
            letterSpacing: 2,
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          Start Calisthenics
        </Text>
      </View>
      <View
        style={{
          //   flexDirection: 'row',
          // borderWidth: 1,
          borderColor: 'red',
          width: getWidth(95),
          height: getHeight(65),
          //   justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
            letterSpacing: 2,
            paddingTop: 20,
            paddingBottom: 10,
          }}>
          Exercises
        </Text>

        <View
          style={{
            //   flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'grey',
            width: getWidth(95),
            height: getHeight(38),
            borderRadius: 20,
            // justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   borderWidth: 1,
              marginTop: 15,
              borderColor: 'grey',
              width: getWidth(95),
              height: getHeight(6),
              borderRadius: 20,
              // justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(55),
                height: getHeight(6),
                borderRadius: 20,
                justifyContent: 'space-between',
                paddingLeft: 10,
              }}>
              <View
                style={{
                  width: getWidth(8),
                  //   borderWidth: 1,
                  //   borderColor: 'red',
                  height: getHeight(5),
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
                  source={require('../../assets/images/legs.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 22,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Pull workout
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(40),
                height: getHeight(6),
                borderRadius: 20,
                justifyContent: 'flex-end',
                alignItems: 'center',
                // paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 18,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                18/5/23
              </Text>
            </View>
          </View>
          <View
            style={{
              // flexDirection: 'row',
              // borderWidth: 1,
              borderColor: 'blue',
              width: getWidth(95),
              height: getHeight(29),
              //   borderRadius: 20,
              //   justifyContent: 'flex-end',
              //   alignItems: 'center',
              // paddingLeft: 10,
              //   paddingRight: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(5),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 18,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                2h 25 min
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 18,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                25 sets
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(5),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 22,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Exercise
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 22,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Repetitions
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(3),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Pull ups x5
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Body Weight x 12 x 3
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(3),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Lat pull-downs
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                10 x 3
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(3),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Bent-over-row
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                10 x 3
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(3),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Preachers curl
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                x 12
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(3),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Hammer curl
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                12 x 3
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(95),
                height: getHeight(3),
                //   borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: 10,
                // paddingLeft: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                Incline curl
              </Text>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 14,
                  letterSpacing: 2,
                  //   paddingTop: 20,
                  //   paddingBottom: 10,
                }}>
                10 x 3
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            height: getHeight(15),
            justifyContent: 'center',
            // borderWidth: 1,
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('TrainingHome1')}
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
              width: getWidth(80),
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'white',
                fontWeight: '400',
                fontSize: 20,
                letterSpacing: 2,
              }}>
              Start Workout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Calisthenics;
