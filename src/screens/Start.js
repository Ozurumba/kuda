import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function Start(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.kuda}>Kuda.</Text>
      <Image
        source={require("../assets/images/undraw_Mobile_pay_re_sjb8.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.loremIpsum}>Welcome to your freedom</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Signup")}
        style={styles.button1}
      >
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum2}>Have an account? Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  kuda: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 104,
    marginLeft: 166
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 100,
    marginLeft: 92
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 83
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 75,
    marginLeft: 30
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    marginTop: 9,
    marginLeft: 140
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 67,
    marginLeft: 99
  }
});

export default Start;
