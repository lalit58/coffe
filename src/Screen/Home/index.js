import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import commonStyle from "../Style/style";

const Home = (props) => {
  return (
    <SafeAreaView style={commonStyle.safeView}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("details")}>
          <Text>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("webview")}>
          <Text>WebView</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
