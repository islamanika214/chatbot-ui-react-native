import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatHeader() {
    const insets = useSafeAreaInsets();
    const headerHeight = 40;

    return (
        <View style={[styles.container, { height: headerHeight + insets.top }]}>
            <StatusBar barStyle="light-content" backgroundColor="#a577eeff" />
            <View style={[styles.inner]}>
                <Text style={styles.title}>Chatbot</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#a577eeff",
        width: "100%",
    },
    inner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
