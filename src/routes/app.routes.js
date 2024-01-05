import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

export { AppRoutes };
