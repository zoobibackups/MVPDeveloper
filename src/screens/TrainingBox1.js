import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {
  backward,
  body,
  boxing,
  calesthenics,
  cardio,
  meditation,
  preformly,
  yoga,
} from '../../assets/svg';

const TrainingBox1 = () => {
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
              PLANS
            </Text>
          </View>
        </View>
        <View
          style={{
            //   flexDirection: 'row',
            // borderWidth: 1,
            borderColor: 'red',
            width: getWidth(90),
            height: getHeight(90),
            // justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
              paddingTop: 20,
              paddingBottom: 20,
            }}>
            Choose Plan
          </Text>
          <View
            style={{
              // alignItems: 'center',
              borderColor: 'green',
              height: getHeight(20),
              width: getWidth(90),
              justifyContent: 'space-between',
              //   borderWidth: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WeightLiftingBox1')}>
              <View
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,

                  backgroundColor: '#1B1561',
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,

                  // borderWidth: 1,
                }}
                // colors={['#FDFFF4', '#BBC1AD']}
                // start={{x: 0, y: 0}}
                // end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/lifting.png')}
                />
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Weight lifting
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Yoga')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,

                  // backgroundColor: 'white',
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  // borderWidth: 1,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml width={getWidth(20)} xml={yoga} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(20),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/yoga.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Yoga
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // alignItems: 'center',
              borderColor: 'green',
              height: getHeight(20),
              width: getWidth(90),
              justifyContent: 'space-between',
              //   borderWidth: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Cardio')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  // backgroundColor: 'white',
                  // borderWidth: 1,
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  // borderWidth: 1,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml width={getWidth(20)} xml={cardio} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/cardio.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Cardio
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Boxing')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  // backgroundColor: 'white',
                  // borderWidth: 1,
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  // borderWidth: 1,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml width={getWidth(20)} xml={boxing} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(20),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/boxing.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Boxing
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // alignItems: 'center',
              borderColor: 'green',
              height: getHeight(20),
              width: getWidth(90),
              justifyContent: 'space-between',
              //   borderWidth: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Meditation')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  // backgroundColor: 'white',
                  // borderWidth: 1,
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  // borderWidth: 1,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml width={getWidth(20)} xml={meditation} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/meditation.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  meditation
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Calisthenics')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  // backgroundColor: 'white',
                  // borderWidth: 1,
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  // borderWidth: 1,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml width={getWidth(20)} xml={calesthenics} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(20),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/gymnastic.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Calisthenics
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // alignItems: 'center',
              borderColor: 'green',
              height: getHeight(20),
              width: getWidth(90),
              justifyContent: 'space-between',
              //   borderWidth: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BodyControl')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  // backgroundColor: 'white',
                  // borderWidth: 1,
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  // borderWidth: 1,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml width={getWidth(20)} xml={body} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/human.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Body Control
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                alignItems: 'center',
                // borderColor: 'blue',
                borderRadius: 20,
                height: getHeight(17),
                borderColor: '#F5F5F5',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: 'rgba(103, 128, 159)',

                elevation: 5,
                // opacity: 0.1,
                width: getWidth(40),
                justifyContent: 'space-between',
                paddingVertical: 10,
                borderWidth: 1,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(20),
                  //   borderWidth: 1,
                  borderColor: 'red',
                  //   height: getHeight(20),
                }}
                source={require('../../assets/images/time.png')}
              />
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 14,
                  letterSpacing: 2,
                }}>
                Training history
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default TrainingBox1;
