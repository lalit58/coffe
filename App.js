import { StatusBar, useColorScheme } from "react-native";
import Navigation from "./src/navigation";

import { useEffect } from "react";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

export default function App() {
  const theme = useColorScheme();
  const getStatusBarStyle = () => {
    if (theme === "light") {
      return "dark-content"; // Set status bar text color to dark for light theme
    }
    return "light-content"; // Set status bar text color to light for dark theme
  };
  return (
    <>
      <StatusBar barStyle={getStatusBarStyle()} />
      <Navigation />
    </>
  );
}
