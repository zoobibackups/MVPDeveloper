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
import {arms, chest, legs, preformly, pull, pullBig, push} from '../../assets/svg';
import {SvgXml} from 'react-native-svg';
import {back} from '../Components/Index';

const WeightLiftingBox1 = () => {
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
            height: getHeight(70),
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
            Weight Lifting
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
              onPress={() => navigation.navigate('StartWorkOut')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  // borderWidth: 1,
                  shadowColor: 'rgba(103, 128, 159)',

                  // elevation: 5,
                  // opacity: 0.1,
                  width: getWidth(40),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <SvgXml
                  width={getWidth(30)}
                  height={getHeight(8)}
                  xml={pullBig}
                />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/pull.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Pull
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('StartWorkOutPush')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
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
                <SvgXml width={getWidth(30)} height={getHeight(8)} xml={push} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(20),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/push.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Push
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
              onPress={() => navigation.navigate('StartWorkOutLegs')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
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
                <SvgXml width={getWidth(30)} xml={legs} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/legs.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Legs
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('StartWorkOutArms')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
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
                <SvgXml width={getWidth(30)} height={getHeight(9)} xml={arms} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(20),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/arms.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Arms
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
              onPress={() => navigation.navigate('StartWorkOutChest')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
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
                <SvgXml
                  width={getWidth(30)}
                  height={getHeight(9)}
                  xml={chest}
                />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/chest.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Chest
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('StartWorkOutBack')}>
              <LinearGradient
                style={{
                  alignItems: 'center',
                  // borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
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
                <SvgXml width={getWidth(30)} height={getHeight(9)} xml={back} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(20),
                    //   borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/wings.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Back
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            height: getHeight(10),
            // justifyContent: 'flex-end',
            // borderWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllWorkOuts')}
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
              All workouts
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default WeightLiftingBox1;
