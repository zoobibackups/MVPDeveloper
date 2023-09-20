import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const TrainingLogin = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 30,
          borderColor: 'green',
          // borderWidth: 4,
          height: getHeight(85),
        }}>
        <Image
          source={require('../../assets/images/fruitBG.png')}
          style={styles.backgroundImage}
        />
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            // borderWidth: 1,
            width: getWidth(90),
            height: getHeight(33),
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
              fontWeight: '500',
              fontSize: 20,
              letterSpacing: 2,
            }}>
            Home
          </Text>
        </View>
        {/* <View
          style={{
              borderWidth: 1,
            borderColor: 'red',
            height: getHeight(30),
            width: '90%',
            marginTop: 70,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}> */}
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'red',
            // height: getHeight(40),
            width: getWidth(90),
            // marginTop: 90,
            // justifyContent: "center",
            alignItems: 'center',
            paddingTop: 20,
            height: getHeight(40),
          }}>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 20,
              width: getWidth(63),
              height: getHeight(7),
              // backgroundColor: '#1B1561',
              justifyContent: 'center',
              paddingTop: 10,
              alignItems: 'center',
              // marginTop:60
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LogIn3')}
              style={{
                borderWidth: 1,
                borderRadius: 20,
                width: getWidth(63),
                height: getHeight(7),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                // paddingTop:10,
                alignItems: 'center',
                // marginTop:60
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Anek_Bangla_light',
                  fontWeight: '600',
                  letterSpacing: 2,
                }}>
                LOGIN NOW
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 20,
              width: getWidth(63),
              height: getHeight(7),
              // backgroundColor: '#1B1561',
              justifyContent: 'center',
              paddingTop: 30,
              alignItems: 'center',
              // marginTop:60
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Error1')}
              style={{
                borderWidth: 1,
                borderRadius: 20,
                width: getWidth(63),
                height: getHeight(7),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                // paddingTop:10,
                alignItems: 'center',
                // marginTop:60
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Anek_Bangla_light',
                  fontWeight: '600',
                  letterSpacing: 2,
                }}>
                BUSINESS
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 20,
              width: getWidth(63),
              height: getHeight(7),
              // backgroundColor: '#1B1561',
              justifyContent: 'center',
              paddingTop: 50,
              alignItems: 'center',
              // marginTop:60
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp18')}
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#1B1561',
                width: getWidth(63),
                height: getHeight(7),
                // backgroundColor: '',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#1B1561',
                  fontSize: 17,
                  fontFamily: 'Anek_Bangla_light',
                  fontWeight: '700',
                  letterSpacing: 2,
                }}>
                REGISTER NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </View> */}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 2,
          // borderWidth: 1,
          borderColor: 'red',
          height: getHeight(7),
        }}>
        <Text
          style={{
            color: '#1B1561',
            fontSize: 14,
            fontFamily: 'Anek_Bangla_light',
            fontWeight: '400',
            letterSpacing: 2,
          }}>
          TERMS AND CONDITIONS
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    marginTop: 0,
    height: getHeight(100),
  },
});

export default TrainingLogin;
