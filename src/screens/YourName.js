import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function YourName(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
        <Text style={styles.loremIpsum1}>2/6</Text>
      </View>
      <Text style={styles.yourName}>Your Name</Text>
      <Text style={styles.loremIpsum2}>
        This has to be your full legal name as it appears{"\n"}your official ID
      </Text>
      <View style={styles.rect1}></View>
      <View style={styles.rect2}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Bvn")}
        style={styles.button1}
      >
        <Text style={styles.loremIpsum3}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 264,
    marginTop: 6
  },
  icon1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 19,
    marginRight: 25
  },
  yourName: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 62,
    marginLeft: 30
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 39,
    marginLeft: 31
  },
  rect1: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 41,
    marginLeft: 28
  },
  rect2: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 28
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 258,
    marginLeft: 30
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 121
  }
});

export default YourName;
