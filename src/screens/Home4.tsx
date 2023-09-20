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
import {SvgXml} from 'react-native-svg';
import {noodles, preformly} from '../../assets/svg';

const Home4 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          //   paddingVertical: 10,
          borderColor: 'green',
          //   justifyContent:'center',
          // paddingLeft:5,
          //   borderWidth: 4,
          height: getHeight(85),
        }}>
        <Image
          source={require('../../assets/images/fruitBG.png')}
          style={styles.backgroundImage}
        />
        <View
          style={{
            alignItems: 'center',
            borderColor: 'red',
            // borderWidth: 1,
            width: getWidth(99),
            height: getHeight(33),
            // justifyContent:'center'
            paddingVertical: Platform.OS === 'ios' ? 30 : 10,
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
              fontFamily: 'Modak_regular',
              color: '#1B1561',
              fontWeight: '400',
              fontSize: 30,
              marginTop:Platform.OS==='ios'?20:0,
            }}>
            Preformly
          </Text> */}
          <Text
            style={{
              fontFamily: 'Anek_Bangla_bold',
              color: 'black',
              fontWeight: '500',
              fontSize: 18,
            }}>
            Home
          </Text>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'red',
              // borderWidth: 1,
              width: getWidth(75),
              height: getHeight(15),
              // justifyContent:'center'
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'black',
                fontWeight: '300',
                fontSize: 14,
                textAlign: 'center',
                paddingVertical: 5,
              }}>
              Great job, you just earned your first customized meal based on
              your unique profile. We hope this meal suits your needs.
            </Text>
          </View>
        </View>

        <View
          style={{
            // borderWidth: 1,
            borderColor: 'black',
            // height: getHeight(40),
            width: getWidth(90),
            // marginTop: 90,
            // justifyContent: "center",
            alignItems: 'center',
            paddingTop: 10,
            height: getHeight(40),
          }}>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: 30,
              width: getWidth(79),
              height: getHeight(6),
              borderColor: '#1B1561',
              //   borderRadius: 20,
              // backgroundColor: '#1B1561',
              justifyContent: 'center',
              //   paddingHorizontal: 10,
              //   flexDirection: 'row',
              paddingTop: 19,
              alignItems: 'center',
              paddingLeft: 10,
              // marginTop:60
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_bold',
                color: 'black',
                fontWeight: '500',
                fontSize: 20,
                textAlign: 'center',
                // paddingVertical: 5,
                letterSpacing: 2,
              }}>
              Generation X
            </Text>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(60),
              height: getHeight(12),
              // backgroundColor: '#1B1561',
              //   justifyContent: 'space-evenly',
              paddingTop: 15,
              paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
            }}>
            <SvgXml width={getWidth(25)} height={getHeight(12)} xml={noodles} />
            {/* <Image
              source={require('../../assets/images/noodles.png')}
              style={{ width: getWidth(25),height:getHeight(12)}}
            /> */}
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(60),
              height: getHeight(6),
              paddingLeft: 10,
              // backgroundColor: '#1B1561',
              //   justifyContent: 'space-evenly',
              paddingTop: 25,
              //   alignItems: 'center',
              // marginTop:60
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_bold',
                color: 'black',
                fontWeight: '500',
                fontSize: 13,
                textAlign: 'center',
                // paddingVertical: 5,
                letterSpacing: 2,
              }}>
              CACIO E PEPE
            </Text>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'black',
                fontWeight: '300',
                fontSize: 13,
                textAlign: 'center',
                // paddingVertical: 5,
              }}>
              370 calories
            </Text>
          </View>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: 20,
              width: getWidth(63),
              height: getHeight(15),
              // backgroundColor: '#1B1561',
              //   justifyContent: 'center',
              paddingTop: 35,
              paddingLeft: 10,
              alignItems: 'center',
              // marginTop:60
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Reciepe1')}
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
                  fontFamily: 'Anek_Bangla_medium',
                  fontWeight: '400',
                }}>
                View Recipe
              </Text>
            </TouchableOpacity>
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
            fontFamily: 'Anek_Bangla_light',
            fontWeight: '400',
            letterSpacing: 2,
          }}>
          TERMS AND CONDITIONS
        </Text>
      </View>
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
    borderColor: '#D3D3D3',

    width: getWidth(15),
    height: getHeight(0.7),
    backgroundColor: '#D3D3D3',
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 110,
    // borderWidth: 3,
    borderColor: 'green',
    height: getHeight(91),
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
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
});

export default Home4;
