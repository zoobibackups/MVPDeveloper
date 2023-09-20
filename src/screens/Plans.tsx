import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {useNavigation} from '@react-navigation/core';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SvgXml} from 'react-native-svg';
import {preformly} from '../../assets/svg';

const Plans = () => {
  const navigation = useNavigation();

  const renderSlides = ({item}) => {
    return (
      <ScrollView>
        <LinearGradient
          style={{
            alignItems: 'center',
            paddingVertical: 15,
            borderColor: 'red',
            height: '110%',
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
                PROFILE OVERVIEW
              </Text>
            </View>
          </View>
          <View
            style={{
              //   flexDirection: 'row',
              // borderWidth: 1,
              marginTop: 10,
              borderColor: 'red',
              width: getWidth(90),
              height: getHeight(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                fontSize: 18,
                letterSpacing: 2,
              }}>
              CHOOSE YOUR PLAN
            </Text>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderColor: 'green',
              width: getWidth(70),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('ProfileTrainingScreen')}
              style={{
                //   borderWidth: 0.5,
                alignItems: 'center',
                borderColor: 'grey',
                // borderRadius: 40,
                justifyContent: 'center',
                width: getWidth(20),
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(30),
                  // borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(15),
                }}
                source={require('../../assets/images/man.png')}
              />
            </TouchableOpacity>
          </View>
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
                fontSize: 14,
                letterSpacing: 2,
              }}>
              Muhammad
            </Text>
          </View>
          {/* <View
          style={{
            borderWidth: 1,
            borderColor: 'green',
            width: getWidth(70),
            height: getHeight(50),
            justifyContent: 'center',
            alignItems: 'center',
          }}> */}
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              // height: getHeight(70),
              width: getWidth(85),
              // justifyContent: 'center',
              borderRadius: 20,
              marginTop: 15,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,

                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderColor: 'grey',
                height: getHeight(15),
                width: getWidth(85),
                // marginBottom:-10,
                backgroundColor: '#1B1561',
                // justifyContent: 'center',
                alignItems: 'center',
                //   paddingBottom: 100,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  // borderWidth: 0.5,
                  borderColor: 'grey',
                  borderRadius: 40,
                  marginTop: -20,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: getWidth(14),
                  height: getHeight(7),
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(10),
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: getHeight(4),
                  }}
                  source={item.image}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 25,
                  letterSpacing: 2,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'white',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                {item.price}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '400',
                paddingTop: 15,
                fontSize: 16,
                paddingLeft: 14,
                textAlign: 'left',
                letterSpacing: 2,
              }}>
              {item.text}
            </Text>
            {/* <ScrollView> */}
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,

                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                paddingTop: 15,
                color: 'black',
                fontWeight: '400',
                fontSize: 16,
                // paddingHorizontal: 1,
                letterSpacing: 2,
              }}>
              {`\u2022 ${item.description}`}
            </Text>
            <View
              style={{
                alignItems: 'center',
                borderColor: 'red',
                // height: getHeight(19),
                justifyContent: 'flex-end',
                // borderWidth:1
              }}>
              <TouchableOpacity
                // onPress={() => navigation.navigate('WeightProgress')}
                style={{
                  height: 55,
                  margin: 12,
                  //   borderWidth: 1,
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
                    fontSize: 18,
                    letterSpacing: 2,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
            {/* </ScrollView> */}
          </View>
          {/* </View> */}
        </LinearGradient>
      </ScrollView>
    );
  };

  const slides = [
    {
      key: '1',
      title: 'Free!',
      text: 'You get the following perks when choosing the STANDARD plan:',
      image: require('../../assets/images/Star.png'),
      backgroundcolor: 'transparent',
      description: '10 monthly meal generations',
      price: 'free to use',
    },
    {
      key: '2',
      description: '10 monthly meal generations',
      title: 'Personal',
      text: 'You get the following perks when choosing the STANDARD plan:',
      image: require('../../assets/images/Diamond.png'),
      backgroundcolor: 'transparent',
      price: '$ 9.99 monthly',
    },
    {
      key: '3',
      description: '10 monthly meal generations',
      title: 'Business',
      text: 'You get the following perks when choosing the STANDARD plan:',
      image: require('../../assets/images/Business.png'),
      price: '$ 9.99 monthly',
      //   backgroundcolor: 'transparent',
    },
  ];
  const [showSlider, setShowSlider] = useState(true);

  return (
    <AppIntroSlider
      data={slides}
      showNextButton={false}
      showDoneButton={false}
      activeDotStyle={{backgroundColor: '#1B1561'}}
      renderItem={renderSlides}
    />
  );
};

export default Plans;
