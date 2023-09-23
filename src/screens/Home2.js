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
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native';
import {Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {preformly, tickGroup} from '../../assets/svg';

const Home2 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [focused, setfocused] = useState(false);
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          //   paddingVertical: 10,
          // paddingVertical: Platform.OS==='ios' ?55:14,
          borderColor: 'green',
          //   justifyContent:'center',
          // paddingLeft:5,
          //   borderWidth: 4,
          height: getHeight(85),
        }}>
        <Image
          source={require('../../assets/images/fruitBG2.png')}
          style={styles.backgroundImage}
        />
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            // borderWidth: 1,a
            width: getWidth(99),
            height: getHeight(37),
            paddingVertical: Platform.OS === 'ios' ? 20 : 6,
            // justifyContent:'center'
            // paddingVertical: 5,
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
              fontFamily: 'AnekBangla-SemiBold',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            Diet and exercise schedules
          </Text>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              // borderWidth: 1,
              width: getWidth(75),
              height: getHeight(13),
              // justifyContent:'center'
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Regular',
                color: 'black',
                fontWeight: '300',
                fontSize: 14,
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Get a individual and customized diet and training scheduels based
              on your unique profile in a matter of seconds.
            </Text>
          </View>
        </View>
        {/* <View
          style={{
              borderWidth: 1,
            borderColor: 'red',
            height: getHeight(30),
            width: '90%',
            marginTop: 70,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}> */}
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'black',
            // height: getHeight(40),
            width: getWidth(90),
            // marginTop: 90,
            // justifyContent: "center",
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
            paddingRight: 27,
            height: getHeight(37),
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 30,
              width: getWidth(76),
              height: getHeight(7),
              borderColor: '#1B1561',
              //   borderRadius: 20,
              // backgroundColor: '#1B1561',
              justifyContent: 'space-between',
              paddingHorizontal: 13,
              flexDirection: 'row',
              //   paddingTop: 10,
              //   alignItems: 'center',
              // marginTop:60
            }}>
            <TextInput
              // onPressIn={()=>setfocused(true)}
              // onPressOut={()}
              style={{
                height: getHeight(7),
                // margin: 12,
                //   borderWidth: 1,
                // padding: 10,
                //   justifyContent:'flex-start',
                borderRadius: 30,
                width: getWidth(45),
                borderColor: '#1B1561',
                color: 'grey',

                paddingLeft: 8,
              }}
              onChangeText={() => setfocused(true)}
              placeholderTextColor="grey"
              //   value={password}
              placeholder="Type Prompt..."
              //   secureTextEntry={show1}
              // keyboardType="numeric"
            />
            <View
              style={{
                alignItems: 'center',
                borderColor: 'red',
                // borderWidth:1,
                height: getHeight(8),
                width: getWidth(25),
                borderRadius: 30,
                // justifyContent: 'center',
                // marginRight:13
              }}>
              <TouchableOpacity
                onPress={() => {
                  setfocused(false), navigation.navigate('Home4');
                }}
                style={
                  focused ? styles.generateButton : styles.generateButtonDull
                }>
                <Text
                  style={{
                    fontFamily: 'AnekBangla-Medium',
                    color: 'white',
                    fontWeight: '400',
                    fontSize: 14,
                    letterSpacing: 2,
                  }}>
                  Generate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(70),
              height: getHeight(11),
              // backgroundColor: '#1B1561',
              justifyContent: 'center',
              paddingTop: 10,
              alignItems: 'center',
              // marginTop:60
            }}>
            <Text
              style={{
                fontFamily: 'AnekBangla-Regular',
                color: 'black',
                fontWeight: '400',
                fontSize: 13,
                textAlign: 'center',
                //   paddingVertical:15
              }}>
              Would you like to get a customized meal plan for the entire week?
              Just click the button below.
            </Text>
          </View>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 20,
              width: getWidth(63),
              height: getHeight(15),
              // backgroundColor: '#1B1561',
              //   justifyContent: 'center',
              paddingTop: 10,
              paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#1B1561',
                width: getWidth(45),
                height: getHeight(6),
                backgroundColor: '#1B1561',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'AnekBangla-Medium',
                  fontWeight: '400',
                  letterSpacing: 2,
                }}>
                Create schedule
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'AnekBangla-Regular',
                color: 'black',
                fontWeight: '400',
                fontSize: 13,
                textDecorationLine: 'underline',
                textAlign: 'center',
                paddingVertical: 25,
              }}>
              How it works
            </Text>
          </View>
        </View>

        {/* </View> */}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 2,
          // borderWidth: 1,
          borderColor: 'red',
          height: getHeight(7),
        }}>
        <Text
          style={{
            color: '#1B1561',
            fontSize: 14,
            fontFamily: 'AnekBangla-Light',
            fontWeight: '400',
            letterSpacing: 2,
          }}>
          TERMS AND CONDITIONS
        </Text>
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
                style={{
                  // margin: 20,
                  backgroundColor: 'white',
                  borderColor: 'blue',
                  // borderWidth: 1,
                  // borderRadius: 20,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  // padding: 35,
                  alignItems: 'center',
                  shadowColor: '#000',
                  // justifyContent: 'flex-end',
                  height: getHeight(45),
                  width: getWidth(100),
                  // marginLeft: 0,
                  // bottom: 0,
                  // top: 0,
                }}
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
                    borderColor: 'grey',
                    paddingTop: 13,
                    // borderWidth: 1,
                    width: getWidth(81),
                    height: getHeight(42),
                    justifyContent: 'space-between',
                    // paddingHorizontal:8,

                    // borderBottomWidth: 1,
                    // flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <SvgXml width={getWidth(35)} xml={tickGroup} />
                  {/* <Image
                    source={require('../../assets/images/tickGroup.png')}
                    style={{resizeMode: 'contain', width: getWidth(35)}}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'AnekBangla-Regular',
                      color: 'black',
                      fontWeight: '400',
                      fontSize: 18,
                      textAlign: 'center',
                      // paddingVertical: 15,
                    }}>
                    Great! We have successfully created a customized meal plan
                    to fit your needs.
                  </Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{
                      height: 55,
                      margin: 12,
                      //   borderWidth: 1,
                      padding: 14,
                      borderRadius: 15,
                      borderColor: '#1B1561',
                      backgroundColor: '#1B1561',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: getWidth(45),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'AnekBangla-Medium',
                        color: 'white',
                        fontWeight: '400',
                        fontSize: 20,
                        letterSpacing: 2,
                      }}>
                      Check it out
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '170%',
    marginTop: 0,
    height: getHeight(110),
  },
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
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: getHeight(91),
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderColor: 'blue',
    // borderWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(45),
    width: getWidth(100),
    // marginLeft: 0,
    // bottom: 0,
    // top: 0,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  generateButton: {
    height: getHeight(6.9),
    // margin: 12,
    borderWidth: 1.5,
    // padding: 14,
    borderRadius: 30,
    borderColor: '#1B1561',
    // opacity:0.1,
    backgroundColor: '#1B1561',
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(29),
  },
  generateButtonDull: {
    height: getHeight(6.9),
    // margin: 12,
    // borderWidth: 1,
    // padding: 14,
    borderRadius: 30,
    borderColor: '#1B1561',
    opacity: 0.5,
    backgroundColor: '#1B1561',
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(29),
  },
});

export default Home2;
