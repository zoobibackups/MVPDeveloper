import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {preformly} from '../../assets/svg';

const TrainingDiary2 = () => {
  const navigation = useNavigation();
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
              TRAINING DIARY
            </Text>
          </View>
        </View>
        <View
          style={{
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(70),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('ProfileTrainingScreen')}
            style={{
              //   borderWidth: 0.5,
              alignItems: 'center',
              borderColor: 'grey',
              // borderRadius: 40,
              justifyContent: 'center',
              width: getWidth(20),
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(30),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(15),
              }}
              source={require('../../assets/images/man.png')}
            />
          </TouchableOpacity>
        </View>
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
              fontSize: 14,
              letterSpacing: 2,
            }}>
            Muhammad
          </Text>
        </View>
        <View
          style={{
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            marginTop: 20,
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
            Challenges
          </Text>
        </View>
        <LinearGradient
          style={{
            width: getWidth(95),
            borderRadius: 20,

            height: getHeight(40),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-evenly',
            //   flexDirection: 'row',
            alignItems: 'center',
            //   paddingHorizontal: 5,
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
              //   borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(90),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                Challenge
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                Difficulty
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                Status
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Extreme
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Extreme
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Extreme
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Extreme
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Extreme
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            marginTop: 20,
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
            Latest Workout
          </Text>
        </View>
        <View
          style={{
            //   flexDirection: 'row',
            borderWidth: 1,
            marginTop: 10,
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
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            marginTop: 20,
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
            Personal bests
          </Text>
        </View>
        <LinearGradient
          style={{
            width: getWidth(95),
            borderRadius: 20,

            height: getHeight(40),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-evenly',
            //   flexDirection: 'row',
            alignItems: 'center',
            //   paddingHorizontal: 5,
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
              //   borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(90),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}></Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                REPS
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                WEIGHT
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                1X
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                1X
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                1X
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                1X
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              //   borderWidth: 1,
              borderColor: 'grey',
              width: getWidth(87),
              // marginTop: 10,
              justifyContent: 'space-between',
              //   paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(30),
                // marginTop: 10,
                justifyContent: 'space-between',
                // paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'grey',
                  fontWeight: '400',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                Run 10km
              </Text>
            </View>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderWidth: 1,
                borderColor: 'grey',
                width: getWidth(50),
                // marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                flexDirection: 'row',
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 2,
                }}>
                1X
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,

                  letterSpacing: 2,
                }}>
                Done
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View
          style={{
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            marginTop: 20,
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
            Weight
          </Text>
        </View>
        <LinearGradient
          style={{
            width: getWidth(90),
            borderRadius: 20,
            marginTop: 20,

            height: getHeight(15),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-evenly',
            //   flexDirection: 'row',
            alignItems: 'center',
            //   paddingHorizontal: 5,
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
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: getWidth(80),
              // marginTop: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
              }}>
              Bench press
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
              }}>
              80 kg
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: getWidth(80),
              // marginTop: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
              }}>
              Bench press
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
              }}>
              80 kg
            </Text>
          </View>
        </LinearGradient>

        <View
          style={{
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            marginTop: 20,
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
            Current statistics
          </Text>
        </View>

        <LinearGradient
          style={{
            width: getWidth(90),
            borderRadius: 20,
            marginTop: 20,

            height: getHeight(25),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-evenly',
            //   flexDirection: 'row',
            alignItems: 'center',
            //   paddingHorizontal: 5,
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
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: getWidth(80),
              // marginTop: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
              }}>
              Bench press
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
              }}>
              80 kg
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: getWidth(80),
              // marginTop: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
              }}>
              Bench press
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
              }}>
              80 kg
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: getWidth(80),
              // marginTop: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
              }}>
              Bench press
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
              }}>
              80 kg
            </Text>
          </View>
          <View
            style={{
              // borderBottomWidth: 1,
              borderColor: 'grey',
              width: getWidth(80),
              // marginTop: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
              }}>
              Bench press
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 16,
              }}>
              80 kg
            </Text>
          </View>
        </LinearGradient>
      </LinearGradient>
    </ScrollView>
  );
};

export default TrainingDiary2;
