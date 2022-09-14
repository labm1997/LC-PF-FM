import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { Quote } from "../interfaces";

export function FavoriteQuote({ quote }: { quote: Quote }) {
    const { unfavorite } = useFavorites();
    return (
        <View style={style.quoteMainContainer}>
            <View style={style.quoteContainer}>
                <Text style={style.quoteText}>{quote.text}</Text>
                <Text style={style.authorText}>— {quote.author}</Text>
            </View>
            <TouchableOpacity onPress={() => unfavorite(quote)}>
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
        padding: 10,
        flex: 1,
        // alignItems: "center",
    },
    quoteText: {
        fontSize: 12,
    },
    authorText: {
        fontSize: 12,
        fontWeight: "bold",
        alignSelf: "flex-end",
    },
});
