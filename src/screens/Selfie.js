import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";

function Selfie(props) {
  return (
    <View style={styles.container}>
      <Icon name="chevron-left" style={styles.icon1}></Icon>
      <Text style={styles.takeASelfie}>Take a Selfie</Text>
      <Text style={styles.loremIpsum1}>
        Take a clear photo of your face, We need this to{"\n"}verify your
        identity. You can always change this {"\n"}photo later.
      </Text>
      <Svg viewBox="0 0 137.16 138.5" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(230, 230, 230,1)"
          cx={69}
          cy={69}
          rx={69}
          ry={69}
        ></Ellipse>
      </Svg>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 67.76 66.78" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(189,16,224,1)"
            cx={34}
            cy={33}
            rx={34}
            ry={33}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 67.76 66.78" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(139,87,42,1)"
            cx={34}
            cy={33}
            rx={34}
            ry={33}
          ></Ellipse>
        </Svg>
      </View>
      <Text style={styles.loremIpsum2}>
        By completing this sign-up, you agree tou Terms &amp;{"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}Conditions
      </Text>
      <View style={styles.rightRow}>
        <Text style={styles.right}>RIGHT</Text>
        <Text style={styles.wrong}>WRONG</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: 60,
    marginLeft: 19
  },
  takeASelfie: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 53,
    marginLeft: 30
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 20,
    marginLeft: 31
  },
  ellipse: {
    width: 137,
    height: 138,
    marginTop: 38,
    marginLeft: 113
  },
  ellipse2: {
    width: 68,
    height: 67
  },
  ellipse3: {
    width: 68,
    height: 67,
    marginLeft: 54
  },
  ellipse2Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 95,
    marginRight: 90
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "rgba(20,167,86,1)",
    marginTop: 186,
    marginLeft: 31
  },
  right: {
    fontFamily: "roboto-700",
    color: "#121212"
  },
  wrong: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 87
  },
  rightRow: {
    height: 17,
    flexDirection: "row",
    marginTop: -203,
    marginLeft: 109,
    marginRight: 88
  }
});

export default Selfie;
