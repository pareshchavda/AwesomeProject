import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      <Text>home</Text>
    </View>
  );
};

export default HomeScreen;
