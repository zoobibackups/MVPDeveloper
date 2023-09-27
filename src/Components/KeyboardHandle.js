import React from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
const KeyBoardHandle = ({ children }) => {
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: 30,
        borderColor: "#0000",
        height: "100%",
     
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <KeyboardAvoidingView style={{ flex: 1}}>
        <ScrollView bounces={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default KeyBoardHandle;
