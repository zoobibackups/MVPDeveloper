import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import {Search} from 'react-native-feather';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {preformly} from '../../assets/svg';

const CreateWorkOut1 = () => {
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
            width: getWidth(80),
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
            BUILD YOUR OWN SCHEDULE
          </Text>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          marginTop: 20,
          borderColor: 'green',
          width: getWidth(90),
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'grey',
            fontWeight: '400',
            fontSize: 16,
            letterSpacing: 2,
          }}>
          Exercise name:
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 20,
          borderColor: 'grey',
          borderRadius: 20,
          width: getWidth(90),
          paddingLeft: 20,
          height: getHeight(8),
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Search size={30} color="#808080" />
        <TextInput
          placeholder="Search muscle group"
          placeholderTextColor="black"
          // value={search}
          // onChangeText={query => setSearch(query)}
          // style={{borderWidth:1}}
        />
      </View>
      <View
        style={{
          // borderWidth: 1,
          marginTop: 20,
          borderColor: 'green',
          width: getWidth(90),
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'grey',
            fontWeight: '400',
            fontSize: 16,
            letterSpacing: 2,
          }}>
          Repetitions
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 20,
          borderColor: 'grey',
          borderRadius: 20,
          width: getWidth(90),
          paddingLeft: 20,
          height: getHeight(8),
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'black',
            fontWeight: '400',
            fontSize: 16,
            letterSpacing: 2,
          }}>
          Repetitions
        </Text>
      </View>
      <View
        style={{
          //   borderWidth: 1,
          marginTop: 20,
          borderColor: 'green',
          width: getWidth(90),

          justifyContent: 'flex-end',
          flexDirection: 'row',
          // alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ActiveWorkOut1')}
          style={{
            height: 50,
            // margin: 12,
            //   borderWidth: 1,
            // padding: 14,
            borderRadius: 20,
            borderColor: '#1B1561',
            backgroundColor: '#1B1561',
            alignItems: 'center',
            justifyContent: 'center',
            width: getWidth(25),
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'white',
              fontWeight: '400',
              fontSize: 20,
              letterSpacing: 2,
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          borderColor: 'red',
          height: getHeight(30),
          justifyContent: 'flex-end',
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
            width: getWidth(70),
          }}>
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'white',
              fontWeight: '400',
              fontSize: 20,
              letterSpacing: 2,
            }}>
            Start your workout
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CreateWorkOut1;
