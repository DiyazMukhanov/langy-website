import { usePubSub } from "@videosdk.live/react-sdk";
import { ChatMessage } from "../ChatMessage";
import styles from "./ChatMessages.module.scss";
import { useEffect, useRef } from "react";

export const ChatMessages = () => {
  const { messages } = usePubSub("CHAT");
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the messages container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.messages}>
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          senderId={msg.senderId}
          senderName={msg.senderName}
          text={msg.message}
          timestamp={msg.timestamp}
        />
      ))}
      {/* Dummy div to scroll into */}
      <div ref={messagesEndRef} />
    </div>
  );
};
