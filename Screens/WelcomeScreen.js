import React from "react";
import { Image, Pressable, Text, Touchable, View } from "react-native";
import welcome from "../assets/welcome.jpg";
function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ alignSelf: "center", fontSize: 30, fontWeight: 600 }}>
        Sedi's Shop List
      </Text>
      <Image
        source={welcome}
        style={{
          height: 350,
          width: 450,
        }}
      />
      <View style={{ marginTop: 15 }}>
        <Pressable
          style={{
            alignSelf: "center",
            padding: 10,
            backgroundColor: "brown",
            borderRadius: 15,
            width: 150,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ alignSelf: "center", fontWeight: "900" }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default WelcomeScreen;
