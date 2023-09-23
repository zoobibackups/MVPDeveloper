import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {backwardBlack, noodles, preformly} from '../../assets/svg';

const Instruction = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title:
        'Heat 3 tablespoons olive oil and about a teaspoon of black pepper in a medium skillet over medium-low heat until ingredients are fragrant and pepper is barely starting to sizzle, about 1 minute. Set aside.',
    },
  ];
  const DATA2 = [
    {
      id: '1',
      title:
        'Place spaghetti in a large skillet and cover with water. Season with a small pinch of salt, then bring to a boil over high heat, prodding spaghetti occasionally with a fork or wooden spoon to prevent it from clumping. Cook until spaghetti is al dente (typically about 1 minute less than the package recommends). Transfer 2 to 3 tablespoons of pasta cooking water to the skillet with the olive oil/pepper mixture. Stir in butter. Using tongs, lift spaghetti and transfer it to the oil/butter mixture.',
    },
  ];
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
              borderRadius: 45,
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
                // textTransform: 'uppercase',
                letterSpacing: 3,
              }}>
              DIRECTIONS
            </Text>
          </View>
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
              fontWeight: '400',
              fontSize: 22,
              letterSpacing: 3,
              paddingTop: 10,
            }}>
            Instructions
          </Text>
        </View>
        <View
          style={{
            //   borderWidth: 1,
            borderRadius: 20,
            marginTop: 19,
            width: getWidth(95),
            height: getHeight(30),
            // backgroundColor: '#1B1561',
            justifyContent: 'center',
            //   paddingTop: 10,
            //   paddingLeft: 10,
            alignItems: 'center',
            // marginTop:60
            //   flexDirection:'row'
          }}>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 20,
              width: getWidth(90),
              height: getHeight(25),
              // backgroundColor: '#1B1561',
              justifyContent: 'space-evenly',
              //   paddingTop: 10,
              //   paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home5')}>
              <SvgXml
                width={getWidth(70)}
                height={getHeight(25)}
                xml={noodles}
              />
              {/* <Image
                source={require('../../assets/images/noodles.png')}
                style={{
                  // resizeMode: 'contain',
                  width: getWidth(70),
                  height: getHeight(25),
                  borderRadius: 20,
                }}
              /> */}
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 22,
              textAlign: 'center',
              letterSpacing: 2,
              // paddingVertical: 15,
              paddingTop: 8,
            }}>
            CACIO E PEPE
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              width: getWidth(95),
              // borderWidth: 1,
              borderColor: 'red',
              height: getHeight(8),
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingTop: 5,
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 25,
                textAlign: 'center',
                // paddingVertical: 5,
              }}>
              Step One:
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'AnekBangla-Medium',
                  paddingLeft: 12,
                  fontWeight: '400',
                  letterSpacing: 2,
                }}>
                {item.title}
              </Text>
            )}
          />
          <View
            style={{
              flexDirection: 'row',
              width: getWidth(95),
              // borderWidth: 1,
              borderColor: 'red',
              height: getHeight(10),
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingTop: 12,
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 25,
                textAlign: 'center',
                // paddingVertical: 5,
              }}>
              Step Two:
            </Text>
          </View>
          <FlatList
            data={DATA2}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'AnekBangla-Medium',
                    fontWeight: '400',
                    paddingLeft: 12,
                    letterSpacing: 2,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'AnekBangla-Bold',
                    fontWeight: '700',
                    paddingLeft: 12,
                  }}>
                  {item.id}
                </Text>
              </View>
            )}
          />
        </ScrollView>
      </LinearGradient>
    </ScrollView>
  );
};

export default Instruction;
