import { useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import {
  Platform,
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

const SignUp1 = () => {
  const [email, setEmail] = useState<any>('');
  const [name, setName] = useState<any>('');
  const [number, setNumber] = useState<any>('');
  const [passowrd, setPassword] = useState<any>('');
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [confirmPassword, setConfirmPassowrd] = useState<any>('');

  const navigation = useNavigation();
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
        <SvgXml
          width={getWidth(45)}
          height={getHeight(8)}
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
            fontWeight: '500',
            fontSize: 18,
            letterSpacing: 2,
          }}>
          CREATE PROFILE
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
              fontFamily: 'Anek_Bangla_medium',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            REGISTER INFORMATION
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
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Full Name"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email Address"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            onChangeText={num => setNumber(num)}
            value={number}
            placeholder="Phone Number"
            placeholderTextColor="grey"
            // keyboardType="numeric"
          />
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
            }}>
            <TextInput
              style={{
                height: 53,
                //   margin: 8,
                //   borderWidth: 1,
                // padding: 10,
                //   justifyContent:'flex-start',
                borderRadius: 20,
                width: getWidth(70),
                borderColor: '#1B1561',
                color: 'grey',
              }}
              onChangeText={text => setPassword(text)}
              placeholderTextColor="grey"
              value={passowrd}
              placeholder="Password"
              secureTextEntry={show}
              // keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => setShow(!show)}>
              <SvgXml xml={hideEye} />
              {/* <Image
                source={require('../../assets/images/hide-eye.png')}
                style={{resizeMode: 'contain'}}
              /> */}
            </TouchableOpacity>
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
            }}>
            <TextInput
              style={{
                height: 53,
                // margin: 12,
                //   borderWidth: 1,
                // padding: 10,
                //   justifyContent:'flex-start',
                borderRadius: 20,
                width: getWidth(70),
                borderColor: '#1B1561',
                color: 'grey',
              }}
              onChangeText={text => setConfirmPassowrd(text)}
              value={confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={show1}
              // keyboardType="numeric"
              placeholderTextColor="grey"
            />
            <TouchableOpacity onPress={() => setShow1(!show1)}>
              <SvgXml xml={hideEye} />
              {/* <Image
                source={require('../../assets/images/hide-eye.png')}
                style={{resizeMode: 'contain'}}
              /> */}
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 50, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp2')}
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
                width: getWidth(65),
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'white',
                  fontWeight: '500',
                  letterSpacing: 2,
                  fontSize: 18,
                }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
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
    color: 'grey',
  },
});
export default SignUp1;