import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Signup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon name="chevron-left" style={styles.icon}></Icon>
        <Text style={styles.loremIpsum}>1/6</Text>
      </View>
      <Text style={styles.start}>Start</Text>
      <Text style={styles.loremIpsum2}>
        Open a kuda account with a few details
      </Text>
      <Text style={styles.loremIpsum3}>
        Your password must be at least 8 characters{"\n"}Including letter and
        numbers
      </Text>
      <View style={styles.rect}></View>
      <View style={styles.rect1}></View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
      <Text style={styles.loremIpsum4}>
        For information on what we do with your{"\n"} data, please read our
        Privacy policy
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("YourName")}
        style={styles.button1}
      >
        <Text style={styles.loremIpsum5}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 270,
    marginTop: 12
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 13,
    marginRight: 25
  },
  start: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 23,
    marginLeft: 31
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginTop: 29,
    marginLeft: 32
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginTop: 28,
    marginLeft: 31
  },
  rect: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 24,
    marginLeft: 31
  },
  rect1: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 31
  },
  rect2: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 9,
    marginLeft: 31
  },
  rect3: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 31
  },
  loremIpsum4: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 19,
    marginLeft: 68
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 109,
    marginLeft: 30
  },
  loremIpsum5: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 121
  }
});

export default Signup;
