import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { backward, error, preformly } from '../../assets/svg';
import { getHeight, getWidth } from '../functions/CommonFunctions';

const Error1 = () => {
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
          marginTop:Platform.OS==='ios'?20:0,
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
            404 ERROR
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   borderWidth: 1,
          borderColor: 'red',
          width: getWidth(70),
          height: getHeight(35),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgXml xml={error} />
        {/* <Image
          style={{
            //   resizeMode: 'contain',
            //   width: getWidth(9),
            // borderWidth: 1,
            borderColor: 'red',
            //   height: getHeight(2),
          }}
          source={require('../../assets/images/error.png')}
        /> */}
      </View>

      <View
        style={{
          //   flexDirection: 'row',
          //   borderWidth: 1,
          borderColor: 'red',
          width: getWidth(70),
          height: getHeight(20),
          justifyContent: 'space-evenly',
          //   paddingVertical:10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: '#1B1561',
            fontWeight: '700',
            fontSize: 25,
            letterSpacing: 2,
          }}>
          Oops!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'AnekBangla-Medium',
            color: '#1B1561',
            fontWeight: '400',
            fontSize: 17,
          }}>
          The page you were looking for doest exist
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'AnekBangla-Medium',
            color: '#1B1561',
            fontWeight: '700',
            fontSize: 20,
            textDecorationLine: 'underline',
          }}>
          Try Again
        </Text>
      </View>
      <View
        style={{
          //   flexDirection: 'row',
          //   borderWidth: 1,
          borderColor: 'red',
          width: getWidth(90),
          height: getHeight(20),
          justifyContent: 'space-evenly',
          //   paddingVertical:10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          //   onPress={() => setModalVisible1(true)}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#1B1561',
            width: getWidth(70),
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
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => setModalVisible(true)}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#1B1561',
            width: getWidth(70),
            height: getHeight(7),
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#1B1561',
              fontSize: 20,
              fontFamily: 'AnekBangla-Medium',
              letterSpacing: 2,
              fontWeight: '400',
            }}>
            Report a problem
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Error1;
