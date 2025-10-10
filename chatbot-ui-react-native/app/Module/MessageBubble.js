import { StyleSheet, Text, View } from "react-native";
import { colors, radii, spacing } from "../Theme/design";

export default function MessageBubble({
    message,
    isUser,
    showAvatar,
    showTimestamp,
}) {
    const avatarText = isUser ? "A" : "B";
    const avatarColor = isUser ? colors.userBubble : colors.botBubble;

    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: "row",
                    alignSelf: isUser ? "flex-end" : "flex-start",
                },
            ]}
        >
            {!isUser && showAvatar && (
                <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
                    <Text style={styles.avatarText}>{avatarText}</Text>
                </View>
            )}

            <View
                style={[
                    styles.bubble,
                    {
                        backgroundColor: isUser
                            ? colors.userBubble
                            : colors.botBubble,
                    },
                ]}
            >
                <Text
                    style={{ color: isUser ? colors.textUser : colors.textBot }}
                >
                    {message.text}
                </Text>
            </View>

            {isUser && showAvatar && (
                <View
                    style={[
                        styles.avatar,
                        { backgroundColor: avatarColor, marginLeft: 6 },
                    ]}
                >
                    <Text style={styles.avatarText}>{avatarText}</Text>
                </View>
            )}

            {showTimestamp && (
                <Text style={styles.timestamp}>
                    {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.messageMargin,
        alignItems: "flex-end",
    },
    bubble: {
        padding: spacing.bubblePadding,
        borderRadius: radii.bubble,
        maxWidth: "80%",
    },
    timestamp: {
        fontSize: 10,
        color: "#999",
        marginTop: 2,
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
