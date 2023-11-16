import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LandingStack from "./LandingStackNavigation";
import { useSelector } from "react-redux";
import FoodAuthStackNavigation from "./FoodAuthStackNavigation";
import TrainingAuthStackNavigation from "./TrainingAuthStackNavigation";
import TrainingMainStackNavigation from "./TrainingMainStackNavigation";
import FoodMainStackNavigation from "./FoodMainStackNavigation";
const MainApp = () => {
  const { whichStack, accounttype,user, isLoggedIn } = useSelector(
    (state) => state.userReducer
  );
 
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        accounttype == "Training" ? (
          <TrainingMainStackNavigation />
        ) : (
          <FoodMainStackNavigation />
        )
      ) : whichStack == "FoodAuthStack" ? (
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
