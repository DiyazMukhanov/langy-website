import { useMeeting } from "@videosdk.live/react-sdk";
import styles from "./ChatMessage.module.scss";

export const ChatMessage = ({ senderId, senderName, text, timestamp }) => {
  const { localParticipant } = useMeeting();
  const localParticipantId = localParticipant?.id;
  const localSender = localParticipantId === senderId;

  console.log(senderName);

  return (
    <div>
      <div className={styles.message}>
        <p>{new Date(timestamp).toLocaleTimeString()}</p>
        <span className={styles.withNameBlock}>
          <p className={styles.name}>{senderName}:</p>
          <span className="text-white">{text}</span>
        </span>
      </div>
    </div>
  );
};
