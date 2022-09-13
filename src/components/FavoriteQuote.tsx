import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function FavoriteQuote({ quote }: { quote: string }) {
  return (
    <View style={style.quoteMainContainer}>
      <View style={style.quoteContainer}>
        <Text style={style.quoteText}>{quote}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="trash-sharp"
          style={{ marginVertical: 3, marginHorizontal: 5 }}
          size={12}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  quoteMainContainer: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    margin: 2,
  },
  quoteContainer: {
    padding: 5,
    flex: 1,
    alignItems: "center",
  },
  quoteText: {
    fontSize: 12,
  },
});
