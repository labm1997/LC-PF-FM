import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { FavoriteQuote } from "./FavoriteQuote";

export function FavoriteQuotesGroup() {
    const { quotes } = useFavorites();

    return (
        <View style={style.sectionContainer}>
            <Text style={style.sectionTitle}>Your favorite quotes</Text>
            {quotes.length == 0 && <Text>You don't have any quotes yet.</Text>}
            <FlatList
                data={quotes}
                scrollEnabled
                renderItem={({ item }) => <FavoriteQuote quote={item} />}
            />
        </View>
    );
}

const style = StyleSheet.create({
    sectionContainer: { margin: 10, alignSelf: "stretch", flex: 1 },

    sectionTitle: {
        fontWeight: "bold",
    },
});
