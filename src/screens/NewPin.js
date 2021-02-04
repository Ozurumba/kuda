import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function NewPin(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum1}>
        Keep your account safe with your secret PIN
      </Text>
      <Text style={styles.createANewPin}>Create a new PIN</Text>
      <View style={styles.rect5Row}>
        <View style={styles.rect5}></View>
        <View style={styles.rect4}></View>
        <View style={styles.rect3}></View>
        <View style={styles.rect2}></View>
        <View style={styles.rect1}></View>
      </View>
      <Text style={styles.newPin}>New Pin</Text>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.button1}
      >
        <Text style={styles.confirmPin}>Confirm PIN</Text>
      </TouchableOpacity>
      <Text style={styles.confirmPin2}>Confirm Pin</Text>
      <View style={styles.rect6Row}>
        <View style={styles.rect6}></View>
        <View style={styles.rect7}></View>
        <View style={styles.rect8}></View>
        <View style={styles.rect9}></View>
        <View style={styles.rect10}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 288,
    marginLeft: 47
  },
  createANewPin: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: -58,
    marginLeft: 104
  },
  rect5: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  rect4: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect3: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect2: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect1: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 8
  },
  rect5Row: {
    height: 63,
    flexDirection: "row",
    marginTop: 83,
    marginLeft: 28,
    marginRight: 34
  },
  newPin: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: -90,
    marginLeft: 27
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 331,
    marginLeft: 30
  },
  confirmPin: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 118
  },
  confirmPin2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: -285,
    marginLeft: 27
  },
  rect6: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  rect7: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect8: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect9: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect10: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 8
  },
  rect6Row: {
    height: 63,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 28,
    marginRight: 34
  }
});

export default NewPin;
