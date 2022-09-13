import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function FavoriteQuotes() {
  return (
    <View style={style.sectionContainer}>
      <Text style={style.sectionTitle}>Your favorite quotes</Text>
      <Text>You don't have any quotes yet.</Text>
      {/* incluir flatlist */}
    </View>
  );
}

const style = StyleSheet.create({
  sectionContainer: { margin: 10 },

  sectionTitle: {
    fontWeight: "bold",
  },
});
