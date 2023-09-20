import React from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {appleBlack, fitbit, garmin, garminText, preformly} from '../../assets/svg';

const Connectwatch = () => {
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
          fontWeight: '500',
          fontSize: 18,
          letterSpacing: 2,
        }}>
        CONNECT YOUR DEVICE
      </Text>
      <View
        style={{
          paddingVertical: 10,
          height: getHeight(9),
          borderColor: 'red',
          justifyContent: 'flex-end',
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: '#1B1561',
            fontWeight: '600',
            fontSize: 18,
            letterSpacing: 2,
          }}>
          Integrate with Preformly
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          // paddingVertical: 10,
          borderColor: 'red',
          height: getHeight(11),
          width: getWidth(80),
          marginTop: 10,
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: 'grey',
            fontWeight: '400',
            fontSize: 14,
            // letterSpacing: 2,
            textAlign: 'center',
          }}>
          Connect the Preformly app to one of your existing health apps to make
          the results more detailed and precise{' '}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          // paddingVertical: 10,
          justifyContent: 'space-evenly',
          borderColor: 'red',
          height: getHeight(35),
          width: getWidth(90),
          //   marginTop: 10,
          // borderWidth: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            // paddingVertical: 10,
            justifyContent: 'flex-start',
            paddingLeft: 10,
            // paddingHorizontal: 20,
            flexDirection: 'row',
            borderColor: '#1469A5',
            height: getHeight(8),
            borderRadius: 10,
            backgroundColor: '#1469A5',
            width: getWidth(80),
            //   marginTop: 10,
            borderWidth: 2,
          }}>
         <View
            style={{
              height: getHeight(5),
              width: getWidth(10),
              marginLeft: 2,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'space-evenly',
              paddingVertical:15,
              alignItems: 'center',
            }}>
            <SvgXml xml={garmin} width={getWidth(5)} height={getHeight(5)} />
            <SvgXml xml={garminText} width={getWidth(7)} height={getHeight(5)} />
            {/* <Image
            source={require('../../assets/images/garmin1.png')}
            style={{
              resizeMode: 'contain',
              width: getWidth(12),
              height: getHeight(5),
              borderRadius: 10,
            }}
          /> */}
          </View>
          <Text
            style={{
              fontFamily: 'Anek_Bangla_medium',
              color: 'white',
              fontWeight: '400',
              paddingLeft: 10,
              fontSize: 17,
              letterSpacing: 2,
              //   textAlign: 'center',
            }}>
            Connect with Garmin
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            // paddingVertical: 10,
            paddingLeft: 10,
            justifyContent: 'flex-start',
            borderColor: '#000000',
            height: getHeight(8),
            borderRadius: 10,
            backgroundColor: '#000000',
            width: getWidth(80),
            flexDirection: 'row',
            // padding:0,
            // paddingHorizontal:25,
            //   marginTop: 10,
            borderWidth: 1,
          }}>
         <View
            style={{
              height: getHeight(5),
              width: getWidth(10),
              marginLeft: 2,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingVertical:15,
              alignItems: 'center',
            }}>
            <SvgXml
              xml={appleBlack}
              width={getWidth(8)}
              height={getHeight(5)}
              style={{borderRadius: 20}}
            />
          </View>
          {/* <Image
            source={require('../../assets/images/appleLogo.png')}
            style={{
              resizeMode: 'contain',
              width: getWidth(12),
              height: getHeight(5),
              borderRadius: 10,
            }}
          /> */}
          <Text
            style={{
              fontFamily: 'Anek_Bangla_medium',
              color: 'white',
              fontWeight: '400',
              paddingLeft: 10,
              fontSize: 17,
              letterSpacing: 2,
              //   textAlign: 'center',
            }}>
            Connect with Apple
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            // paddingVertical: 10,
            justifyContent: 'flex-start',
            paddingLeft: 10,
            borderColor: '#00A9B9',
            height: getHeight(8),
            flexDirection: 'row',
            borderRadius: 10,
            backgroundColor: '#00A9B9',
            width: getWidth(80),
            //   marginTop: 10,
            borderWidth: 1,
          }}>
          <View
            style={{
              height: getHeight(5),
              width: getWidth(10),
              marginLeft: 2,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml xml={fitbit} width={getWidth(8)} height={getHeight(5)} />
          </View>
          {/* <Image
            source={require('../../assets/images/garmin.png')}
            style={{
              resizeMode: 'contain',
              width: getWidth(12),
              height: getHeight(5),
              borderRadius: 10,
            }}
          
          /> */}
          <Text
            style={{
              fontFamily: 'Anek_Bangla_medium',
              color: 'white',
              fontWeight: '400',
              paddingLeft: 10,
              fontSize: 17,
              letterSpacing: 2,
              //   textAlign: 'center',
            }}>
            Connect with Fitbit
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          // paddingVertical: 10,
          justifyContent: 'flex-end',
          borderColor: 'red',
          height: getHeight(19),
          width: getWidth(90),
          //   marginTop: 10,
          //   borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp19')}
          style={{
            height: 55,
            // margin: 12,
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
              fontFamily: 'Anek_Bangla_medium',
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
            }}>
            N E X T
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Connectwatch;
