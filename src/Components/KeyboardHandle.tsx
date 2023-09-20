import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const KeyBoardHandle = ({children}) => {
  return (
    <KeyboardAvoidingView 
    // behavior="position"
    style={{flex: 1}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyBoardHandle;