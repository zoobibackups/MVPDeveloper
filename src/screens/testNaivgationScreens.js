import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP, widthPercentageToDP as wp } from "react-native-responsive-screen";
import textStyles from "../styles/globalestyles";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const TestNavigationScreen = ({ navigation }) => {
  const routes = [
    {
      id: 1,
      name: "Landing Page",
      routeName: "LandingPage",
    },
    {
      id: 2,
      name: "Landing Page Has Account (Home5)",
      routeName: "Home5",
    },
    {
      id: 3,
      name: "Landing Page Not An Account (SignUp1)",
      routeName: "SignUp1",
    },
    {
      id: 4,
      name: "Training Home",
      routeName: "TrainingHome1",
    },
    {
      id: 5,
      name: "Personal Trainer OverView",
      routeName: "PersonalTrainerOverView",
    },
    {
      id: 5,
      name: "Profile1",
      routeName: "Profile1",
    }

    
  ];
  return (
    <SafeAreaView>
      <FlatList
        data={routes}
        keyExtractor={(item, idex) => idex.toString()}
        renderItem={({ item, inxex }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.routeName)}
              style={styles.button}
            >
              <Text style={{ ...textStyles.mediumText, fontSize:RFValue(12), color: "#fff" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TestNavigationScreen;

const styles = StyleSheet.create({
  button: {
    width: wp(96),
    height:heightPercentageToDP(5),
    backgroundColor: "#000",
    marginBottom: wp(2),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
