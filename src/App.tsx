import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FavoriteQuotesGroup } from "./components/FavoriteQuotesGroup";
import { FortuneCookie } from "./components/FortuneCookie";
import { LogoHeader } from "./components/LogoHeader";
import { FavoritesProvider } from "./hooks/useFavorites";

export default function App() {
    return (
        <FavoritesProvider>
            <SafeAreaView style={styles.container}>
                <LogoHeader />
                <FortuneCookie />
                <FavoriteQuotesGroup />
                <StatusBar style="auto" />
            </SafeAreaView>
        </FavoritesProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        alignItems: "center",
    },
});
