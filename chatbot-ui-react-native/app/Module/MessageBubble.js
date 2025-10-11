import { StyleSheet, Text, View } from "react-native";
import { colors, radii, spacing } from "../theme/design";

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
                    alignSelf: isUser ? "flex-end" : "flex-start",
                },
            ]}
        >
            <View style={styles.row}>
                {!isUser && showAvatar && (
                    <View
                        style={[
                            styles.avatar,
                            { backgroundColor: avatarColor, marginLeft: 8 },
                        ]}
                    >
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
                            marginLeft: isUser ? 40 : 8,
                            marginRight: isUser ? 8 : 40,
                        },
                    ]}
                >
                    <Text
                        style={{
                            color: isUser ? colors.textUser : colors.textBot,
                        }}
                    >
                        {message.text}
                    </Text>

                    {showTimestamp && (
                        <Text style={styles.timestampInside}>
                            {new Date(message.createdAt).toLocaleTimeString(
                                [],
                                { hour: "2-digit", minute: "2-digit" }
                            )}
                        </Text>
                    )}
                </View>

                {isUser && showAvatar && (
                    <View
                        style={[
                            styles.avatar,
                            { backgroundColor: avatarColor, marginRight: 8 },
                        ]}
                    >
                        <Text style={styles.avatarText}>{avatarText}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.messageMargin,
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    bubble: {
        padding: spacing.bubblePadding,
        borderRadius: radii.bubble,
        maxWidth: "80%",
    },
    timestampInside: {
        fontSize: 10,
        marginTop: 6,
        alignSelf: "flex-end",
        color: "#666",
        opacity: 0.75,
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
