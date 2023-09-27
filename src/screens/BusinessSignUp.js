import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { hideEye, preformly } from '../../assets/svg';
import KeyBoardHandle from '../Components/KeyboardHandle';
import { getHeight, getWidth } from '../functions/CommonFunctions';
import textStyles, { globalstyles } from '../styles/globalestyles';
import theme from '../Constants/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const BusinessSignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [passowrd, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [confirmPassword, setConfirmPassowrd] = useState('');
  return (
    <KeyBoardHandle>
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
         
        >
        
          <SvgXml
            width={getWidth(45)}
            height={getHeight(8)}
            xml={preformly}
            style={{marginTop: Platform.OS === 'ios' ? 20 : 0}}
          />
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            BUSINESS SIGN UP
          </Text>
          <View
            style={{
              paddingVertical: 10,
              height: getHeight(10),
              borderColor: 'red',
              //   borderWidth: 1,
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                letterSpacing: 2,
              }}>
              REGISTER AS A BUSINESS
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              height: getHeight(65),
              width: getWidth(90),
              borderColor: 'red',
              //   borderWidth: 1,
            }}>
            <TextInput
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="Email address"
              // keyboardType="numeric"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="Full name"
              // keyboardType="numeric"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              onChangeText={num => setNumber(num)}
              value={number}
              placeholder="Number of active client"
              // keyboardType="numeric"
              placeholderTextColor="grey"
            />
            <View
              style={globalstyles.inputContainer}>
              <TextInput
                style={globalstyles.textInputStyle}
                onChangeText={text => setPassword(text)}
                value={passowrd}
                placeholder="Password"
                secureTextEntry={show}
                // keyboardType="numeric"
                placeholderTextColor="grey"
              />
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show ? (
                  <Image
                    source={require('../../assets/images/show-eye.png')}
                    style={{
                      resizeMode: 'contain',
                      height: getHeight(6),
                      width: getWidth(6),
                    }}
                  />
                ) : (
                  <SvgXml xml={hideEye} />
                
                )}
              </TouchableOpacity>
            </View>
            <View
               style={globalstyles.inputContainer}>
              <TextInput
                style={globalstyles.textInputStyle}
                onChangeText={text => setConfirmPassowrd(text)}
                value={confirmPassword}
                placeholder="Confirm password"
                secureTextEntry={show1}
                // keyboardType="numeric"
                placeholderTextColor="grey"
              />
              <TouchableOpacity onPress={() => setShow1(!show1)}>
                {show1 ? (
                  <Image
                    source={require('../../assets/images/show-eye.png')}
                    style={{
                      resizeMode: 'contain',
                      height: getHeight(6),
                      width: getWidth(6),
                    }}
                  />
                ) : (
                  <SvgXml xml={hideEye} />
                  
                )}
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 50}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LogIn2')}
                style={globalstyles.buttonStyle}>
                <Text
                  style={{...textStyles.lightText, color:theme.whiteColor}}>
                  Create profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyBoardHandle>
  );
};
const styles = StyleSheet.create({
  input: {
    ...globalstyles.textInputStyle,
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    paddingLeft:RFValue(26),
    width:getWidth(85),
    alignSelf:"center",
    borderRadius: 20,
    borderColor: '#1B1561',
    color: 'grey',
  },
});
export default BusinessSignUp;
