import { StyleSheet, Text, View } from "react-native";

export default function ChatHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Graphland Chat</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#671ddf",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
