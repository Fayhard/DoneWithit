import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton.js";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Materials/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.textLogo}>
        <Image
          style={styles.logo}
          source={require("../assets/Materials/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell what you don't want</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="login"
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  textLogo: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    textTransform: "capitalize",
    paddingVertical: 20,
  },
});
