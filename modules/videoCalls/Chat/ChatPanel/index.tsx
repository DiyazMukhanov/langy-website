import { ChatInput } from "../ChatInput";
import { ChatMessages } from "../ChatMessages";
import styles from "./ChatPanel.module.scss";

export function ChatPanel({ panelHeight }) {
  const inputHeight = 72;
  //   const listHeight = panelHeight - inputHeight;

  return (
    <div className={styles.chatPanel}>
      <h2>Чат</h2>
      <div className={styles.messagesBlock}>
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
}
