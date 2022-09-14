import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { FavoriteQuotesGroup } from "./components/FavoriteQuotesGroup";
import { FortuneCookie } from "./components/FortuneCookie";
import { LogoHeader } from "./components/LogoHeader";
import { FavoritesProvider } from "./hooks/useFavorites";

export default function App() {
    return (
        <FavoritesProvider>
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.container}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <LogoHeader />
                        <FortuneCookie />
                        <FavoriteQuotesGroup />
                        <StatusBar style="auto" />
                    </View>
                </View>
            </SafeAreaView>
        </FavoritesProvider>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        margin: 10,
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        flexDirection: "row",
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    },
});
