import {Text} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Modal, Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {getWidth, getHeight} from '../functions/CommonFunctions';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PureRoundedCheckbox} from 'react-native-rounded-checkbox';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import Checkbox from '../Components/CheckBox';
import {SvgXml} from 'react-native-svg';
import {backward, mail, message, preformly} from '../../assets/svg';

const List1 = () => {
  const countries = ['Daily', 'Weekly'];
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={{
        alignItems: 'center',
        // paddingVertical: 30,
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
          paddingVertical: 30,
          // borderWidth: 1,
          height: getHeight(20),
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
            <SvgXml xml={backward} width={getWidth(10)} height={getHeight(2)} />
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
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                letterSpacing: 2,
              }}>
              GROCERY LIST
            </Text>
          </View>
        </View>

        {/* <Text
          style={{
            fontFamily: 'Anek_Bangla_medium',
            color: 'black',
            fontWeight: '400',
            fontSize: 18,
            paddingTop: 30,
            textTransform: 'uppercase',
          }}>
          grocery LIST
        </Text> */}
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          //   paddingVertical: 30,
          // borderWidth: 1,
          height: getHeight(52),
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 5,
            borderWidth: 1,
            backgroundColor: 'transparent',
            // borderWidth: 1,
            shadowColor: 'rgba(103, 128, 159)',

            // elevation: 10,
            borderColor: 'grey',
            borderRadius: 20,
            height: getHeight(52),
            width: getWidth(85),
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: getHeight(5),
              width: getWidth(80),
              // borderWidth: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_medium',
                color: 'black',
                fontWeight: '500',
                fontSize: 18,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              All items:
            </Text>
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              //   defaultValue={'Weakly'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Weakly'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <Image
                    style={{
                      resizeMode: 'contain',
                      // width: getWidth(5),
                      // borderWidth: 1,
                      borderColor: 'red',
                      height: getHeight(2),
                    }}
                    source={require('../../assets/images/down.png')}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   paddingTop:10,
              marginTop: 5,
              height: getHeight(6),
              width: getWidth(80),
              borderBottomWidth: 1,
              borderColor: 'grey',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              Pasta
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   paddingTop:10,
              marginTop: 5,
              height: getHeight(6),
              width: getWidth(80),
              borderBottomWidth: 1,
              borderColor: 'grey',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              Parmesan
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked1}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   paddingTop:10,
              marginTop: 5,
              height: getHeight(6),
              width: getWidth(80),
              borderBottomWidth: 1,
              borderColor: 'grey',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              Heavy Cream
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked2}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   paddingTop:10,
              marginTop: 5,
              height: getHeight(6),
              width: getWidth(80),
              borderBottomWidth: 1,
              borderColor: 'grey',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              Mushrooms
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   paddingTop:10,
              marginTop: 5,
              height: getHeight(6),
              width: getWidth(80),
              borderBottomWidth: 1,
              borderColor: 'grey',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              White vine
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   paddingTop:10,
              marginTop: 5,
              height: getHeight(6),
              width: getWidth(80),
              borderBottomWidth: 1,
              borderColor: 'grey',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Anek_Bangla_regular',
                color: 'grey',
                fontWeight: '400',
                fontSize: 16,
                // paddingTop: 30,
                // textTransform: 'uppercase',
              }}>
              Burrata cheese
            </Text>
            <Checkbox
              // text="Blue"
              isChecked={checked5}
              onPress={() => {
                setChecked5(!checked5);
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: getWidth(100),
          height: getHeight(18),
          //   borderWidth:1,
          //   flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate("List1")}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#1B1561',
            width: getWidth(82),
            height: getHeight(7),
            backgroundColor: '#1B1561',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Anek_Bangla_medium',
              fontWeight: '400',
              letterSpacing: 2,
            }}>
            Add to list
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#1B1561',
            width: getWidth(82),
            height: getHeight(7),
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#1B1561',
              fontSize: 20,
              fontFamily: 'Anek_Bangla_medium',
              fontWeight: '400',
              letterSpacing: 2,
            }}>
            Send me my list
          </Text>
        </TouchableOpacity>
      </View>
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
                {/* <Image
                source={require('../../assets/images/tickGroup.png')}
                style={{resizeMode: 'contain', width: getWidth(35)}}
              /> */}
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
                  Choose Contact Method
                </Text>
              </View>

              <View
                style={{
                  borderColor: 'red',
                  paddingTop: 7,
                  // borderWidth: 1,
                  width: getWidth(96),
                  height: getHeight(20),
                  justifyContent: 'space-between',
                  paddingHorizontal: 38,

                  // borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
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
                    <SvgXml width={getWidth(20)} xml={mail} />
                    {/* <Image
                      source={require('../../assets/images/Email.png')}
                      style={{resizeMode: 'contain', width: getWidth(20)}}
                    /> */}
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '400',
                      fontSize: 16,
                      textAlign: 'center',
                      // paddingVertical: 10,
                      letterSpacing: 1,
                    }}>
                    Email me
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
                    <SvgXml width={getWidth(20)} xml={message} />
                    {/* <Image
                      source={require('../../assets/images/message.png')}
                      style={{resizeMode: 'contain', width: getWidth(20)}}
                    /> */}
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Anek_Bangla_medium',
                      color: 'black',
                      fontWeight: '400',
                      fontSize: 16,
                      textAlign: 'center',
                      letterSpacing: 1,
                      // paddingVertical: 10,
                    }}>
                    Message me
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
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
    backgroundColor: 'transparent',
    // borderWidth: 1,
    shadowColor: 'rgba(103, 128, 159)',

    // elevation: 10,
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
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // justifyContent: 'flex-end',
    height: getHeight(34),
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
export default List1;
