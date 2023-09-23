import React from 'react';
import {View, Text, Platform, TouchableOpacity, Image} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const DetailedAndProgress2 = () => {
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
            Goals
          </Text>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          borderColor: 'green',
          width: getWidth(90),
          height: getHeight(10),
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
          Current Challenge or Goal
        </Text>
      </View>
      <View
        style={{
          // borderWidth: 1,
          borderColor: 'green',
          width: getWidth(90),
          height: getHeight(5),
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
            letterSpacing: 2,
          }}>
          Current weight: 70 kg
        </Text>
      </View>
      <View
        style={{
          // borderWidth: 1,
          borderColor: 'green',
          width: getWidth(90),
          height: getHeight(5),
          justifyContent: 'space-between',
          alignItems: 'center',
          // paddingHorizontal:10,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            // resizeMode: 'contain',
            width: getWidth(70),
            borderRadius: 20,
            // borderWidth: 1,
            borderColor: 'red',
            height: getHeight(2),
          }}
          source={require('../../assets/images/progress.png')}
        />

        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: '#1B1561',
            fontWeight: '700',
            fontSize: 20,
            letterSpacing: 2,
          }}>
          160 kg
        </Text>
      </View>
      <View
        style={{
          // borderWidth: 1,
          borderColor: 'green',
          width: getWidth(90),
          height: getHeight(5),
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
            letterSpacing: 2,
          }}>
          Progress picture:
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          width: getWidth(90),
          borderRadius: 10,
          height: getHeight(25),
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            height: getHeight(15),
            justifyContent: 'center',
            // borderWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ActiveWorkOut1')}
            style={{
              height: 55,
              // margin: 12,
              //   borderWidth: 1,
              // padding: 14,
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
                fontWeight: '400',
                fontSize: 20,
                letterSpacing: 2,
              }}>
              Add picture
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          borderColor: 'green',
          width: getWidth(90),
          height: getHeight(4),
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Light',
            color: '#1B1561',
            fontWeight: '400',
            fontSize: 18,
            letterSpacing: 2,
            textDecorationLine: 'underline',
          }}>
          Change picture
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          borderColor: 'red',
          height: getHeight(10),
          justifyContent: 'center',
          // borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ActiveWorkOut1')}
          style={{
            height: 55,
            // margin: 12,
            borderWidth: 1,
            // padding: 14,
            borderRadius: 20,
            borderColor: '#1B1561',
            // backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            width: getWidth(90),
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: '#1B1561',
              fontWeight: '400',
              fontSize: 20,
              letterSpacing: 2,
            }}>
            Edit Goals
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          borderColor: 'red',
          height: getHeight(10),
          justifyContent: 'center',
          // borderWidth: 1,
        }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ActiveWorkOut1')}
          style={{
            height: 55,
            // margin: 12,
            // borderWidth: 1,
            // padding: 14,
            borderRadius: 20,
            borderColor: '#1B1561',
            backgroundColor: '#1B1561',
            alignItems: 'center',
            justifyContent: 'center',
            width: getWidth(90),
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'white',
              fontWeight: '400',
              fontSize: 20,
              letterSpacing: 2,
            }}>
            Save updates
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default DetailedAndProgress2;
