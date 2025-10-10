import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function TypingIndicator() {
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = (dot) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(dot, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot, {
                        toValue: 0.3,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };
        animate(dot1);
        setTimeout(() => animate(dot2), 150);
        setTimeout(() => animate(dot3), 300);
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dot, { opacity: dot1 }]} />
            <Animated.View style={[styles.dot, { opacity: dot2 }]} />
            <Animated.View style={[styles.dot, { opacity: dot3 }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", margin: 8 },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#999",
        marginHorizontal: 3,
    },
});
