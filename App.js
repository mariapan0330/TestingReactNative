import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  Button,
  Dimensions,
} from "react-native";

export default function App() {
  // console.log("hello world!!");
  // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "teal",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "indianred",
          width: 100,
          height: 100,
          right: 20,
          // position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      {/* <View
        style={{
          backgroundColor: "chocolate",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "linen",
          width: 100,
          height: 100,
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // flexWrap: "wrap", // flex wrap affects alignitems property because now they're being aligned within EACH line (and when you wrap them, there's gonna be multiple lines)
    alignContent: "center", // unaffected by flexwrap because it aligns all of the content regardless of lines
    paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
});
