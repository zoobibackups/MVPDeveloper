import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LandingStack from "./LandingStackNavigation";
import { useSelector } from "react-redux";
import FoodAuthStackNavigation from "./FoodAuthStackNavigation";
const MainApp = () => {
  const { whichStack } = useSelector((state) => state.userReducer);
  console.log(whichStack);
  return (
    <NavigationContainer>
      {whichStack != "LandingStack" ? (
        <LandingStack />
      ) : (
        <FoodAuthStackNavigation />
      )}
    </NavigationContainer>
  );
};

export default MainApp;
