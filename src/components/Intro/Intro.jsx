import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export const IntroScreen1 = ({ navigation }) => (
  <Intro
    title={"Register For Access Cards"}
    description={
      "Get up to date information from your property management and view them easily."
    }
    icon={require("../../../assets/Icon1.png")}
    next={() => navigation.navigate("Intro2")}
    skip={() => navigation.navigate("Welcome")}
  />
);

export const IntroScreen2 = ({ navigation }) => (
  <Intro
    title={"Register For Access Cards"}
    description={"Apply for entry and parking cards as simple as 1 2 3."}
    icon={require("../../../assets/Icon2.png")}
    next={() => navigation.navigate("Intro3")}
    skip={() => navigation.navigate("Welcome")}
  />
);

export const IntroScreen3 = ({ navigation }) => (
  <Intro
    title={"Report Technical Issues"}
    description={
      "Directly notify the management through the app without leaving your home."
    }
    icon={require("../../../assets/Icon3.png")}
    next={() => navigation.navigate("Welcome")}
    skip={() => navigation.navigate("Welcome")}
  />
);

export default function Intro({ title, description, icon, next, skip }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image style={styles.introImage} source={icon}></Image>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 30,
            paddingHorizontal: 10,
          }}
          onPress={skip}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            justifyContent: "space-between",
          }}>
          <View
            style={{
              padding: 5,
              borderRadius: 100,
              backgroundColor: "green",
            }}></View>
          <View
            style={{
              padding: 5,
              borderRadius: 100,
              backgroundColor: "gray",
            }}></View>
          <View
            style={{
              padding: 5,
              borderRadius: 100,
              backgroundColor: "gray",
            }}></View>
        </View>
        <TouchableOpacity onPress={next}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introImage: {
    width: "100%",
    height: 250,
  },
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    width: "75%",
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
  },
  description: {
    // width: "75%",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
});
