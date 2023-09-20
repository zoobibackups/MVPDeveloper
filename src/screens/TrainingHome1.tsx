import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import {Modal} from 'react-native';
import {Navigation} from 'react-native-feather';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {
  bicep,
  chart,
  community,
  custom,
  diary,
  dumble,
  fire,
  flag,
  history,
  man,
  preformly,
  runningMan,
  sleep,
  spark,
} from '../../assets/svg';
import {SvgXml} from 'react-native-svg';

const TrainingHome1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
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
            }}>
            Preformly
          </Text> */}
          <View
            style={{
              flexDirection: 'row',
              //   borderWidth: 1,
              borderColor: 'red',
              width: getWidth(90),
              height: getHeight(10),
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                // borderWidth: 1,
                borderColor: 'green',
                width: getWidth(70),
                justifyContent: 'center',
                // alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_light',
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 16,
                  letterSpacing: 2,
                }}>
                Good Morning,
              </Text>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 26,
                  letterSpacing: 2,
                }}>
                Alex
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileTrainingScreen')}
              style={{
                // borderWidth: 0.5,
                borderColor: 'grey',
                // borderRadius: 40,
                justifyContent: 'center',
                width: getWidth(20),
              }}>
              <SvgXml width={getWidth(20)} xml={man} />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(20),
                  // borderWidth: 1,
                  borderColor: 'red',
                  //   height: getHeight(20),
                }}
                source={require('../../assets/images/man.png')}
              /> */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('StepCounter')}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                marginTop: 20,
                width: getWidth(90),
                height: getHeight(25),
                borderRadius: 20,
                justifyContent: 'center',

                flexDirection: 'row',
                // alignItems: 'center',
              }}>
              <View
                style={{
                  // borderWidth: 1,
                  borderColor: 'grey',
                  // marginTop: 20,
                  width: getWidth(40),
                  height: getHeight(25),
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml
                  width={getWidth(30)}
                  height={getHeight(20)}
                  xml={chart}
                />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    // borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/Chart.png')}
                /> */}
              </View>
              <View
                style={{
                  // borderWidth: 1,
                  borderColor: 'grey',
                  paddingTop: 20,
                  // marginTop: 20,
                  width: getWidth(50),
                  height: getHeight(20),
                  borderRadius: 20,
                  //   justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml width={getWidth(30)} xml={runningMan} />
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(30),
                    // borderWidth: 1,
                    borderColor: 'red',
                    //   height: getHeight(20),
                  }}
                  source={require('../../assets/images/userRun.png')}
                /> */}
                <Text
                  style={{
                    fontFamily: 'Anek_Bangla_medium',
                    color: 'black',
                    fontWeight: '200',
                    fontSize: 15,
                    letterSpacing: 2,
                  }}>
                  Steps
                </Text>
                <View
                  style={{
                    // borderWidth: 1,
                    borderColor: 'grey',
                    paddingLeft: 20,
                    // marginTop: 20,
                    width: getWidth(50),
                    height: getHeight(7),
                    borderRadius: 20,
                    flexDirection: 'row',
                    //   justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                  <View
                    style={{
                      // borderWidth: 1,
                      borderColor: 'grey',
                      // marginTop: 20,
                      width: getWidth(30),
                      height: getHeight(7),
                      borderRadius: 20,
                      //   justifyContent: 'center',
                      // alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: '#282B2A',
                        fontWeight: '600',
                        fontSize: 40,
                        letterSpacing: 2,
                      }}>
                      6,566
                    </Text>
                  </View>
                  <View
                    style={{
                      // borderWidth: 1,
                      borderColor: 'grey',
                      // marginTop: 20,
                      width: getWidth(20),
                      height: getHeight(7),
                      borderRadius: 20,
                      justifyContent: 'center',
                      // alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: '#282B2A',
                        fontWeight: '500',
                        fontSize: 12,
                        letterSpacing: 2,
                      }}>
                      Steps
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    // borderWidth: 1,
                    borderColor: 'grey',
                    paddingLeft: 10,
                    marginTop: 6,
                    width: getWidth(50),
                    height: getHeight(3),
                    borderRadius: 20,
                    // flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: '#9EA6A4',
                      fontWeight: '400',
                      fontSize: 12,
                      letterSpacing: 2,
                    }}>
                    of 10,000 steps
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              height: getHeight(10),
              // justifyContent: 'flex-end',
              // borderWidth: 1,
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('TrainingHome1')}
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
                width: getWidth(80),
              }}>
              <Text
                style={{
                  fontFamily: 'Anek_Bangla_medium',
                  color: 'white',
                  fontWeight: '400',
                  fontSize: 20,
                  letterSpacing: 2,
                }}>
                TO SCHEDULE
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              height: getHeight(40),
              width: getWidth(90),
              marginTop: 10,
              // justifyContent: 'flex-end',
              // borderWidth: 1,
            }}>
            <View
              style={{
                // alignItems: 'center',
                borderColor: 'green',
                height: getHeight(20),
                width: getWidth(90),
                justifyContent: 'space-between',
                //   borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  backgroundColor: '#ebdfd7',
                  // opacity: 0.1,
                  width: getWidth(40),
                  // justifyContent: 'flex-end',
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    // borderWidth: 2,
                    flexDirection: 'row',
                  }}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={fire}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(10),
                      // borderWidth: 1,
                      borderColor: 'red',
                      height: getHeight(3),
                    }}
                    source={require('../../assets/images/fire.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#D2416E',
                      fontWeight: '500',
                      fontSize: 20,
                      letterSpacing: 2,
                    }}>
                    Calories
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    //   borderWidth: 2,
                    //   flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#D2416E',
                      fontWeight: '700',
                      fontSize: 40,
                      letterSpacing: 2,
                    }}>
                    618
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: '#D2416E',
                        fontWeight: '400',
                        fontSize: 16,
                        letterSpacing: 2,
                      }}>
                      kcal
                    </Text>
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  backgroundColor: '#bfbfbc',
                  // opacity: 0.1,
                  width: getWidth(40),
                  // justifyContent: 'flex-end',
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    // borderWidth: 2,
                    flexDirection: 'row',
                  }}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={spark}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(10),
                      // borderWidth: 1,
                      borderColor: 'red',
                      height: getHeight(3),
                    }}
                    source={require('../../assets/images/bolt.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#7042C9',
                      fontWeight: '500',
                      fontSize: 20,
                      letterSpacing: 2,
                    }}>
                    Exercise
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    //   borderWidth: 2,
                    //   flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#7042C9',
                      fontWeight: '700',
                      fontSize: 40,
                      letterSpacing: 2,
                    }}>
                    24
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: '#7042C9',
                        fontWeight: '400',
                        fontSize: 16,
                        letterSpacing: 2,
                      }}>
                      min
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // alignItems: 'center',
                borderColor: 'black',
                height: getHeight(20),
                width: getWidth(90),
                justifyContent: 'space-between',
                //   borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  backgroundColor: '#d6e9dd',
                  // opacity: 0.1,
                  width: getWidth(40),
                  // justifyContent: 'flex-end',
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    //   borderWidth: 2,
                    flexDirection: 'row',
                  }}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={flag}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(10),
                      // borderWidth: 1,
                      borderColor: 'red',
                      height: getHeight(3),
                    }}
                    source={require('../../assets/images/flag.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#0DB1AD',
                      fontWeight: '500',
                      fontSize: 20,
                      letterSpacing: 2,
                    }}>
                    Walking
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    //   borderWidth: 2,
                    //   flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#0DB1AD',
                      fontWeight: '700',
                      fontSize: 40,
                      letterSpacing: 2,
                    }}>
                    10
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: '#0DB1AD',
                        fontWeight: '400',
                        fontSize: 16,
                        letterSpacing: 2,
                      }}>
                      km
                    </Text>
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  borderColor: 'blue',
                  borderRadius: 20,
                  height: getHeight(17),
                  backgroundColor: '#b5c4bc',
                  // opacity: 0.1,
                  width: getWidth(40),
                  // justifyContent: 'flex-end',
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    // borderWidth: 2,
                    flexDirection: 'row',
                  }}>
                  <SvgXml
                    width={getWidth(10)}
                    height={getHeight(3)}
                    xml={sleep}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(10),
                      // borderWidth: 1,
                      borderColor: 'red',
                      height: getHeight(3),
                    }}
                    source={require('../../assets/images/sleep.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#197BD2',
                      fontWeight: '500',
                      fontSize: 20,
                      letterSpacing: 2,
                    }}>
                    Sleep
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(8),
                    // backgroundColor:'#D2416E',
                    //   opacity:0.1,
                    width: getWidth(40),
                    //   justifyContent: 'flex-start',
                    paddingLeft: 5,
                    //   borderWidth: 2,
                    //   flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_bold',
                      color: '#197BD2',
                      fontWeight: '700',
                      fontSize: 40,
                      letterSpacing: 2,
                    }}>
                    8
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: '#197BD2',
                        fontWeight: '400',
                        fontSize: 16,
                        letterSpacing: 2,
                      }}>
                      hrs
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              height: getHeight(45),
              width: getWidth(90),
              marginTop: 10,
              // justifyContent: 'flex-end',
              // borderWidth: 1,
            }}>
            <View
              style={{
                //   alignItems: 'center',
                borderColor: 'red',
                height: getHeight(5),
                width: getWidth(90),
                // marginTop: 10,
                // justifyContent: 'flex-end',
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
                How would you like to proceed:
              </Text>
            </View>
            <View
              style={{
                // alignItems: 'center',
                borderColor: 'green',
                height: getHeight(20),
                width: getWidth(90),
                justifyContent: 'space-between',
                // borderWidth: 1,
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <LinearGradient
                  style={{
                    alignItems: 'center',
                    // borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(17),
                    borderColor: 'grey',
                    backgroundColor: 'white',
                    // borderWidth: 0.5,
                    shadowColor: 'rgba(103, 128, 159)',

                    // elevation: 5,
                    // opacity: 0.1,
                    width: getWidth(40),
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    // borderWidth: 1,
                  }}
                  colors={['#FDFFF4', '#BBC1AD']}
                  start={{x: 0, y: 0}}
                  end={{x: 0.8, y: 0}}
                  // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                  // locations={{x:0,y:0.5,z:0.6}}
                  // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                >
                  <SvgXml
                    width={getWidth(30)}
                    // height={getHeight(3)}
                    xml={dumble}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(30),
                      //   borderWidth: 1,
                      borderColor: 'red',
                      //   height: getHeight(20),
                    }}
                    source={require('../../assets/images/dumbell.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 14,
                      letterSpacing: 2,
                    }}>
                    Workout
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('History1')}>
                <LinearGradient
                  style={{
                    alignItems: 'center',
                    // borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(17),
                    borderColor: '#F5F5F5',
                    backgroundColor: 'white',
                    // borderWidth: 1,
                    shadowColor: 'rgba(103, 128, 159)',

                    // elevation: 5,
                    // opacity: 0.1,
                    width: getWidth(40),
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    // borderWidth: 1,
                  }}
                  colors={['#FDFFF4', '#BBC1AD']}
                  start={{x: 0, y: 0}}
                  end={{x: 0.8, y: 0}}
                  // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                  // locations={{x:0,y:0.5,z:0.6}}
                  // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                >
                  <SvgXml
                    width={getWidth(30)}
                    // height={getHeight(3)}
                    xml={history}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(20),
                      //   borderWidth: 1,
                      borderColor: 'red',
                      //   height: getHeight(20),
                    }}
                    source={require('../../assets/images/time.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 14,
                      letterSpacing: 2,
                    }}>
                    Training history
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                // alignItems: 'center',
                borderColor: 'green',
                height: getHeight(20),
                width: getWidth(90),
                justifyContent: 'space-between',
                //   borderWidth: 1,
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <LinearGradient
                  style={{
                    alignItems: 'center',
                    // borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(17),
                    borderColor: '#F5F5F5',
                    backgroundColor: 'white',
                    // borderWidth: 1,
                    shadowColor: 'rgba(103, 128, 159)',

                    // elevation: 5,
                    // opacity: 0.1,
                    width: getWidth(40),
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    // borderWidth: 1,
                  }}
                  colors={['#FDFFF4', '#BBC1AD']}
                  start={{x: 0, y: 0}}
                  end={{x: 0.8, y: 0}}
                  // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                  // locations={{x:0,y:0.5,z:0.6}}
                  // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                >
                  <SvgXml
                    width={getWidth(30)}
                    // height={getHeight(3)}
                    xml={community}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(30),
                      //   borderWidth: 1,
                      borderColor: 'red',
                      //   height: getHeight(20),
                    }}
                    source={require('../../assets/images/community.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 14,
                      letterSpacing: 2,
                    }}>
                    Community
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('TrainingDiary2')}>
                <LinearGradient
                  style={{
                    alignItems: 'center',
                    // borderColor: 'blue',
                    borderRadius: 20,
                    height: getHeight(17),
                    borderColor: '#F5F5F5',
                    backgroundColor: 'white',
                    // borderWidth: 1,
                    shadowColor: 'rgba(103, 128, 159)',

                    // elevation: 5,
                    // opacity: 0.1,
                    width: getWidth(40),
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    // borderWidth: 1,
                  }}
                  colors={['#FDFFF4', '#BBC1AD']}
                  start={{x: 0, y: 0}}
                  end={{x: 0.8, y: 0}}
                  // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                  // locations={{x:0,y:0.5,z:0.6}}
                  // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                >
                  <SvgXml
                    width={getWidth(20)}
                    height={getHeight(9)}
                    xml={diary}
                  />
                  {/* <Image
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(20),
                      //   borderWidth: 1,
                      borderColor: 'red',
                      //   height: getHeight(20),
                    }}
                    source={require('../../assets/images/diary.png')}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 14,
                      letterSpacing: 2,
                    }}>
                    Training diary
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
              <LinearGradient
                style={styles.modalView}
                colors={['#FDFFF4', '#BBC1AD']}
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0}}
                // start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                // locations={{x:0,y:0.5,z:0.6}}
                // start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
              >
                <View style={{borderColor: 'red', paddingTop: 5}}>
                  <Text style={styles.topBar} />
                </View>
                <View
                  style={{
                    borderColor: 'red',
                    paddingTop: 10,
                    // borderWidth: 1,
                    width: getWidth(70),
                    height: getHeight(8),
                    justifyContent: 'center',
                    // paddingHorizontal:8,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',

                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '400',
                      fontSize: 17,
                      textAlign: 'center',
                      // paddingVertical: 10,
                      letterSpacing: 2,
                    }}>
                    Choose your workout
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'red',
                    // paddingTop: 7,
                    // borderWidth: 1,
                    width: getWidth(96),
                    height: getHeight(20),
                    justifyContent: 'space-evenly',
                    //   paddingHorizontal: 15,

                    //   borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderColor: 'red',
                      // paddingTop: 7,
                      // borderWidth: 1,
                      width: getWidth(47),
                      height: getHeight(20),
                      justifyContent: 'space-evenly',
                      //   paddingHorizontal: 15,

                      //   borderBottomWidth: 1,
                      // flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <View
                        style={{
                          // borderWidth: 1,
                          height: getHeight(14),
                          width: getWidth(31),
                          borderRadius: 20,
                          backgroundColor: '#1B1561',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <SvgXml width={getWidth(20)} xml={custom} />
                        {/* <Image
                          source={require('../../assets/images/notes.png')}
                          style={{resizeMode: 'contain', width: getWidth(20)}}
                        /> */}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        // textAlign: 'auto',
                        // paddingVertical: 10,
                        letterSpacing: 1,
                      }}>
                      Custom workout
                    </Text>
                  </View>

                  <View
                    style={{
                      borderColor: 'red',
                      // paddingTop: 7,
                      // borderWidth: 1,
                      width: getWidth(47),
                      height: getHeight(20),
                      justifyContent: 'space-evenly',
                      //   paddingHorizontal: 15,

                      //   borderBottomWidth: 1,
                      // flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('TrainingBox1')}>
                      <View
                        style={{
                          borderWidth: 1,
                          height: getHeight(14),
                          width: getWidth(31),
                          borderRadius: 20,
                          backgroundColor: '#1B1561',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <SvgXml width={getWidth(20)} xml={bicep} />
                        {/* <Image
                          source={require('../../assets/images/bicep.png')}
                          style={{resizeMode: 'contain', width: getWidth(20)}}
                        /> */}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16,
                        // textAlign: 'auto',
                        // paddingVertical: 10,
                        letterSpacing: 1,
                      }}>
                      Pre-made workout
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    borderColor: 'red',
                    height: getHeight(10),
                    // justifyContent: 'flex-end',
                    // borderWidth: 1,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CreateWorkOut1')}
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
                      width: getWidth(80),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Anek_Bangla_medium',
                        color: 'white',
                        fontWeight: '400',
                        fontSize: 20,
                        letterSpacing: 2,
                      }}>
                      Create a new workout
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    //   width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: getWidth(28),
    height: getHeight(4),
    backgroundColor: 'white',
    // borderWidth: 1,
    shadowColor: 'rgba(103, 128, 159)',

    elevation: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
  },
  dropdown1BtnTxtStyle: {
    fontFamily: 'Anek_Bangla_medium',
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
    //   paddingTop: 30,
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 20},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
  topBar: {
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 65,
    // borderWidth: 2,
    borderColor: '#D3D3D3',

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderWidth:1,
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderColor: 'grey',
    // borderWidth: 2,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(40),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,
    // elevation:10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default TrainingHome1;
