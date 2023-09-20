import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getWidth, getHeight} from '../functions/CommonFunctions';

const CheckboxSquare = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  // const animatedWidth = useRef(new Animated.Value(0)).current;

  // const startAnimation = () => {
  //   const toValue = isChecked ? 0 : 30;
  //   Animated.timing(animatedWidth, {
  //     toValue: toValue,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // };

  return (
    <View style={[styles.container, containerStyle]}>
      {isChecked ? (
        <TouchableOpacity
          onPress={() => {
            // startAnimation();
            onPress();
          }}
          style={[
            styles.checkbox,
            isChecked && styles.checkboxSelected,
            checkboxStyle,
          ]}>
          <Animated.View
            style={{
              // width: animatedWidth,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(4),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/images/tick2.png')}
            />
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // startAnimation();
            onPress();
          }}
          style={[
            styles.checkbox2,
            isChecked && styles.checkboxSelected2,
            checkboxStyle,
          ]}>
          <Animated.View
            style={{
              // width: animatedWidth,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: getWidth(4),
                // borderWidth: 1,
                borderColor: 'red',
                height: getHeight(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/images/tick2.png')}
            />
          </Animated.View>
        </TouchableOpacity>
      )}

      <Text style={[styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1
  },
  checkbox: {
    borderColor: '#1B1561',
    // borderWidth: 1,
    // backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 22,
    width: 22,
  },
  checkboxSelected: {
    backgroundColor: '#1B1561',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkbox2: {
    borderColor: '#1B1561',
    // borderWidth: 1,
    backgroundColor: '#8F8F8F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 22,
    width: 22,
  },
  checkboxSelected2: {
    backgroundColor: '#1B1561',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CheckboxSquare;
