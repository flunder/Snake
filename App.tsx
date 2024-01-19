import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Main } from "./src/screens/main";

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Main />
  </GestureHandlerRootView>
);

export default App;
