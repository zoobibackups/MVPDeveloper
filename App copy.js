import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import LogIn1 from "./src/Logins/LogIn1";
import LogIn3 from "./src/Logins/LogIn3";
import LogIn2 from "./src/Logins/LoginIn2";
import TrainingLogIn from "./src/Logins/TrainingLogIn";
import ChangeGoal from "./src/InfoChaging/ChangeGoal";
import ChangePreference2 from "./src/InfoChaging/ChangePreference2";
import UpdateWeight from "./src/InfoChaging/UpdateWeight";
import WeightProgress from "./src/InfoChaging/WeightProgress";
import ChangeGoalTraining from "./src/InfoChangeTraining/ChangeGoalTraining";
import ChangePreferenceTraining from "./src/InfoChangeTraining/ChangePreferenceTraining";
import UpdateWeightTraining from "./src/InfoChangeTraining/UpdateWeightTraining";

import SignUp1 from "./src/Signups/SignUp1";
import SignUp10 from "./src/Signups/SignUp10";
import SignUp11 from "./src/Signups/SignUp11";
import SignUp12 from "./src/Signups/SignUp12";
import SignUp13 from "./src/Signups/SignUp13";
import SignUp14 from "./src/Signups/SignUp14";
import SignUp17 from "./src/Signups/SignUp17";
import SignUp18 from "./src/Signups/SignUp18";
import SignUp18T from "./src/Signups/SignUp18(2)";
import SignUp19 from "./src/Signups/SignUp19";
import SignUp2 from "./src/Signups/SignUp2";
import SignUp20 from "./src/Signups/SignUp20";
import SignUp21 from "./src/Signups/SignUp21";
import SignUp22 from "./src/Signups/SignUp22";
import SignUp23 from "./src/Signups/SignUp23";
import SignUp24 from "./src/Signups/SignUp24";
import SignUp25 from "./src/Signups/SignUp25";
import SignUp26 from "./src/Signups/SignUp26";
import SignUp27 from "./src/Signups/SignUp27";
import SignUp28 from "./src/Signups/SignUp28";
import SignUp29 from "./src/Signups/SignUp29";
import SignUp3 from "./src/Signups/SignUp3";
import SignUp30 from "./src/Signups/SignUp30";
import SignUp31 from "./src/Signups/SignUp31";
import SignUp6 from "./src/Signups/SignUp6";
import SignUp7 from "./src/Signups/SignUp7";
import SignUp8 from "./src/Signups/SignUp8";
import SignUp9 from "./src/Signups/SignUp9";
import AccountDetails1 from "./src/screens/AccountDetails1";
import ActiveWorkOut1 from "./src/screens/ActiveWorkOut1";
import ActiveWorkOut3 from "./src/screens/ActiveWorkOut3";
import AllWorkOuts from "./src/screens/AllWorkOuts";
import BodyControl from "./src/screens/BodyControl";
import Boxing from "./src/screens/Boxing";
import BusinessSignUp from "./src/screens/BusinessSignUp";
import Calisthenics from "./src/screens/Calisthenics";
import Cardio from "./src/screens/Cardio";
import ChangeIngredients from "./src/screens/ChangeIngredients";
import Combined from "./src/screens/Combined";
import Connectwatch from "./src/screens/Connectwatch";
import CreateWorkOut1 from "./src/screens/CreateWorkOut1";
import CreateWorkOut2 from "./src/screens/CreateWorkOut2";
import DetailedAndProgress from "./src/screens/DetailedAndProgress";
import DetailedAndProgress2 from "./src/screens/DetailedAndProgress2";
import Error1 from "./src/screens/Error1";
import History1 from "./src/screens/History1";
import History2 from "./src/screens/History2";
import HistoryAndProgress from "./src/screens/HistoryAndProgress";
import Home from "./src/screens/Home";
import Home2 from "./src/screens/Home2";
import Home4 from "./src/screens/Home4";
import Home5 from "./src/screens/Home5";
import Instruction from "./src/screens/Instruction";
import LandingPage from "./src/screens/LandingPage";
import List1 from "./src/screens/List1";
import Meditation from "./src/screens/Meditation";
import Plans from "./src/screens/Plans";
import ProfileSetting6 from "./src/screens/Profile6";
import ProfileTrainingScreen from "./src/screens/ProfileSettingsTrainingScreen";
import Reciepe1 from "./src/screens/Reciepe1";
import Sport1 from "./src/screens/Sport1";
import StartWorkOut from "./src/screens/StartWorkOut";
import StartWorkOutArms from "./src/screens/StartWorkOutArms";
import StartWorkOutBack from "./src/screens/StartWorkOutBack";
import StartWorkOutChest from "./src/screens/StartWorkOutChest";
import StartWorkOutLegs from "./src/screens/StartWorkOutLegs";
import StartWorkOutPush from "./src/screens/StartWorkOutPush";
import StepCounter from "./src/screens/StepCounter";
import TimeInKitchen from "./src/screens/TimeInKitchen";
import TrainingBox1 from "./src/screens/TrainingBox1";
import TrainingDiary2 from "./src/screens/TrainingDiary2";
import TrainingHome1 from "./src/screens/TrainingHome1";
import TermsAndConditions from "./src/screens/TermsAndConditions";
import WeightLiftingBox1 from "./src/screens/WeightLiftingBox1";
import WhySchedule from "./src/screens/WhySchedule";
import WhySchedule2 from "./src/screens/WhySchedule2";
import Yoga from "./src/screens/Yoga";
import TrainingDiary1 from "./src/screens/TrainingDiary1";
import ClientOverView from "./src/screens/ClientOverView";
import PersonalTrainerOverView from "./src/screens/PersonalTrainerOverView";
import Profile1 from "./src/screens/Profile1";
import TestNavigationScreen from "./src/screens/testNaivgationScreens";
import MicroNutrientsScreen from "./src/screens/MicroNutrientsScreen";
import ChangrInfo2 from "./src/InfoChaging/ChangrInfo2";
import ChangrInfo1 from "./src/InfoChaging/ChangrInfo1";
import Profile8 from "./src/screens/Profile8";
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          __DEV__ ? "TestNavigationScreen" : "TestNavigationScreen"
        }
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="TestNavigationScreen"
          component={TestNavigationScreen}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile8"
          component={Profile8}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangrInfo1"
          component={ChangrInfo1}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChangrInfo2"
          component={ChangrInfo2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MicroNutrientsScreen"
          component={MicroNutrientsScreen}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileSetting6"
          component={ProfileSetting6}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Plans"
          component={Plans}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileTrainingScreen"
          component={ProfileTrainingScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StepCounter"
          component={StepCounter}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrainingDiary2"
          component={TrainingDiary2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeGoalTraining"
          component={ChangeGoalTraining}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateWeightTraining"
          component={UpdateWeightTraining}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePreferenceTraining"
          component={ChangePreferenceTraining}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountDetails1"
          component={AccountDetails1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoryAndProgress"
          component={HistoryAndProgress}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateWorkOut1"
          component={CreateWorkOut1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateWorkOut2"
          component={CreateWorkOut2}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailedAndProgress"
          component={DetailedAndProgress}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedAndProgress2"
          component={DetailedAndProgress2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History1"
          component={History1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Combined"
          component={Combined}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History2"
          component={History2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActiveWorkOut3"
          component={ActiveWorkOut3}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActiveWorkOut1"
          component={ActiveWorkOut1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cardio"
          component={Cardio}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Yoga"
          component={Yoga}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BodyControl"
          component={BodyControl}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calisthenics"
          component={Calisthenics}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Meditation"
          component={Meditation}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Boxing"
          component={Boxing}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllWorkOuts"
          component={AllWorkOuts}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartWorkOutBack"
          component={StartWorkOutBack}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartWorkOutChest"
          component={StartWorkOutChest}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WhyScheudle2"
          component={WhySchedule2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartWorkOutArms"
          component={StartWorkOutArms}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartWorkOutLegs"
          component={StartWorkOutLegs}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartWorkOutPush"
          component={StartWorkOutPush}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartWorkOut"
          component={StartWorkOut}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrainingBox1"
          component={TrainingBox1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeightLiftingBox1"
          component={WeightLiftingBox1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrainingHome1"
          component={TrainingHome1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp22"
          component={SignUp22}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp31"
          component={SignUp31}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp30"
          component={SignUp30}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp29"
          component={SignUp29}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp28"
          component={SignUp28}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp27"
          component={SignUp27}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp26"
          component={SignUp26}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp24"
          component={SignUp24}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp23"
          component={SignUp23}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp20"
          component={SignUp20}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sport1"
          component={Sport1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp25"
          component={SignUp25}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp18T"
          component={SignUp18T}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp17"
          component={SignUp17}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp18"
          component={SignUp18}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp21"
          component={SignUp21}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp19"
          component={SignUp19}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Connectwatch"
          component={Connectwatch}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn3"
          component={LogIn3}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Error1"
          component={Error1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrainingLogIn"
          component={TrainingLogIn}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateWeight"
          component={UpdateWeight}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeightProgress"
          component={WeightProgress}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeGoal"
          component={ChangeGoal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePreference2"
          component={ChangePreference2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeIngredients"
          component={ChangeIngredients}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List1"
          component={List1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Instruction"
          component={Instruction}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home5"
          component={Home5}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home4"
          component={Home4}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusinessSignUp"
          component={BusinessSignUp}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reciepe1"
          component={Reciepe1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn1"
          component={LogIn1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn2"
          component={LogIn2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp3"
          component={SignUp3}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp13"
          component={SignUp13}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp14"
          component={SignUp14}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp6"
          component={SignUp6}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp7"
          component={SignUp7}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp8"
          component={SignUp8}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp9"
          component={SignUp9}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp10"
          component={SignUp10}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp11"
          component={SignUp11}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp12"
          component={SignUp12}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TimeInKitchen"
          component={TimeInKitchen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WhySchedule"
          component={WhySchedule}
          // options={{ headerShown: false }}
        />

        <Stack.Screen name="TrainingDiary1" component={TrainingDiary1} />

        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />

        <Stack.Screen name="ClientOverView" component={ClientOverView} />

        <Stack.Screen
          name="PersonalTrainerOverView"
          component={PersonalTrainerOverView}
        />

        <Stack.Screen name="Profile1" component={Profile1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
