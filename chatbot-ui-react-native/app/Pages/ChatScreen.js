import { useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import replies from "../data/replies.json";
import ChatHeader from "../module/ChatHeader";
import InputBar from "../module/Input";
import MessageBubble from "../module/MessageBubble";
import TypingIndicator from "../module/TypingIndicator";
import { colors } from "../theme/design";

export default function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: "Hello, I am Graphland Bot. How can I help you?",
            createdAt: new Date(),
            userId: 2,
        },
    ]);
    const [typing, setTyping] = useState(false);
    const flatRef = useRef(null);
    const replyIndex = useRef(0);
    const typingIntervalRef = useRef(null);
    const [streaming, setStreaming] = useState(false);

    const addMessage = (text, userId) => {
        const newMessage = {
            _id: Date.now() + Math.floor(Math.random() * 1000),
            text,
            createdAt: new Date(),
            userId,
        };

        setMessages((prev) => [newMessage, ...prev]);
    };

    const sendBotReply = () => {
        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
        }

        setTyping(true);

        setTimeout(() => {
            setTyping(false);

            const text = replies[replyIndex.current].text;
            replyIndex.current = (replyIndex.current + 1) % replies.length;

            const placeholderId = Date.now() + Math.floor(Math.random() * 1000);

            setMessages((prev) => [
                {
                    _id: placeholderId,
                    text: "",
                    createdAt: new Date(),
                    userId: 2,
                },
                ...prev,
            ]);

            let cursor = 0;
            const stepMs = 20;

            typingIntervalRef.current = setInterval(() => {
                cursor++;

                setMessages((prev) => {
                    const idx = prev.findIndex((m) => m._id === placeholderId);
                    if (idx === -1) return prev;

                    const updated = {
                        ...prev[idx],
                        text: text.slice(0, cursor),
                    };

                    const next = [...prev];
                    next[idx] = updated;
                    return next;
                });

                try {
                    flatRef.current?.scrollToOffset({
                        offset: 0,
                        animated: true,
                    });
                } catch (e) {}

                if (cursor >= text.length) {
                    clearInterval(typingIntervalRef.current);
                    typingIntervalRef.current = null;
                }
            }, stepMs);
        }, 800);
    };

    const handleSend = (text) => {
        if (!text || !text.trim()) return;
        addMessage(text.trim(), 1);
        sendBotReply();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 80}
            >
                <ChatHeader />
                <FlatList
                    ref={flatRef}
                    data={messages}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item, index }) => {
                        const prev = messages[index + 1];

                        const showAvatar = !prev || prev.userId !== item.userId;
                        const showTimestamp =
                            !prev || prev.userId !== item.userId;
                        return (
                            <MessageBubble
                                message={item}
                                isUser={item.userId === 1}
                                showAvatar={showAvatar}
                                showTimestamp={showTimestamp}
                            />
                        );
                    }}
                    inverted
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="on-drag"
                    contentContainerStyle={{ paddingTop: 8, paddingBottom: 16 }}
                    onContentSizeChange={() =>
                        flatRef.current?.scrollToOffset({
                            offset: 0,
                            animated: true,
                        })
                    }
                />
                {typing && <TypingIndicator />}
                {streaming && (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#ff4d4d",
                            padding: 6,
                            margin: 6,
                            borderRadius: 6,
                            alignSelf: "center",
                        }}
                        onPress={() => {
                            if (typingIntervalRef.current) {
                                clearInterval(typingIntervalRef.current);
                                typingIntervalRef.current = null;

                                setMessages((prev) => {
                                    const idx = prev.findIndex(
                                        (m) => m.userId === 2 && m.text === ""
                                    );
                                    if (idx === -1) return prev;
                                    const updated = {
                                        ...prev[idx],
                                        text: replies[replyIndex.current - 1]
                                            .text,
                                    };
                                    const next = [...prev];
                                    next[idx] = updated;
                                    return next;
                                });

                                setStreaming(false);
                                setTyping(false);
                            }
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>
                            ⏹ Stop
                        </Text>
                    </TouchableOpacity>
                )}

                <InputBar onSend={handleSend} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
