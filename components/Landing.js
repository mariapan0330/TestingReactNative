import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export const Landing = (handleQuickViewPress) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          // logo
          style={{
            position: "absolute",
            zIndex: 1,
            top: "15%",
            borderRadius: 20,
          }}
          source={{
            width: 100,
            height: 100,
            uri: "https://picsum.photos/100/100",
          }}
        />
        <Image
          // hero image
          blurRadius={2}
          source={{
            width: 400,
            height: 650,
            uri: "https://picsum.photos/400/700",
          }}
        />
        <View
          style={{
            flex: 1,
            height: "10%",
            width: "100%",
            backgroundColor: "indianred",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1 }} onPress={() => handleQuickViewPress()}>
            Quick View
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: "10%",
            width: "100%",
            backgroundColor: "teal",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ flex: 1 }}
            onPress={() => console.log("pushed teal btn")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumaquamarine",
    // paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
});
