import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Splash1(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/undraw_transfer_money_rywa.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.skip}>Skip</Text>
      <Text style={styles.bank}>Bank</Text>
      <Text style={styles.loremIpsum}>
        Get monthly free transfers, a free debit card and{"\n"}smarter
        budgeting.
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Start")}
        style={styles.button}
      >
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 240,
    height: 233,
    marginTop: 222,
    alignSelf: "center"
  },
  skip: {
    fontFamily: "roboto-700",
    color: "rgba(40,213,59,1)",
    fontSize: 19,
    marginTop: -389,
    marginLeft: 320
  },
  bank: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 473,
    marginLeft: 33
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 27,
    marginLeft: 31
  },
  button: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 73,
    marginLeft: 31
  },
  next: {
    fontFamily: "roboto-700",
    color: "rgba(254,254,254,1)",
    fontSize: 15,
    marginTop: 14,
    marginLeft: 144
  }
});

export default Splash1;
