import { usePubSub } from "@videosdk.live/react-sdk";
import { useState } from "react";
import styles from "./ChatInput.module.scss";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { publish } = usePubSub("CHAT");

  const sendMessage = () => {
    if (message.trim()) {
      publish(message.trim());
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="Пишите здесь"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter" && message.trim()) {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage} className={styles.sendBtn}>
        Отправить
      </button>
    </div>
  );
};
