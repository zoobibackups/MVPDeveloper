import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {backward, brain, chart, preformly, runningMan} from '../../assets/svg';
import {SvgXml} from 'react-native-svg';

const StepCounter = () => {
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
            <SvgXml width={getWidth(10)} height={getHeight(2)} xml={backward} />
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
              Step Counter
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            marginTop: 20,
            width: getWidth(90),
            height: getHeight(20),
            borderRadius: 20,
            justifyContent: 'center',

            flexDirection: 'row',
            // alignItems: 'center',
          }}>
          <View
            style={{
              //   borderWidth: 1,
              borderColor: 'grey',
              // marginTop: 20,
              width: getWidth(40),
              height: getHeight(20),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml width={getWidth(30)} xml={chart} />
            {/* <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(30),
                // borderWidth: 1,
                borderColor: 'red',
                //   height: getHeight(20),
              }}
              source={require('../../assets/images/Chart.png')}
            /> */}
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderColor: 'grey',
              paddingTop: 10,
              // marginTop: 20,
              width: getWidth(50),
              height: getHeight(20),
              borderRadius: 20,
              //   justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml width={getWidth(30)} xml={runningMan} />
            {/* <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(30),
                // borderWidth: 1,
                borderColor: 'red',
                //   height: getHeight(20),
              }}
              source={require('../../assets/images/userRun.png')}
            /> */}
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '200',
                fontSize: 15,
                letterSpacing: 2,
              }}>
              Steps
            </Text>
            <View
              style={{
                // borderWidth: 1,
                borderColor: 'grey',
                paddingLeft: 20,
                // marginTop: 20,
                width: getWidth(50),
                height: getHeight(7),
                borderRadius: 20,
                flexDirection: 'row',
                //   justifyContent: 'center',
                // alignItems: 'center',
              }}>
              <View
                style={{
                  // borderWidth: 1,
                  borderColor: 'grey',
                  // marginTop: 20,
                  width: getWidth(30),
                  height: getHeight(7),
                  borderRadius: 20,
                  //   justifyContent: 'center',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: '#282B2A',
                    fontWeight: '600',
                    fontSize: 40,
                    letterSpacing: 2,
                  }}>
                  6,566
                </Text>
              </View>
              <View
                style={{
                  // borderWidth: 1,
                  borderColor: 'grey',
                  // marginTop: 20,
                  width: getWidth(20),
                  height: getHeight(7),
                  borderRadius: 20,
                  justifyContent: 'center',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: '#282B2A',
                    fontWeight: '500',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Steps
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            height: getHeight(50),
            width: getWidth(95),
            marginTop: 20,
            // justifyContent: 'flex-end',
            // borderWidth: 1,
          }}>
          <View
            style={{
              // alignItems: 'center',
              borderColor: 'green',
              height: getHeight(22),
              width: getWidth(95),
              justifyContent: 'space-evenly',
              // borderWidth: 1,
              flexDirection: 'row',
            }}>
            <LinearGradient
              style={{
                width: getWidth(29),
                borderRadius: 20,
                paddingLeft: 10,

                height: getHeight(20),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 10,
                // justifyContent: 'space-between',
                // flexDirection: 'row',
                // alignItems: 'center',
                // paddingHorizontal: 5,
              }}
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              // locations={{x:0,y:0.5,z:0.6}}
              // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            >
              <SvgXml width={getWidth(10)} height={getHeight(5)} xml={brain} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(5),
                }}
                source={require('../../assets/images/brain.png')}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                50%
              </Text>
              <View
                style={{
                  // alignItems: 'center',
                  borderColor: 'green',
                  height: getHeight(10),
                  width: getWidth(25),
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Less likely to develop dementia
                </Text>
              </View>
            </LinearGradient>
            <LinearGradient
              style={{
                width: getWidth(29),
                borderRadius: 20,
                paddingLeft: 10,

                height: getHeight(20),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 10,
                // justifyContent: 'space-between',
                // flexDirection: 'row',
                // alignItems: 'center',
                // paddingHorizontal: 5,
              }}
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              // locations={{x:0,y:0.5,z:0.6}}
              // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            >
              <SvgXml width={getWidth(10)} height={getHeight(5)} xml={brain} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(5),
                }}
                source={require('../../assets/images/brain.png')}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                50%
              </Text>
              <View
                style={{
                  // alignItems: 'center',
                  borderColor: 'green',
                  height: getHeight(10),
                  width: getWidth(25),
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Less likely to develop dementia
                </Text>
              </View>
            </LinearGradient>
            <LinearGradient
              style={{
                width: getWidth(29),
                borderRadius: 20,
                paddingLeft: 10,

                height: getHeight(20),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 10,
                // justifyContent: 'space-between',
                // flexDirection: 'row',
                // alignItems: 'center',
                // paddingHorizontal: 5,
              }}
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              // locations={{x:0,y:0.5,z:0.6}}
              // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            >
              <SvgXml width={getWidth(10)} height={getHeight(5)} xml={brain} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(5),
                }}
                source={require('../../assets/images/brain.png')}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                50%
              </Text>
              <View
                style={{
                  // alignItems: 'center',
                  borderColor: 'green',
                  height: getHeight(10),
                  width: getWidth(25),
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Less likely to develop dementia
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderColor: 'green',
              width: getWidth(90),
              marginTop: 15,
              justifyContent: 'space-between',
              //   alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: '#1B1561',
                fontWeight: '700',
                fontSize: 18,
                letterSpacing: 2,
              }}>
              OTHER BENEFITS
            </Text>
          </View>
          <View
            style={{
              // alignItems: 'center',
              borderColor: 'green',
              height: getHeight(22),
              marginTop: 15,
              width: getWidth(95),
              justifyContent: 'space-evenly',
              //   borderWidth: 1,
              flexDirection: 'row',
            }}>
            <LinearGradient
              style={{
                width: getWidth(29),
                borderRadius: 20,
                paddingLeft: 10,

                height: getHeight(20),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 10,
                // justifyContent: 'space-between',
                // flexDirection: 'row',
                // alignItems: 'center',
                // paddingHorizontal: 5,
              }}
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              // locations={{x:0,y:0.5,z:0.6}}
              // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            >
              <SvgXml width={getWidth(10)} height={getHeight(5)} xml={brain} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(5),
                }}
                source={require('../../assets/images/brain.png')}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                50%
              </Text>
              <View
                style={{
                  // alignItems: 'center',
                  borderColor: 'green',
                  height: getHeight(10),
                  width: getWidth(25),
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Less likely to develop dementia
                </Text>
              </View>
            </LinearGradient>
            <LinearGradient
              style={{
                width: getWidth(29),
                borderRadius: 20,
                paddingLeft: 10,

                height: getHeight(20),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 10,
                // justifyContent: 'space-between',
                // flexDirection: 'row',
                // alignItems: 'center',
                // paddingHorizontal: 5,
              }}
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              // locations={{x:0,y:0.5,z:0.6}}
              // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            >
              <SvgXml width={getWidth(10)} height={getHeight(5)} xml={brain} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(5),
                }}
                source={require('../../assets/images/brain.png')}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                50%
              </Text>
              <View
                style={{
                  // alignItems: 'center',
                  borderColor: 'green',
                  height: getHeight(10),
                  width: getWidth(25),
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Less likely to develop dementia
                </Text>
              </View>
            </LinearGradient>
            <LinearGradient
              style={{
                width: getWidth(29),
                borderRadius: 20,
                paddingLeft: 10,

                height: getHeight(20),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 10,
                // justifyContent: 'space-between',
                // flexDirection: 'row',
                // alignItems: 'center',
                // paddingHorizontal: 5,
              }}
              colors={['#FDFFF4', '#BBC1AD']}
              start={{x: 0, y: 0}}
              end={{x: 0.8, y: 0}}
              // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              // locations={{x:0,y:0.5,z:0.6}}
              // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            >
              <SvgXml width={getWidth(10)} height={getHeight(5)} xml={brain} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(5),
                }}
                source={require('../../assets/images/brain.png')}
              /> */}
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                50%
              </Text>
              <View
                style={{
                  // alignItems: 'center',
                  borderColor: 'green',
                  height: getHeight(10),
                  width: getWidth(25),
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  Less likely to develop dementia
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default StepCounter;
