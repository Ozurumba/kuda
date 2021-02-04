import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function PhoneNumber(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
        <Text style={styles.loremIpsum1}>4/6</Text>
      </View>
      <Text style={styles.whatsYourBvn1}>What&#39;s Your Phone Number?</Text>
      <Text style={styles.loremIpsum2}>
        We need your phone number to verify your {"\n"}account.
      </Text>
      <View style={styles.rect1}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Location")}
        style={styles.button1}
      >
        <Text style={styles.loremIpsum3}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}></View>
        <View style={styles.rect3}></View>
        <View style={styles.rect4}></View>
        <View style={styles.rect5}></View>
        <View style={styles.rect6}></View>
      </View>
      <Text style={styles.loremIpsum4}>
        Please type in the code we sent you.
      </Text>
      <Text style={styles.resendCode}>Resend Code</Text>
      <Text style={styles.resendIn52Seconds}>Resend in 52 seconds</Text>
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
  whatsYourBvn1: {
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
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 370,
    marginLeft: 30
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 129
  },
  rect2: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  rect3: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect4: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect5: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 5
  },
  rect6: {
    width: 58,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 8
  },
  rect2Row: {
    height: 63,
    flexDirection: "row",
    marginTop: -345,
    marginLeft: 28,
    marginRight: 34
  },
  loremIpsum4: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: -92,
    marginLeft: 82
  },
  resendCode: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginTop: 100,
    marginLeft: 147
  },
  resendIn52Seconds: {
    fontFamily: "roboto-700",
    color: "rgba(29,180,113,1)",
    marginTop: 17,
    marginLeft: 119
  }
});

export default PhoneNumber;
