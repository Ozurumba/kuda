import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <IoniconsIcon name="ios-person" style={styles.icon}></IoniconsIcon>
        <Text style={styles.hiObinna}>Hi, Obinna</Text>
        <Text style={styles.addMoney}>Add Money</Text>
        <IoniconsIcon
          name="md-add-circle-outline"
          style={styles.icon2}
        ></IoniconsIcon>
      </View>
      <View style={styles.rect}>
        <Text style={styles.accountBalance}>Account Balance</Text>
        <Text style={styles.n000}>₦0.00</Text>
        <View style={styles.icon3Row}>
          <IoniconsIcon name="ios-cash" style={styles.icon3}></IoniconsIcon>
          <FontAwesomeIcon name="money" style={styles.icon4}></FontAwesomeIcon>
          <MaterialCommunityIconsIcon
            name="cash-100"
            style={styles.icon5}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.spendRow}>
          <Text style={styles.spend}>Spend</Text>
          <Text style={styles.save}>Save</Text>
          <Text style={styles.borrow}>Borrow</Text>
        </View>
      </View>
      <Text style={styles.welcomeToKuda}>Welcome to Kuda!</Text>
      <Text style={styles.loremIpsum1}>
        Your Kuda account number is 15151544115.{"\n"}Your account is limited of
        #300,000 and you{"\n"}can receive a maximum deposit of #50,000.
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Signup")}
        style={styles.button1}
      >
        <Text style={styles.addMoney2}>Add Money</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  hiObinna: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 17,
    marginLeft: 9,
    marginTop: 18
  },
  addMoney: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginLeft: 92,
    marginTop: 20
  },
  icon2: {
    color: "rgba(86,13,151,1)",
    fontSize: 30,
    marginLeft: 5,
    marginTop: 14
  },
  iconRow: {
    height: 53,
    flexDirection: "row",
    marginTop: 73,
    marginLeft: 26,
    marginRight: 19
  },
  rect: {
    width: 330,
    height: 151,
    backgroundColor: "rgba(128,15,151,1)",
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 26
  },
  accountBalance: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 21,
    marginLeft: 110
  },
  n000: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 2,
    marginLeft: 133
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 43,
    width: 35
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 43,
    marginLeft: 46,
    marginTop: 2
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 43,
    width: 40,
    marginLeft: 41
  },
  icon3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 74,
    marginRight: 51
  },
  spend: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  save: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 44
  },
  borrow: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 42
  },
  spendRow: {
    height: 19,
    flexDirection: "row",
    marginLeft: 70,
    marginRight: 42
  },
  welcomeToKuda: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 24,
    marginLeft: 104
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 15,
    marginLeft: 47
  },
  button1: {
    width: 323,
    height: 43,
    backgroundColor: "rgba(92,9,164,1)",
    borderRadius: 7,
    marginTop: 208,
    marginLeft: 30
  },
  addMoney2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 118
  }
});

export default Dashboard;
