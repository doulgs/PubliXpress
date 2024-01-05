import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Auth } from "../pages/auth";

const { Navigator, Screen } = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="Auth" component={Auth} />
    </Navigator>
  );
}

export { AuthRoutes };
