import React from "react";
import { Text } from "react-native";

import defaultStyle from "../config/style";

function AppText({ children, style, ...OtherPros }) {
  return (
    <Text style={[defaultStyle.text, style]} {...OtherPros}>
      {children}
    </Text>
  );
}

export default AppText;
