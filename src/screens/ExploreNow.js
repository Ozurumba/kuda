import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function ExploreNow(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.youreIn}>You&#39;re in!</Text>
      <Text style={styles.loremIpsum}>
        Start using your brand-new Kuda account right{"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}away!
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("NewPin")}
        style={styles.button1}
      >
        <Text style={styles.text}>Explore Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  youreIn: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 247,
    marginLeft: 131
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 13,
    marginLeft: 47
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 358,
    marginLeft: 30
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 118
  }
});

export default ExploreNow;
