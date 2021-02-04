import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Location(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
        <Text style={styles.loremIpsum1}>5/6</Text>
      </View>
      <Text style={styles.whereDoYouLive}>Where do you live?</Text>
      <Text style={styles.loremIpsum2}>
        Please , use your actual house address, not a P.O.{"\n"}BOX.
      </Text>
      <View style={styles.rect1}></View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
      <View style={styles.rect4}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Selfie")}
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
  whereDoYouLive: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 53,
    marginLeft: 30
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 20,
    marginLeft: 31
  },
  rect1: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 25,
    marginLeft: 28
  },
  rect2: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 28
  },
  rect3: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 28
  },
  rect4: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 28
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 183,
    marginLeft: 30
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 129
  }
});

export default Location;
