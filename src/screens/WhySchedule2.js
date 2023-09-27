import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../Components/CustomHeader";
import { getWidth } from "../functions/CommonFunctions";
import textStyles from "../styles/globalestyles";

const WhySchedule2 = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        paddingVertical: 30,
        borderColor: "red",
        height: "100%",
      }}
      colors={["#FDFFF4", "#BBC1AD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0 }}
    >
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={"CREATE PROFILE"}
        subTitle={"WHY IT IS IMPORTANT TO HAVE A SCHEDULE?"}
      />

      <View
        style={{
          width: getWidth(90),
          borderColor: "red",
          marginTop: 10,
        }}
      >
        <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
          Having an exercise schedule is beneficial because it helps you
          establish a regular routine, promotes consistency and accountability,
          improves physical and mental health, and increases the likelihood of
          achieving fitness goals.
        </Text>
      </View>
      <ScrollView
        style={{ width: getWidth(90) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}>
            1.
          </Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            Exercise schedule promotes consistency and accountability: When you
            have a set schedule for exercising, you are more likely to stick to
            it and make it a habit. It provides structure and routine to your
            day, which can help you stay on track and avoid skipping workouts.
            Additionally, having a schedule can make you feel more accountable
            for your fitness goals, as you have a plan to follow and a sense of
            responsibility to stick to it.
          </Text>
        </View>
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}>
            2.
          </Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            It improves physical and mental health: Regular exercise has
            numerous benefits for both physical and mental health. It can
            improve cardiovascular health, increase muscle strength and
            endurance, reduce the risk of chronic diseases, and even enhance
            cognitive function. Exercise has also been shown to reduce symptoms
            of depression and anxiety and improve overall mood and self-esteem.
          </Text>
        </View>
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}>
            3.
          </Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            It increases the likelihood of achieving fitness goals: When you
            have a specific exercise schedule, you are more likely to achieve
            your fitness goals. This is because you have a plan in place to
            reach your goals and can track your progress over time.
            Additionally, a schedule can help you stay motivated and focused on
            your goals, as you have a clear plan for how to get there. By
            following a consistent exercise schedule, you can increase your
            chances of reaching your desired level of fitness.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default WhySchedule2;

const styles = StyleSheet.create({
  parapraphRow: {
    flexDirection: "row",
    width: getWidth(90),
    marginTop: RFValue(10),
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
