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
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import KeyBoardHandle from '../Components/KeyboardHandle';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const LogIn2 = () => {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
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
            fontFamily: 'Modak_regular',
            color: '#1B1561',
            fontWeight: '400',
            fontSize: 30,
            marginTop: Platform.OS === 'ios' ? 20 : 0,
          }}>
          Preformly
        </Text> */}
        <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: 'black',
            fontWeight: '400',
            fontSize: 18,
            letterSpacing: 2,
          }}>
          LOG IN
        </Text>
      </View>
      <KeyBoardHandle>
        <View
          style={{
            paddingVertical: 10,
            height: getHeight(70),
            width: getWidth(90),
            borderColor: 'red',
            // borderWidth: 1,
            //   justifyContent:'center'
            paddingTop: 90,
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
            <Image
              source={require('../../assets/images/mail.png')}
              style={{resizeMode: 'contain'}}
            />
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
              placeholder="Email"
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
            <Image
              source={require('../../assets/images/lock.png')}
              style={{resizeMode: 'contain'}}
            />
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
              <Image
                source={require('../../assets/images/hide-eye.png')}
                style={{resizeMode: 'contain'}}
              />
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
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 18,
                  letterSpacing: 2,
                }}>
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyBoardHandle>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 2,
          // borderWidth: 1,
          borderColor: 'red',
          height: getHeight(7),

          width: getWidth(90),
        }}>
        <Text
          style={{
            color: '#1B1561',
            fontSize: 14,
            fontFamily: 'Anek_Bangla_light',
            fontWeight: '400',
            textAlign: 'center',
            letterSpacing: 2,
          }}>
          TERMS AND CONDITIONS
        </Text>
      </View>
    </LinearGradient>
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

export default LogIn2;
