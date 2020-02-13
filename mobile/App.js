import React from "react";
import Navigation from "./App/navigations/Navigation";
import { firebaseApp } from "./App/utils/FireBase";

/*yarn add react-native-gesture-handler@1.5.0
yarn add react-native-reanimated@1.4.0
yarn add react-native-safe-area-context@0.6.0
yarn add @react-native-community/masked-view@0.1.5*/

export default function App() {
  return <Navigation />;
}