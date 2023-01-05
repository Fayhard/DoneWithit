import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.errorMsg}>{error}</AppText>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  errorMsg: {
    color: "red",
    paddingLeft: 10,
  },
});
