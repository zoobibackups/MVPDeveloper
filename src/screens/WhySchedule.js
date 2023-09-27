import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomHeader from "../Components/CustomHeader";
import { getWidth } from "../functions/CommonFunctions";
import textStyles, { globalstyles } from "../styles/globalestyles";
import { RFValue } from "react-native-responsive-fontsize";

const WhySchedule = () => {
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
        <Text style={textStyles.simpleText}>
          Scheduling your meals can be beneficial for several reasons when it
          comes to achieving your goals. Here are a few reasons:
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
            Helps with portion control: When you have a set meal schedule, it
            can help you plan your portions and make sure you're not overeating
            or under-eating. This can be especially helpful if you're trying to
            lose weight or maintain a healthy diet.
          </Text>
        </View>
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}>
            2.
          </Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            Provides structure and routine: Having a consistent meal schedule
            can provide structure to your day, which can be helpful if you're
            trying to establish healthy habits or stick to a particular routine.
            This can also help prevent mindless snacking or skipping meals,
            which can sabotage your goals.
          </Text>
        </View>
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}>
            3.
          </Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            Optimizes energy levels: By scheduling your meals, you can ensure
            that you're fueling your body with the nutrients it needs throughout
            the day. This can help keep your energy levels stable and prevent
            dips in energy that can lead to fatigue or lack of focus.
          </Text>
        </View>
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}>
            4.
          </Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            Helps with meal planning and preparation: When you have a meal
            schedule, it can be easier to plan and prepare your meals in
            advance. This can save you time and money, and also help you make
            healthier food choices by avoiding last-minute takeout or
            convenience foods.
          </Text>
        </View>
        <View style={styles.parapraphRow}>
          <Text style={{ ...textStyles.simpleText, fontWeight: "600" }}></Text>
          <Text style={{ ...textStyles.simpleText, letterSpacing: 1 }}>
            Overall, scheduling your meals can be a helpful tool for achieving
            your goals, whether they are related to weight loss, fitness, or
            overall health and wellness.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default WhySchedule;

const styles = StyleSheet.create({
  parapraphRow: {
    flexDirection: "row",
    width: getWidth(90),
    marginTop: RFValue(10),
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
