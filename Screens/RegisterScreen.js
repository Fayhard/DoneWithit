import jwtDecode from "jwt-decode";
import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import authStorage from "../auth/authStorage";
import AuthContext from "../auth/context";
import ActivityIndicator from "../components/ActivityIndicator";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(authApi.registration);
  const loginApi = useApi(authApi.login);
  const authContext = useContext(AuthContext);
  const [error, setError] = useState();

  const handleSubmit = async (userinfo) => {
    const result = await registerApi.request(userinfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.");
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userinfo.email,
      userinfo.password
    );
    const user = jwtDecode(authToken);
    authContext.setUser(user);
    authStorage.storeToken(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/Materials/logo-red.png")}
        />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            textContentType="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            textContentType="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <SubmitButton title="Login" color="secondary" />
        </AppForm>
      </Screen>
    </>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
