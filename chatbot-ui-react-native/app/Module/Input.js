import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/design";

export default function InputBar({ onSend }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Type a message..."
                placeholderTextColor="rgba(255,255,255,0.7)"
                multiline
                maxLength={2000}
                onSubmitEditing={() => {}}
                blurOnSubmit={false}
            />
            <TouchableOpacity
                onPress={() => {
                    if (text.trim()) {
                        onSend(text.trim());
                        setText("");
                    }
                }}
                accessibilityLabel="Send message"
            >
                <FontAwesome name="send" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.primary,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.08)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 6,
    },
    input: {
        flex: 1,
        color: "#fff",
        marginRight: 10,
        maxHeight: 120,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.06)",
    },
});
