import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import Fortune from "../assets/inteiro.svg";
import FortuneCracked from "../assets/partido.svg";
import FortuneBroken from "../assets/quebrado.svg";
import DailyQuote from "./DailyQuote";

export function FortuneCookie() {
    const [cracked, setCracked] = useState(0);
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const textGrowAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [scaleAnim, cracked]);

    useEffect(() => {
        if (cracked == 2) {
            Animated.timing(textGrowAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        } else {
            textGrowAnim.setValue(0);
        }
    }, [cracked, textGrowAnim]);

    const crack = () => {
        setCracked(1);
        setTimeout(() => {
            setCracked(2);
        }, 250);
    };

    const uncrack = () => {
        setCracked(0);
    };

    return (
        <View style={style.container}>
            {cracked == 0 && (
                <TouchableOpacity onPress={() => crack()}>
                    <Animated.View
                        style={{
                            transform: [{ scale: scaleAnim }],
                        }}
                    >
                        <Fortune></Fortune>
                    </Animated.View>
                </TouchableOpacity>
            )}
            {cracked == 1 && <FortuneCracked></FortuneCracked>}
            {cracked == 2 && (
                <View style={style.crackedContainer}>
                    <TouchableOpacity onPress={() => uncrack()}>
                        <FortuneBroken
                            style={{ transform: [{ scale: 1.5 }] }}
                        ></FortuneBroken>
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            position: "absolute",
                            transform: [{ scale: textGrowAnim }],
                            maxWidth: Dimensions.get("screen").width,
                        }}
                    >
                        <DailyQuote onReload={() => uncrack()}></DailyQuote>
                    </Animated.View>
                </View>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    crackedContainer: {
        alignItems: "center",
        flex: 1,
    },
});
