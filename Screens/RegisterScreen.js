import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import app from "../firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import Register from "../assets/regScreen.jpg";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";

import LoginScreen from "./LoginScreen";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const auth = getAuth(app); // Initialize the auth instance

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      navigation.navigate("Login");
    } catch (error) {
      console.log("Registration Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={26}
            color="black"
            style={{ marginRight: "70%", bottom: 17 }}
          />
        </TouchableOpacity> */}

        <Text style={styles.title}>Create Account @Sedi's</Text>
        <Image source={Register} style={styles.image} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Create Username"
            value={name}
            style={styles.inputs}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            placeholder=" Enter Emai Address"
            value={email}
            style={styles.inputs}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Create Password"
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
            onPress={handleRegister}
          >
            <Text
              style={{ alignSelf: "center", fontWeight: "900", fontSize: 18 }}
            >
              SignUp
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text>Have an account? Login here.</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 7,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  image: {
    height: 330,
    width: "100%",
  },
  inputContainer: {
    width: 390,
  },
  inputs: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ccc",
  },
  button: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    backgroundColor: "dodgerblue",
  },
});

export default RegisterScreen;
