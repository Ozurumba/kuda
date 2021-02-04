import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";

function Sex(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
        <Text style={styles.loremIpsum1}>4/6</Text>
      </View>
      <Text style={styles.whatsYourBvn1}>A little More About You</Text>
      <Text style={styles.loremIpsum2}></Text>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 74.19 74.19" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(80,227,194,1)"
            cx={37}
            cy={37}
            rx={37}
            ry={37}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 74.19 74.19" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={37}
            cy={37}
            rx={37}
            ry={37}
          ></Ellipse>
        </Svg>
      </View>
      <Text style={styles.loremIpsum3}>We&#39;ll love to know you better.</Text>
      <View style={styles.maleRow}>
        <Text style={styles.male}>Male</Text>
        <Text style={styles.female}>Female</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PhoneNumber")}
        style={styles.button1}
      >
        <Text style={styles.loremIpsum4}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.rect1}></View>
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
    marginTop: 66,
    marginLeft: 30
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 46,
    marginLeft: 31
  },
  ellipse: {
    width: 74,
    height: 74
  },
  ellipse1: {
    width: 74,
    height: 74,
    marginLeft: 103
  },
  ellipseRow: {
    height: 74,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 68,
    marginRight: 56
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: -126,
    marginLeft: 31
  },
  male: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 19,
    marginTop: 4
  },
  female: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 19,
    marginLeft: 126
  },
  maleRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 125,
    marginLeft: 86,
    marginRight: 57
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 297,
    marginLeft: 30
  },
  loremIpsum4: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 129
  },
  rect1: {
    width: 319,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: -326,
    marginLeft: 28
  }
});

export default Sex;
