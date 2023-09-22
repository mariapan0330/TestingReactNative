import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { QuickView } from "./app/screens/QuickView";

// following tutorial at: https://www.youtube.com/watch?v=0-S5a0eXPoc
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* <QuickView /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumaquamarine",
    // paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
});
