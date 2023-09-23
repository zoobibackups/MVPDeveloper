import React from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Platform,
} from 'react-native';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const WhySchedule = () => {
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
          //   borderWidth: 1,
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
              //   borderWidth: 1,
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
          //   paddingVertical: 10,
          height: getHeight(7),
          borderColor: 'red',
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
          }}>
          W H Y I T I S I M P O R T A N T T O H A V E A
        </Text>
        <Text
          style={{
            fontFamily: 'AnekBangla-Medium',
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
            // textDecorationLine:'underline',
            textAlign: 'center',
          }}>
          S C H E D U L E ?
        </Text>
      </View>
      <View
        style={{
          width: getWidth(90),
          //   borderWidth: 1,
          borderColor: 'red',
          marginTop: 10,
        }}>
        <Text>
          Scheduling your meals can be beneficial for several reasons when it
          comes to achieving your goals. Here are a few reasons:
        </Text>
      </View>
      <ScrollView style={{borderColor: 'green', width: getWidth(90)}}>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          1. Scheduling your meals can be beneficial for several reasons when it
          comes to achieving your goals. Here are a few reasons: Helps with
          portion control: When you have a set meal schedule, it can help you
          plan your portions and make sure you're not overeating or
          under-eating. This can be especially helpful if you're trying to lose
          weight or maintain a healthy diet.
        </Text>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          2. Provides structure and routine: Having a consistent meal schedule
          can provide structure to your day, which can be helpful if you're
          trying to establish healthy habits or stick to a particular routine.
          This can also help prevent mindless snacking or skipping meals, which
          can sabotage your goals.
        </Text>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          3. Optimizes energy levels: By scheduling your meals, you can ensure
          that you're fueling your body with the nutrients it needs throughout
          the day. This can help keep your energy levels stable and prevent dips
          in energy that can lead to fatigue or lack of focus.
        </Text>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          4. Helps with meal planning and preparation: When you have a meal
          schedule, it can be easier to plan and prepare your meals in advance.
          This can save you time and money, and also help you make healthier
          food choices by avoiding last-minute takeout or convenience foods.
          Overall, scheduling your meals can be a helpful tool for achieving
          your goals, whether they are related to weight loss, fitness, or
          overall health and wellness.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default WhySchedule;
