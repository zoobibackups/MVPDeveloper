import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { preformly } from '../../assets/svg';

const WhySchedule2 = () => {
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
          fontFamily: 'Modak_regular',
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
            width: getWidth(70),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
          height: getHeight(11),
          width: getWidth(70),
          borderColor: 'red',
          //   borderWidth: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: 'black',
            fontWeight: '400',
            fontSize: 18,
            textAlign: 'center',
          }}>
          WHY IT IS IMPORTANT TO HAVE A SCHEDULE?
        </Text>
      </View>
      <ScrollView style={{width: getWidth(90)}}>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_light',
            color: 'grey',
            fontWeight: '400',
            fontSize: 16,
            textAlign: 'left',
          }}>
          Having an exercise schedule is beneficial because it helps you
          establish a regular routine, promotes consistency and accountability,
          improves physical and mental health, and increases the likelihood of
          achieving fitness goals.
        </Text>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_light',
            color: 'grey',
            fontWeight: '400',
            fontSize: 16,
            textAlign: 'left',
            paddingLeft: 10,
            paddingTop: 20,
          }}>
          1. Exercise schedule promotes consistency and accountability: When you
          have a set schedule for exercising, you are more likely to stick to it
          and make it a habit. It provides structure and routine to your day,
          which can help you stay on track and avoid skipping workouts.
          Additionally, having a schedule can make you feel more accountable for
          your fitness goals, as you have a plan to follow and a sense of
          responsibility to stick to it.
        </Text>
        <Text
          style={{
            fontFamily: 'Anek_Bangla_light',
            color: 'grey',
            fontWeight: '400',
            fontSize: 16,
            textAlign: 'left',
            paddingLeft: 10,
            paddingTop: 20,
          }}>
          2. It improves physical and mental health: Regular exercise has
          numerous benefits for both physical and mental health. It can improve
          cardiovascular health, increase muscle strength and endurance, reduce
          the risk of chronic diseases, and even enhance cognitive function.
          Exercise has also been shown to reduce symptoms of depression and
          anxiety and improve overall mood and self-esteem. It increases the
          likelihood of achieving fitness goals: When you have a specific
          exercise schedule, you are more likely to achieve your fitness goals.
          This is because you have a plan in place to reach your goals and can
          track your progress over time. Additionally, a schedule can help you
          stay motivated and focused on your goals, as you have a clear plan for
          how to get there. By following a consistent exercise schedule, you can
          increase your chances of reaching your desired level of fitness.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default WhySchedule2;
