import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {getHeight, getWidth} from '../functions/CommonFunctions';
import {TouchableWithoutFeedback} from 'react-native';
import {BackgroundImage} from '@rneui/themed/dist/config';
import LinearGradient from 'react-native-linear-gradient';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {AlignJustify} from 'react-native-feather';
import {SvgXml} from 'react-native-svg';
import {backwardBlack, forwardBlack, backward, preformly} from '../../assets/svg';

const Reciepe1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [instruction, setInstruction] = useState(false);
  const [focused, setfocused] = useState(false);
  const [focused1, setfocused1] = useState(false);
  const [focused2, setfocused2] = useState(false);
  const [focused3, setfocused3] = useState(false);
  const [focused4, setfocused4] = useState(false);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '4 tablespoons (60ml) extra-virgin olive oil, divided ',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '1 teaspoon coarsely ground black pepper, to taste ',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Kosher salt, to taste',
    },
    {
      id: '4',
      title: '1/2 pound (225g) spaghetti',
    },
    {
      id: '5',
      title: '2 tablespoons (30g) unsalted butter',
    },
    {
      id: '6',
      title: '2 ounces Pecorino Romano cheese',
    },
  ];
  const DATA2 = [
    {
      id: '31.29 g',
      title: 'Kolhydrater',
    },
    {
      id: '19 g',
      title: 'Kostfiber ',
    },
    {
      id: '1.14 g',
      title: 'Socker',
    },
    {
      id: '6.81 g',
      title: 'Fett',
    },
    {
      id: '2.71 g',
      title: 'Mättat',
    },
    {
      id: '6.3 g',
      title: 'Fleromättat',
    },
    {
      id: '3.01 g',
      title: 'Enkelomättat',
    },
    {
      id: '9.47 g',
      title: 'Protein',
    },
    {
      id: '326 g',
      title: 'Natrium ',
    },
  ];
  const navigation = useNavigation();

  const renderInstruction = () => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={require('../../assets/images/noodles.png')}
          style={{
            // resizeMode: 'contain',
            width: getWidth(50),
            height: getHeight(24),
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // backgroundColor: 'rgba(0,0,0,0.1)',
            opacity: 0.9,
            // marginTop:10
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Instruction'), setInstruction(false);
            }}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#1B1561',
              width: getWidth(40),
              height: getHeight(6),
              backgroundColor: '#1B1561',
              justifyContent: 'center',
              alignItems: 'center',
              // opacity:10
              // paddingBottom:10
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'AnekBangla-Medium',
                fontWeight: '400',
              }}>
              Instruction
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
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
                borderRadius: 45,
                justifyContent: 'center',
                width: getWidth(11),
              }}>
              <SvgXml
                height={getHeight(2)}
                width={getWidth(10)}
                xml={backward}
              />
              {/* <Image
                style={{
                  resizeMode: 'contain',
                  width: getWidth(10),
                  // borderWidth: 1,
                  borderColor: 'red',
                  height: getHeight(2),
                }}
                source={require('../../assets/images/back.png')}
              /> */}
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
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}>
                RECIPE OVERVIEW
              </Text>
            </View>
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
                fontFamily: 'AnekBangla-Medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
              }}>
              T u e s d a y
            </Text>
          </View>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 20,
              width: getWidth(95),
              height: getHeight(35),
              // backgroundColor: '#1B1561',
              justifyContent: 'center',
              //   paddingTop: 10,
              //   paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
              //   flexDirection:'row'
            }}>
            <View
              style={{
                // borderWidth: 1,
                borderRadius: 20,
                width: getWidth(90),
                height: getHeight(25),
                // backgroundColor: '#1B1561',
                justifyContent: 'space-evenly',
                //   paddingTop: 10,
                //   paddingLeft: 10,
                alignItems: 'center',
                // marginTop:60
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <SvgXml
                  width={getWidth(7)}
                  height={getHeight(5)}
                  xml={backwardBlack}
                />
                {/* <Image
                  source={require('../../assets/images/backBlack.png')}
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(7),
                    height: getHeight(5),
                  }}
                /> */}
              </TouchableOpacity>
              {instruction ? (
                renderInstruction()
              ) : (
                <TouchableOpacity onPress={() => setInstruction(true)}>
                  <Image
                    source={require('../../assets/images/noodles.png')}
                    style={{
                      resizeMode: 'contain',
                      width: getWidth(50),
                      height: getHeight(30),
                    }}
                  />
                </TouchableOpacity>
              )}

              <TouchableOpacity>
                <SvgXml
                  width={getWidth(7)}
                  height={getHeight(5)}
                  xml={forwardBlack}
                />
                {/* <Image
                  source={require('../../assets/images/forwardBlack.png')}
                  style={{
                    resizeMode: 'contain',
                    width: getWidth(7),
                    height: getHeight(5),
                  }}
                /> */}
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: 'AnekBangla-Bold',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                textAlign: 'center',
                // paddingVertical: 5,
                letterSpacing: 2,
              }}>
              CACIO E PEPE
            </Text>
            <Text
              style={{
                fontFamily: 'AnekBangla-Regular',
                color: 'black',
                fontWeight: '300',
                fontSize: 15,
                textAlign: 'center',
                // paddingVertical: 5,
              }}>
              370 calories
            </Text>
          </View>
          <View
            style={{
              width: getWidth(95),
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('List1')}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#1B1561',
                width: getWidth(40),
                height: getHeight(6),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'AnekBangla-Medium',
                  fontWeight: '400',
                  letterSpacing: 2,
                }}>
                Grocery list
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#1B1561',
                width: getWidth(40),
                height: getHeight(6),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'AnekBangla-Medium',
                  fontWeight: '400',
                  letterSpacing: 2,
                }}>
                Give Rating
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                width: getWidth(95),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(8),
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: 12,
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 30,
                  textAlign: 'center',
                  // paddingVertical: 5,
                }}>
                Recipe:
              </Text>
              <View
                style={{
                  //   borderWidth: 1,
                  borderRadius: 10,
                  width: getWidth(40),
                  height: getHeight(6),
                  // backgroundColor: '#1B1561',
                  justifyContent: 'flex-end',
                  //   paddingTop: 25,
                  paddingLeft: 20,
                  alignItems: 'center',
                  // marginTop:60
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChangeIngredients')}
                  style={{
                    // borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#1B1561',
                    width: getWidth(40),
                    height: getHeight(4.5),
                    backgroundColor: '#1B1561',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                      fontFamily: 'AnekBangla-Medium',
                      fontWeight: '400',
                      letterSpacing: 2,
                    }}>
                    Change ingredients
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={DATA}
              style={{
                // borderWidth:1,
                width: getWidth(85),
                marginTop: 10,
              }}
              renderItem={({item}) => (
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'AnekBangla-Medium',
                    paddingLeft: 12,
                    fontWeight: '400',
                    letterSpacing: 2,
                    // textAlign:'justify'
                  }}>
                  {`\u2022${item.title}`}
                </Text>
              )}
            />
            <View
              style={{
                flexDirection: 'row',
                width: getWidth(95),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(10),
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: 12,
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'AnekBangla-Medium',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 30,
                  textAlign: 'center',
                  // paddingVertical: 5,
                }}>
                Nutrition:
              </Text>
            </View>
            <FlatList
              data={DATA2}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontFamily: 'AnekBangla-Light',
                      fontWeight: '400',
                      paddingLeft: 12,
                      letterSpacing: 2,
                    }}>
                    {`\u2022 ${item.title}`}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontFamily: 'AnekBangla-Bold',
                      fontWeight: '700',
                      paddingLeft: 12,
                    }}>
                    {item.id}
                  </Text>
                </View>
              )}
            />
          </ScrollView>
        </LinearGradient>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
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
                  paddingTop: 5,
                  // borderWidth: 1,
                  width: getWidth(60),
                  height: getHeight(5),
                  justifyContent: 'space-between',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <Image
                source={require('../../assets/images/tickGroup.png')}
                style={{resizeMode: 'contain', width: getWidth(35)}}
              /> */}
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 20,
                    textAlign: 'center',
                    // paddingVertical: 10,
                  }}>
                  Rate this Recipe
                </Text>
              </View>
              {/* <View
                style={{
                  borderColor: 'red',
                  // paddingTop: 7,
                  borderWidth: 1,
                  width: getWidth(70),
                  height: getHeight(6),
                  // justifyContent: 'space-between',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  // alignItems: 'center',
                }}> */}
              <AirbnbRating
                reviews={false}
                reviewColor="black"
                selectedColor="#FF8A00"
                unSelectedColor="#D3D3D3"
                ratingContainerStyle={{height: 10, marginTop: 10}}
                defaultRating={0}
                starContainerStyle={{
                  justifyContent: 'space-between',
                  // borderWidth: 2,
                  width: getWidth(75),
                  backgroundColor: 'transparent',
                }}
                size={35}
              />
              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 10,

                  marginTop: 25,
                  // borderWidth: 1,
                  width: getWidth(86),
                  height: getHeight(11),
                  justifyContent: 'space-between',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  // flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 17,
                    textAlign: 'left',
                    paddingVertical: 6,
                  }}>
                  HOW OFTEN WOULD YOU LIKE TO HAVE THIS MEAL?
                </Text>
              </View>
              <View
                style={{
                  borderColor: 'red',
                  // paddingLeft: 7,
                  // borderWidth: 1,
                  marginTop: 10,
                  width: getWidth(86),
                  height: getHeight(6),
                  // justifyContent: 'center',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <View style={focused ? styles.bgColor : styles.bgTransparent}>
                  <TouchableOpacity
                    onPress={() => {
                      setfocused(!focused),
                        setfocused1(false),
                        setfocused2(false),
                        setfocused3(false),
                        setfocused4(false);
                    }}>
                    <Text
                      style={focused ? styles.whiteText : styles.coloredText}>
                      Daily
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{paddingLeft: 12}}>
                  <View
                    style={focused1 ? styles.bgColor : styles.bgTransparent}>
                    <TouchableOpacity
                      onPress={() => {
                        setfocused1(!focused1),
                          setfocused2(false),
                          setfocused3(false),
                          setfocused4(false),
                          setfocused(false);
                      }}>
                      <Text
                        style={
                          focused1 ? styles.whiteText : styles.coloredText
                        }>
                        Weekly
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{paddingLeft: 12}}>
                  <View
                    style={focused2 ? styles.bgColor : styles.bgTransparent}>
                    <TouchableOpacity
                      onPress={() => {
                        setfocused1(false),
                          setfocused2(!focused2),
                          setfocused3(false),
                          setfocused4(false),
                          setfocused(false);
                      }}>
                      <Text
                        style={
                          focused2 ? styles.whiteText : styles.coloredText
                        }>
                        Monthly
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderColor: 'red',
                  // paddingLeft: 7,
                  // borderWidth: 1,
                  width: getWidth(86),
                  height: getHeight(6),
                  // justifyContent: 'center',
                  // paddingHorizontal:8,

                  // borderBottomWidth: 1,
                  flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <View style={focused3 ? styles.bgColor : styles.bgTransparent}>
                  <TouchableOpacity
                    onPress={() => {
                      setfocused1(false),
                        setfocused2(false),
                        setfocused3(!focused3),
                        setfocused4(false),
                        setfocused(false);
                    }}>
                    <Text
                      style={focused3 ? styles.whiteText : styles.coloredText}>
                      Quaterly
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{paddingLeft: 12}}>
                  <View
                    style={focused4 ? styles.bgColor : styles.bgTransparent}>
                    <TouchableOpacity
                      onPress={() => {
                        setfocused1(false),
                          setfocused2(false),
                          setfocused3(false),
                          setfocused4(!focused),
                          setfocused(false);
                      }}>
                      <Text
                        style={
                          focused4 ? styles.whiteText : styles.coloredText
                        }>
                        Never
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  height: 55,
                  margin: 5,
                  // borderWidth: 1,
                  padding: 14,
                  borderRadius: 20,
                  borderColor: '#1B1561',
                  backgroundColor: '#1B1561',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginTop:10,
                  width: getWidth(35),
                }}>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'white',
                    fontWeight: '400',
                    fontSize: 20,
                  }}>
                  Ok
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    marginTop: 0,
    height: getHeight(100),
  },
  topBar: {
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 65,
    // borderWidth: 2,
    // borderColor: '#D3D3D3',

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 110,
    // borderWidth: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: 'green',
    height: '100%',
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderBottomWidth: 0,

    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(47),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  bgColor: {
    borderColor: '#1B1561',
    backgroundColor: '#1B1561',
    borderWidth: 1,
    width: getWidth(22),
    height: getHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  coloredText: {
    fontFamily: 'AnekBangla-Medium',
    color: '#1B1561',
    fontWeight: '400',
    fontSize: 16,

    // textAlign: 'left',
    // paddingVertical: 6,
  },
  whiteText: {
    fontFamily: 'AnekBangla-Medium',
    color: 'white',
    fontWeight: '400',
    fontSize: 16,

    // textAlign: 'left',
    // paddingVertical: 6,
  },
  bgTransparent: {
    borderColor: '#1B1561',
    borderWidth: 1,
    width: getWidth(22),
    height: getHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Reciepe1;
