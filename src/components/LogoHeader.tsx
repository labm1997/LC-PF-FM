import React from "react";
import { StyleSheet, Text } from "react-native";

export function LogoHeader() {
  return <Text style={style.headerStyle}>Fortune Cookie</Text>;
}

const style = StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
