import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const HistoryAndProgress = () => {
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
              Workouts
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
            Basis for development of body
          </Text>
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Bold',
              color: 'black',
              fontWeight: '600',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Core
          </Text>
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Weight
          </Text>
          <TouchableOpacity
            style={undefined}
            onPress={() => navigation.navigate('DetailedAndProgress2')}>
            <Image
              style={{
                resizeMode: 'contain',
                // width: getWidth(10),
                // borderWidth: 1,
                borderColor: 'red',
                // height: getHeight(2),
              }}
              source={require('../../assets/images/add.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,

            borderColor: 'gray',
            width: getWidth(90),
            height: getHeight(5),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Body fats
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>

        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Bold',
              color: 'black',
              fontWeight: '600',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Lifts
          </Text>
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Squats
          </Text>
          <TouchableOpacity
            style={undefined}
            onPress={() => navigation.navigate('DetailedAndProgress')}>
            <Image
              style={{
                resizeMode: 'contain',
                // width: getWidth(10),
                // borderWidth: 1,
                borderColor: 'red',
                // height: getHeight(2),
              }}
              source={require('../../assets/images/add.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Bench Press
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Deadlift
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Overhead press
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,

            borderColor: 'gray',
            width: getWidth(90),
            height: getHeight(5),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Add lift/ exercise
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>

        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Bold',
              color: 'black',
              fontWeight: '600',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Lifts
          </Text>
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Squats
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Bench Press
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Deadlift
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'green',
            width: getWidth(90),
            height: getHeight(4),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Overhead press
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,

            borderColor: 'gray',
            width: getWidth(90),
            height: getHeight(5),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 16,
              letterSpacing: 2,
            }}>
            Add lift/ exercise
          </Text>
          <Image
            style={{
              resizeMode: 'contain',
              // width: getWidth(10),
              // borderWidth: 1,
              borderColor: 'red',
              // height: getHeight(2),
            }}
            source={require('../../assets/images/add.png')}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default HistoryAndProgress;
