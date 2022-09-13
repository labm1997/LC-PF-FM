import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DailyQuote() {
  return (
    <View style={style.quoteContainer}>
      <Text style={style.mainText}>
        “The only thing worse than being blind is having sight but no vision.”
      </Text>
      <View style={style.actionContainer}>
        <TouchableOpacity>
          <Ionicons size={20} name="heart-outline" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons size={20} name="reload" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainText: {
    fontSize: 16,
    margin: 4,
  },
  actionContainer: {
    justifyContent: "space-between",
  },
  quoteContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#ccc",
  },
});
