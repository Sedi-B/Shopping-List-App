import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import Login from "../assets/trolley.jpg";
import app from "../firebaseConfig";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigation.navigate("Home");
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={{ fontSize: 25, fontWeight: 800 }}>
          Sign in with Sedi Shop
        </Text>
        <Image source={Login} style={styles.image} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            borderColor="black"
            value={email}
            style={styles.inputs}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            style={styles.inputs}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Pressable
            style={{
              alignSelf: "center",
              padding: 10,
              backgroundColor: "brown",
              borderRadius: 15,
              width: 150,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{ alignSelf: "center", fontWeight: "900", fontSize: 18 }}
            >
              SignIn
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text>Don't have an account? Register here.</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "blue",
  },
  image: {
    height: 330,
    width: 350,
  },
  inputContainer: {
    width: 390,
  },
  inputs: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 15,
  },
  button: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    color: "white",
  },
});

export default LoginScreen;
