import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LandingStack from "./LandingStackNavigation";
import { useSelector } from "react-redux";
import FoodAuthStackNavigation from "./FoodAuthStackNavigation";
import TrainingAuthStackNavigation from "./TrainingAuthStackNavigation";
import TrainingMainStackNavigation from "./TrainingMainStackNavigation";
import FoodMainStackNavigation from "./FoodMainStackNavigation";
const MainApp = () => {
  const { whichStack, accounttype, isLoggedIn } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {}, [isLoggedIn, whichStack, accounttype]);
  console.log(isLoggedIn && accounttype == "Food" ,"dsds");
  return (
    <NavigationContainer>
      {isLoggedIn && accounttype == "Training" ? (
        <TrainingMainStackNavigation />
      ) : isLoggedIn && accounttype == "Food" ? (
        <FoodMainStackNavigation />
      ) : !isLoggedIn && whichStack == "FoodAuthStack" ? (
        <FoodAuthStackNavigation />
      ) : !isLoggedIn && whichStack == "TrainingAuthStack" ? (
        <TrainingAuthStackNavigation />
      ) : (
        <LandingStack />
      )}
    </NavigationContainer>
  );
};

export default MainApp;
