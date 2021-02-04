import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Bvn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <EntypoIcon name="chevron-left" style={styles.icon}></EntypoIcon>
        <Text style={styles.loremIpsum4}>3/6</Text>
      </View>
      <Text style={styles.whatsYourBvn}>What&#39;s Your BVN?</Text>
      <Text style={styles.loremIpsum}>
        We need your Bank Verification Number (BVN) to{"\n"}confirm who you are.
      </Text>
      <Text style={styles.loremIpsum2}>
        We all send a code to the phone number linked to {"\n"}your BVN. If you
        do not have access to that phone{"\n"}skip this step.
      </Text>
      <View style={styles.rect1}></View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon3Row}>
          <FontAwesomeIcon name="lock" style={styles.icon3}></FontAwesomeIcon>
          <Text style={styles.whyWeNeedYourBvn}>Why we need your BVN</Text>
          <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
        </View>
      </TouchableOpacity>
      <Text style={styles.skipThisStep}>Skip this step</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Sex")}
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
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum4: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 264,
    marginTop: 6
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 19,
    marginRight: 25
  },
  whatsYourBvn: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 74,
    marginLeft: 30
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 38,
    marginLeft: 31
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 24,
    marginLeft: 30
  },
  rect1: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 22,
    marginLeft: 28
  },
  button: {
    width: 319,
    height: 45,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 28
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 30,
    width: 20,
    marginTop: 1
  },
  whyWeNeedYourBvn: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 17,
    marginLeft: 23,
    marginTop: 5
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 32,
    width: 30,
    marginLeft: 38
  },
  icon3Row: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 17,
    marginTop: 8
  },
  skipThisStep: {
    fontFamily: "roboto-700",
    color: "rgba(25,175,52,1)",
    fontSize: 16,
    marginTop: 21,
    marginLeft: 149
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 158,
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

export default Bvn;
