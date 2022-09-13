import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Quote, randomZQ } from "../services/zenquote-api.service";

export default function DailyQuote() {
    const [quote, setQuote] = useState<Quote>();

    useEffect(() => {
        randomZQ()
            .then((quotes) => {
                setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
            })
            .catch(() =>
                setQuote({
                    text: "As vezes a solução para seus problemas é sair da rede do banco!",
                    author: "Funcionário do BB",
                })
            );
    }, []);

    return (
        <View style={style.container}>
            {quote && (
                <>
                    <View style={style.quoteContainer}>
                        <Text style={style.mainText}>“{quote.text}”</Text>
                        <Text style={style.authorText}>— {quote.author}</Text>
                    </View>
                    <View style={style.actionContainer}>
                        <TouchableOpacity>
                            <Ionicons size={20} name="heart-outline" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons size={20} name="reload" />
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {!quote && <ActivityIndicator size="large" />}
        </View>
    );
}

const style = StyleSheet.create({
    mainText: {
        fontSize: 16,
    },
    authorText: {
        fontSize: 12,
        fontWeight: "bold",
        alignSelf: "flex-end",
    },
    actionContainer: {
        justifyContent: "space-between",
    },
    quoteContainer: {
        marginRight: 15,
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: "rgba(255,255,255,0.8)",
    },
});
