import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LandingStack from "./LandingStackNavigation";
import { useSelector } from "react-redux";
import FoodAuthStackNavigation from "./FoodAuthStackNavigation";
import TrainingAuthStackNavigation from "./TrainingAuthStackNavigation";
const MainApp = () => {
  const { whichStack } = useSelector((state) => state.userReducer);

  return (
    <NavigationContainer>
      {whichStack == "FoodAuthStack" ? (
        <FoodAuthStackNavigation />
      ) : whichStack == "TrainingAuthStack" ? (
        <TrainingAuthStackNavigation />
      ) : (
        <LandingStack />
      )}
    </NavigationContainer>
  );
};

export default MainApp;
