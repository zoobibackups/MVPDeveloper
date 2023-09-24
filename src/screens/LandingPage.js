import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { verticalScale } from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import { apple, preformly, training } from '../../assets/svg';
import fonts from '../Constants/fonts';
import theme from '../Constants/theme';
import { getHeight, getWidth } from '../functions/CommonFunctions';

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
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    // locations={{x:0,y:0.5,z:0.6}}
    // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
    >
      {/* <View> */}
      <View style={{ alignItems: 'center' }}>
        <SvgXml
          width={getWidth(45)}
          height={getHeight(15)}
          xml={preformly}
          style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}
        />

        <Text
          style={styles.welcomeText}>
          WELCOME
        </Text>
      </View>
      <View style={{ alignItems: 'center', paddingVertical: verticalScale(30) }}>
        <Text
          style={styles.subText}>
          HOW WOULD YOU LIKE TO PROCEED?
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          height: '50%',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
        }}>
        <TouchableOpacity
          onPress={() => {
            setFocus2(false), setFocus(true), navigation.navigate('Home');
          }}

          style={customstyle}>
          <SvgXml width={getWidth(15)} height={getHeight(12)} xml={apple} />

          <Text
            style={styles.buttonText
            }>
            Food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFocus2(true),
              setFocus(false),
              navigation.navigate('TrainingLogIn');
          }}
          // onBlur={() => setFocus(false)}
          style={customstyle2}>
          <SvgXml width={getWidth(15)} height={getHeight(12)} xml={training} />

          <Text
            style={styles.buttonText}>
            Training
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: '500',
    fontSize: RFValue(15),
    letterSpacing: RFValue(3)
  },
  subText: {
    fontFamily: 'AnekBangla-Medium',
    color: theme.blueColor,
    fontWeight: '600',
    fontSize: RFValue(13),
    textAlign: 'center',
    letterSpacing: RFValue(1.4)
  },
  buttonText:{
    fontFamily: fonts.AnekBanglaMedium,
    color: theme.blackColor,
    fontWeight: '400',
    fontSize: RFValue(20),
    letterSpacing: RFValue(1.4),
    includeFontPadding:false,
  },
  change: {
    width: getWidth(58),
    borderWidth: 2,
    borderColor: '#1B1561',
    height: getHeight(20),
    borderRadius: 20,
    backgroundColor: '#0000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === 'android' ? 0 : 5,
    // marginTop:40
  },
  noChange: {
    width: getWidth(58),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    height: getHeight(20),
    borderRadius: RFValue(20),
    backgroundColor: '#0000',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(103, 128, 159, 0.5)', // Adjust the shadow color as needed
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset as needed
    shadowOpacity: 1, // Adjust the shadow opacity as needed
    shadowRadius: 10, // Adjust the shadow radius as needed
    elevation: Platform.OS === 'android' ? 0 : 5,
    // marginTop:20
  },
});

export default LandingPage;
