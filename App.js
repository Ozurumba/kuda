import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Splash1 from "./src/screens/Splash1";
import Start from "./src/screens/Start";
import Signup from "./src/screens/Signup";
import Bvn from "./src/screens/Bvn";
import YourName from "./src/screens/YourName";
import Sex from "./src/screens/Sex";
import PhoneNumber from "./src/screens/PhoneNumber";
import Location from "./src/screens/Location";
import Selfie from "./src/screens/Selfie";
import ExploreNow from "./src/screens/ExploreNow";
import NewPin from "./src/screens/NewPin";
import Dashboard from "./src/screens/Dashboard";

const DrawerNavigation = createDrawerNavigator({
  Splash1: Splash1,
  Start: Start,
  Signup: Signup,
  Bvn: Bvn,
  YourName: YourName,
  Sex: Sex,
  PhoneNumber: PhoneNumber,
  Location: Location,
  Selfie: Selfie,
  ExploreNow: ExploreNow,
  NewPin: NewPin,
  Dashboard: Dashboard
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Splash1: Splash1,
    Start: Start,
    Signup: Signup,
    Bvn: Bvn,
    YourName: YourName,
    Sex: Sex,
    PhoneNumber: PhoneNumber,
    Location: Location,
    Selfie: Selfie,
    ExploreNow: ExploreNow,
    NewPin: NewPin,
    Dashboard: Dashboard
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
