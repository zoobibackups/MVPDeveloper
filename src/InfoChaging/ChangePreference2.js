import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { getHeight, getWidth } from '../functions/CommonFunctions';

import {
  PureRoundedCheckbox
} from 'react-native-rounded-checkbox';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';
// import Icon from 'react-native-dynamic-vector-icons';

const ChangePreference2 = () => {

  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();
  // var radio_props = [
  //   {value: 0},
  //   //   {label: 'female', value: 1},
  //   //   {label: 'other', value: 2},
  // ];
  return (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 30,
        borderColor: 'red',
        height: '100%',
        backgroundColor: 'white',
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
            width: getWidth(10),
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              width: getWidth(9),
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
            }}>
            C R E A T E P R O F I L E
          </Text>
        </View>
      </View>
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
          What would you like to change?
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          height: getHeight(50),
          width: getWidth(97),
          borderColor: 'red',
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: getWidth(90),
            borderRadius: 20,

            height: getHeight(7),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 17,
              letterSpacing: 2,
            }}>
            How often you work out
          </Text>
          <PureRoundedCheckbox
            // text=""
            isChecked={checked}
            checkedColor="#1B1561"
            // uncheckedColor={uncheckedColor}
            outerStyle={{borderColor: 'white'}}
            onPress={() => setChecked(true)}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/tick.png')}
            />
          </PureRoundedCheckbox>
        </View>
        <View
          style={{
            width: getWidth(90),
            borderRadius: 20,

            height: getHeight(7),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 17,
              letterSpacing: 2,
            }}>
            Dietary preferences
          </Text>
          <PureRoundedCheckbox
            // text=""
            isChecked={checked}
            // checkedColor={checkedColor}
            // uncheckedColor={uncheckedColor}
            outerStyle={{borderColor: 'white'}}
            checkedColor="#1B1561"
            onPress={() => setChecked(!checked1)}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/tick.png')}
            />
          </PureRoundedCheckbox>
        </View>
        <View
          style={{
            width: getWidth(90),
            borderRadius: 20,

            height: getHeight(7),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 17,
              letterSpacing: 2,
            }}>
            Cuisines
          </Text>
          <PureRoundedCheckbox
            // text=""
            isChecked={checked}
            // checkedColor={checkedColor}
            // uncheckedColor={uncheckedColor}
            outerStyle={{borderColor: 'white'}}
            checkedColor="#1B1561"
            onPress={() => setChecked(!checked)}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/tick.png')}
            />
          </PureRoundedCheckbox>
        </View>

        <View
          style={{
            width: getWidth(90),
            borderRadius: 20,

            height: getHeight(7),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 17,
              letterSpacing: 2,
            }}>
            Ingredients to avoid
          </Text>
          <PureRoundedCheckbox
            // text=""
            isChecked={checked}
            // checkedColor={checkedColor}
            // uncheckedColor={uncheckedColor}
            checkedColor="#1B1561"
            outerStyle={{borderColor: 'white'}}
            onPress={() => setChecked(!checked)}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/tick.png')}
            />
          </PureRoundedCheckbox>
        </View>
        <View
          style={{
            width: getWidth(90),
            borderRadius: 20,

            height: getHeight(7),
            borderColor: '#F5F5F5',
            backgroundColor: 'white',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            elevation: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: 'AnekBangla-Medium',
              color: 'black',
              fontWeight: '400',
              fontSize: 17,
            }}>
            Ingredients you prefer
          </Text>
          <PureRoundedCheckbox
            // text=""
            isChecked={checked}
            // checkedColor={checkedColor}
            // uncheckedColor={uncheckedColor}
            checkedColor="#1B1561"
            outerStyle={{borderColor: 'white'}}
            onPress={() => setChecked(!checked)}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(5),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
              }}
              source={require('../../assets/images/tick.png')}
            />
          </PureRoundedCheckbox>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          borderColor: 'red',
          height: getHeight(15),
          justifyContent: 'flex-end',
          backgroundColor: 'white',
          width: getWidth(99),
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangeGoal')}
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
              fontFamily: 'AnekBangla-Medium',
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
export default ChangePreference2;
