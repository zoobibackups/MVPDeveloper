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
import {Search} from 'react-native-feather';
import {PureRoundedCheckbox} from 'react-native-rounded-checkbox';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const ProfileSetting6 = () => {
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
              PROFILE OVERVIEW
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
            marginTop: 10,
            justifyContent: 'center',
            //   alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'grey',
              fontWeight: '500',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Lifetime statistics
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HistoryAndProgress')}>
          <LinearGradient
            style={{
              width: getWidth(90),
              borderRadius: 20,

              height: getHeight(25),
              borderColor: 'grey',
              backgroundColor: 'white',
              borderWidth: 1,
              shadowColor: 'rgba(103, 128, 159)',

              // elevation: 10,
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
        </TouchableOpacity>

        <View
          style={{
            //   borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            marginTop: 10,
            justifyContent: 'center',
            //   alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'grey',
              fontWeight: '500',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Daily statitics
          </Text>
        </View>

        <LinearGradient
          style={{
            width: getWidth(90),
            borderRadius: 20,

            height: getHeight(25),
            borderColor: 'grey',
            backgroundColor: 'white',
            borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            // elevation: 10,
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
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(40),
            marginTop: 20,
            justifyContent: 'space-evenly',
            // paddingHorizontal: 5,
            // flexDirection: 'row',
            //   alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Plans')}
            style={{
              width: getWidth(90),
              borderRadius: 10,

              height: getHeight(7),
              //   borderColor: '#F5F5F5',
              backgroundColor: '#1B1561',
              // borderWidth: 1,
              //   shadowColor: 'rgba(103, 128, 159)',

              //   elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'white',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Upgrade My Account
            </Text>

            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/forwardWhite.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('ChangePreferenceTraining')}
            style={{
              width: getWidth(90),
              borderRadius: 10,

              height: getHeight(7),
              //   borderColor: '#F5F5F5',
              backgroundColor: '#1B1561',
              // borderWidth: 1,
              //   shadowColor: 'rgba(103, 128, 159)',

              //   elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'white',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Change preferences
            </Text>

            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/forwardWhite.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('ChangeGoalTraining')}
            style={{
              width: getWidth(90),
              borderRadius: 10,

              height: getHeight(7),
              //   borderColor: '#F5F5F5',
              backgroundColor: '#1B1561',
              // borderWidth: 1,
              //   shadowColor: 'rgba(103, 128, 159)',

              //   elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'white',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Change mission/goal
            </Text>

            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/forwardWhite.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateWeightTraining')}
            style={{
              width: getWidth(90),
              borderRadius: 10,

              height: getHeight(7),
              //   borderColor: '#F5F5F5',
              backgroundColor: '#1B1561',
              // borderWidth: 1,
              //   shadowColor: 'rgba(103, 128, 159)',

              //   elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'white',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Update my weight
            </Text>

            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/forwardWhite.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('UpdateWeightTraining')}
            style={{
              width: getWidth(90),
              borderRadius: 10,

              height: getHeight(7),
              //   borderColor: '#F5F5F5',
              backgroundColor: '#1B1561',
              // borderWidth: 1,
              //   shadowColor: 'rgba(103, 128, 159)',

              //   elevation: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'AnekBangla-Medium',
                color: 'white',
                fontWeight: '400',
                fontSize: 17,
              }}>
              Change information
            </Text>

            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/forwardWhite.png')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default ProfileSetting6;
