import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export const QuickView = (handleQuickViewExit) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: -1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "indianred" }}
        ></View>
        <View style={{ width: 50, height: 50, backgroundColor: "teal" }}></View>
      </View>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={{
            width: 400,
            height: 500,
            uri: "https://picsum.photos/300/400",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
});
