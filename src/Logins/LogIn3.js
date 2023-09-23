import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import KeyBoardHandle from '../Components/KeyboardHandle';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {
  Email,
  appleLogo,
  backward,
  facebook,
  google,
  hideEye,
  lock,
  mail,
  preformly,
} from '../../assets/svg';

const LogIn3 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  return (
    <KeyBoardHandle>
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
        <View
          style={{
            alignItems: 'center',
            //   borderWidth: 1,
            borderColor: 'red',
            justifyContent: 'space-between',
            width: getWidth(90),
            height: getHeight(15),
          }}>
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
          <Text
            style={{
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            LOG IN
          </Text>
        </View>
        {/* <KeyBoardHandle> */}
        <View
          style={{
            // paddingVertical: 10,
            height: getHeight(50),
            width: getWidth(90),
            borderColor: 'red',
            // borderWidth: 1,
            //   justifyContent:'center'
            paddingTop: 40,
          }}>
          <View
            style={{
              height: 55,
              margin: 8,
              borderWidth: 1,
              // padding: 10,
              borderRadius: 20,
              borderColor: '#1B1561',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              // paddingLeft:5
            }}>
            <SvgXml xml={Email} />
            {/* <Image
              source={require('../../assets/images/mail.png')}
              style={{resizeMode: 'contain'}}
            /> */}
            <TextInput
              style={{
                height: 53,
                //   margin: 8,
                // borderWidth: 1,
                // padding: 10,
                //   justifyContent:'flex-start',
                borderRadius: 20,
                width: getWidth(70),
                borderColor: '#1B1561',
                color: 'grey',

                paddingLeft: 10,
              }}
              onChangeText={text => setEmail(text)}
              placeholderTextColor="grey"
              value={email}
              placeholder="Email Address"
              // secureTextEntry={show}
              // keyboardType="numeric"
            />
          </View>
          <View
            style={{
              height: 55,
              margin: 8,
              borderWidth: 1,
              // padding: 10,
              borderRadius: 20,
              borderColor: '#1B1561',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 5,
            }}>
            <SvgXml xml={lock} />
            {/* <Image
              source={require('../../assets/images/lock.png')}
              style={{resizeMode: 'contain'}}
            /> */}
            <TextInput
              style={{
                height: 53,
                // margin: 12,
                //   borderWidth: 1,
                // padding: 10,
                //   justifyContent:'flex-start',
                borderRadius: 20,
                width: getWidth(65),
                borderColor: '#1B1561',
                color: 'grey',
                paddingLeft: 8,
              }}
              onChangeText={text => setPassword(text)}
              placeholderTextColor="grey"
              value={password}
              placeholder="Password"
              secureTextEntry={show1}
              // keyboardType="numeric"
            />
            <TouchableOpacity
              onPress={() => setShow1(!show1)}
              style={{
                borderColor: 'red',
                height: getHeight(7),
                justifyContent: 'center',
              }}>
              <SvgXml xml={hideEye} />
              {/* <Image
                source={require('../../assets/images/hide-eye.png')}
                style={{resizeMode: 'contain'}}
              /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 10,
            }}>
            <Text style={{color: '#1B1561', textDecorationLine: 'underline'}}>
              Forgot Password?
            </Text>
          </View>
          <View
            style={{
              borderColor: 'red',
              height: getHeight(30),
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: 55,
                margin: 12,
                borderWidth: 1,
                padding: 14,
                borderRadius: 20,
                borderColor: '#1B1561',
                backgroundColor: '#1B1561',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 18,
                  letterSpacing: 2,
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </KeyBoardHandle> */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            //   paddingVertical: 2,
            // borderWidth: 1,
            borderColor: 'blue',
            height: getHeight(24),
            width: getWidth(90),
            //   position:'absolute'
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 2,
              //   borderWidth: 1,
              borderColor: 'green',
              height: getHeight(5),
              width: getWidth(90),
              //   position:'absolute'
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/images/line.png')}
              style={{resizeMode: 'contain'}}
            />
            <Text
              style={{
                fontFamily: 'AnekBangla-Medium',
                color: 'grey',
                fontWeight: '500',
                fontSize: 18,
                letterSpacing: 2,
              }}>
              or log in with
            </Text>
            <Image
              source={require('../../assets/images/line.png')}
              style={{resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              //   paddingVertical: 2,
              //   borderWidth: 1,
              borderColor: 'yellow',
              height: getHeight(12),
              width: getWidth(90),
              //   position:'absolute'
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                width: getWidth(19.5),
                height: getHeight(9.5),
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml xml={facebook} />
              {/* <Image
                source={require('../../assets/images/fb.png')}
                style={{resizeMode: 'contain'}}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: getWidth(19.5),
                height: getHeight(9.5),
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml xml={google} />
              {/* <Image
                source={require('../../assets/images/google.png')}
                style={{resizeMode: 'contain'}}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: getWidth(19.5),
                height: getHeight(9.5),
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml xml={appleLogo} />
              {/* <Image
                source={require('../../assets/images/Iphone.png')}
                style={{resizeMode: 'contain'}}
              /> */}
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#1B1561',
              fontSize: 14,
              fontFamily: 'AnekBangla-Regular',
              fontWeight: '400',
              textAlign: 'center',
              paddingTop: 10,
              letterSpacing: 2,
            }}>
            Terms and conditions
          </Text>
        </View>
      </LinearGradient>
    </KeyBoardHandle>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 14,
    borderRadius: 20,
    borderColor: '#1B1561',
  },
});

export default LogIn3;
