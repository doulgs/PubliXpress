import React from "react";
import { ThemeProvider } from "styled-components";

import { useColorScheme } from "react-native";
import themes from "./src/themes";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
