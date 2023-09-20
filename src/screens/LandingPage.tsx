import React from 'react';
import {useState} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {apple, preformly, training} from '../../assets/svg';

const LandingPage = () => {
  const [focus, setFocus] = useState(true);
  const [focus2, setFocus2] = useState(false);
  const customstyle = focus ? styles.change : styles.noChange;
  const customstyle2 = focus2 ? styles.change : styles.noChange;

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
      {/* <View> */}
      <View style={{alignItems: 'center'}}>
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
          }}>
          Welcome
        </Text>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 20}}>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: '#1B1561',
            fontWeight: '600',
            fontSize: 22,
            textAlign: 'center',
          }}>
          How would you like to proceed?
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          // paddingVertical: 5,
          // borderWidth: 1,
          borderColor: 'red',
          height: '50%',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
        }}>
        <TouchableOpacity
          onPress={() => {
            setFocus2(false), setFocus(true), navigation.navigate('Home');
          }}
          // onBlur={() => setFocus(false)}
          style={customstyle}>
          <SvgXml width={getWidth(15)} height={getHeight(12)} xml={apple} />
          {/* <Image
            style={{
              resizeMode: 'contain',
              width: getWidth(15),
              height: getHeight(12),
            }}
            source={require('../../assets/images/apple.png')}
          /> */}
          <Text
            style={{
              fontFamily: 'Anek_Bangla_semibold',
              color: 'black',
              fontWeight: '700',
              fontSize: 25,
            }}>
            Food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => { setFocus2(true), setFocus(false),navigation.navigate("ChangePreference2") }}
          onPress={() => {
            setFocus2(true),
              setFocus(false),
              navigation.navigate('TrainingLogIn');
          }}
          // onBlur={() => setFocus(false)}
          style={customstyle2}>
          <SvgXml width={getWidth(15)} height={getHeight(12)} xml={training} />
          {/* <Image
            style={{
              resizeMode: 'contain',
              width: getWidth(15),
              height: getHeight(12),
            }}
            source={require('../../assets/images/training.png')}
          /> */}
          <Text
            style={{
              fontFamily: 'Anek_Bangla_light',
              color: 'black',
              fontWeight: '500',
              fontSize: 25,
            }}>
            Training
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  change: {
    width: getWidth(58),
    borderWidth: 2,
    borderColor: '#1B1561',
    height: getHeight(20),
    borderRadius: 20,
    backgroundColor: 'transparent',
    // shadowColor: 'rgba(103, 128, 159)',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 10,
    // elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
    shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === 'android' ? 0 : 5,
    // marginTop:40
  },
  noChange: {
    width: getWidth(58),
    borderWidth: 2,
    borderColor: 'rgba(103, 128, 159,0.1)',
    height: getHeight(20),
    borderRadius: 20,
    backgroundColor: 'transparent',
    // shadowColor: 'rgba(103, 128, 159)',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 10,
    // elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
    shadowOffset: {width: 0, height: 5}, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === 'android' ? 0 : 5,
    // marginTop:20
  },
});

export default LandingPage;
