import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChangeGoal from "../InfoChaging/ChangeGoal";
import ChangePreference2 from "../InfoChaging/ChangePreference2";
import UpdateWeight from "../InfoChaging/UpdateWeight";
import WeightProgress from "../InfoChaging/WeightProgress";
import ChangeGoalTraining from "../InfoChangeTraining/ChangeGoalTraining";
import ChangePreferenceTraining from "../InfoChangeTraining/ChangePreferenceTraining";
import UpdateWeightTraining from "../InfoChangeTraining/UpdateWeightTraining";

import ChangrInfo1 from "../InfoChaging/ChangrInfo1";
import ChangrInfo2 from "../InfoChaging/ChangrInfo2";
import AccountDetails1 from "../screens/AccountDetails1";
import ActiveWorkOut1 from "../screens/ActiveWorkOut1";
import ActiveWorkOut3 from "../screens/ActiveWorkOut3";
import AllWorkOuts from "../screens/AllWorkOuts";
import BodyControl from "../screens/BodyControl";
import Boxing from "../screens/Boxing";
import BusinessSignUp from "../screens/BusinessSignUp";
import Calisthenics from "../screens/Calisthenics";
import Cardio from "../screens/Cardio";
import ChangeIngredients from "../screens/ChangeIngredients";
import ClientOverView from "../screens/ClientOverView";
import Combined from "../screens/Combined";
import CreateWorkOut1 from "../screens/CreateWorkOut1";
import CreateWorkOut2 from "../screens/CreateWorkOut2";
import DetailedAndProgress from "../screens/DetailedAndProgress";
import DetailedAndProgress2 from "../screens/DetailedAndProgress2";
import Error1 from "../screens/Error1";
import History1 from "../screens/History1";
import History2 from "../screens/History2";
import HistoryAndProgress from "../screens/HistoryAndProgress";
import Home from "../screens/Home";
import Home2 from "../screens/Home2";
import Home4 from "../screens/Home4";
import Home5 from "../screens/Home5";
import Instruction from "../screens/Instruction";
import List1 from "../screens/List1";
import Meditation from "../screens/Meditation";
import MicroNutrientsScreen from "../screens/MicroNutrientsScreen";
import PersonalTrainerOverView from "../screens/PersonalTrainerOverView";
import Plans from "../screens/Plans";
import Profile1 from "../screens/Profile1";
import ProfileSetting6 from "../screens/Profile6";
import Profile8 from "../screens/Profile8";
import ProfileTrainingScreen from "../screens/ProfileSettingsTrainingScreen";
import Reciepe1 from "../screens/Reciepe1";
import StartWorkOut from "../screens/StartWorkOut";

import SignUp18T from "../Signups/SignUp18T";
import CommingSoon from "../screens/CommingSoon";
import CustomWorkOut from "../screens/CustomWorkOut";
import StepCounter from "../screens/StepCounter";
import TermsAndConditions from "../screens/TermsAndConditions";
import TimeInKitchen from "../screens/TimeInKitchen";
import TrainingBox1 from "../screens/TrainingBox1";
import TrainingDiary1 from "../screens/TrainingDiary1";
import TrainingDiary2 from "../screens/TrainingDiary2";
import TrainingHome1 from "../screens/TrainingHome1";
import WeightLiftingBox1 from "../screens/WeightLiftingBox1";
import WhySchedule from "../screens/WhySchedule";
import WhySchedule2 from "../screens/WhySchedule2";
import Yoga from "../screens/Yoga";
const Stack = createNativeStackNavigator();

const TrainingMainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"TrainingHome1"}
      screenOptions={{ headerShown: false }}
    >
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
        name="CommingSoon"
        component={CommingSoon}
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
        name="WhyScheudle2"
        component={WhySchedule2}
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
        name="Error1"
        component={Error1}
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

      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />

      <Stack.Screen name="ClientOverView" component={ClientOverView} />

      <Stack.Screen
        name="PersonalTrainerOverView"
        component={PersonalTrainerOverView}
      />

      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="CustomWorkOut" component={CustomWorkOut} />
      <Stack.Screen name="SignUp18T" component={SignUp18T} />
      
      
      
    </Stack.Navigator>
  );
};

export default TrainingMainStackNavigation;
