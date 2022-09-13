import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import DailyQuote from "./components/DailyQuote";
import { FavoriteQuotes } from "./components/FavoriteQuotes";
import { FortuneCookie } from "./components/FortuneCookie";
import { LogoHeader } from "./components/LogoHeader";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <LogoHeader />
            <FortuneCookie></FortuneCookie>
            <FavoriteQuotes />
            <StatusBar style="auto" />
        </SafeAreaView>
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
